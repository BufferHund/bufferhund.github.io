const fs = require("fs");
const path = require("path");
const https = require("https");

const ROOT = path.resolve(__dirname, "..");
const CONCURRENCY = 6;

// 术语保护：翻译前替换为占位符，翻译后还原（避免 LLM→法学硕士 这类误译）
const TERMS = ["LLM", "LLMs", "RLHF", "RAG", "MCP", "MoE", "BLEU", "ROUGE", "METEOR", "BERTScore", "BLEURT",
  "MoverScore", "LoRA", "QLoRA", "PEFT", "GPT", "API", "REST", "JSON", "SQL", "JavaScript",
  "TypeScript", "Node.js", "MATLAB", "React", "Vue", "Angular", "GraphQL", "gRPC", "Git", "GitHub",
  "Frontend", "Backend", "CSS", "HTML", "UI", "UX", "SVG", "WebRTC", "TensorFlow", "PyTorch",
  "Transformer", "Attention", "Prompt", "token", "tokenization", "embedding", "fine-tuning",
  "benchmark", "inference", "AA", "CPU", "GPU", "NPU", "TPU", "Docker", "Kubernetes", "NumPy", "pandas",
  "Scikit-learn", "SQLite", "PostgreSQL", "Tailwind", "Bootstrap", "Webpack", "Vite", "TypeScript"];
const PLACEHOLDER_PREFIX = "QR_TERM_";

function translate(text, from, to) {
  return new Promise((resolve, reject) => {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURIComponent(text)}`;
    https
      .get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => {
          try {
            const j = JSON.parse(data);
            resolve(j[0].map((x) => x[0]).join(""));
          } catch (e) {
            reject(e);
          }
        });
      })
      .on("error", reject);
  });
}

async function translateText(text, to) {
  if (!text.trim() || text.length > 4500) return text;
  // 术语保护：先占位
  const protectedText = protectTerms(text);
  for (let i = 0; i < 5; i++) {
    try {
      const r = await translate(protectedText, "en", to);
      if (r) return restoreTerms(r);
    } catch (e) {
      await new Promise((r) => setTimeout(r, 500 * (i + 1)));
    }
  }
  return restoreTerms(protectedText);
}

function protectTerms(text) {
  let out = text;
  TERMS.forEach((term, i) => {
    const re = new RegExp(`\\b${term}\\b`, "g");
    out = out.replace(re, `<${PLACEHOLDER_PREFIX}${i}>`);
  });
  return out;
}

function restoreTerms(text) {
  let out = text;
  TERMS.forEach((term, i) => {
    out = out.replace(new RegExp(`<${PLACEHOLDER_PREFIX}${i}>`, "g"), term);
  });
  return out;
}

async function mapLimit(items, limit, fn) {
  const results = new Array(items.length);
  let idx = 0;
  async function worker() {
    while (idx < items.length) {
      const i = idx++;
      results[i] = await fn(items[i], i);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, () => worker()));
  return results;
}

function extractFrontmatter(md) {
  const m = md.match(/^\s*---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { fm: "", content: md };
  return { fm: m[1], content: m[2] };
}

function splitBlocks(content) {
  const blocks = [];
  let inCode = false;
  let textBuf = null;
  const flush = () => {
    if (textBuf) {
      blocks.push({ kind: "text", lines: [...textBuf] });
      textBuf = null;
    }
  };
  for (const line of content.split("\n")) {
    const t = line.trim();
    if (t.startsWith("```") || t.startsWith("~~~")) {
      flush();
      inCode = !inCode;
      blocks.push({ kind: "code", lines: [line] });
      continue;
    }
    if (inCode || !t) {
      flush();
      blocks.push({ kind: "raw", lines: [line] });
      continue;
    }
    if (
      t.startsWith("<") || t.startsWith("|") || t.startsWith("[!") || t.startsWith("{%") ||
      t.startsWith("!") || t.startsWith("[^") || t.startsWith("- ") ||
      t.startsWith("* ") || t.startsWith("+ ") || t.startsWith("> ")
    ) {
      flush();
      blocks.push({ kind: "raw", lines: [line] });
      continue;
    }
    if (t.startsWith("#")) {
      flush();
      blocks.push({ kind: "heading", lines: [line] });
      continue;
    }
    if (!textBuf) textBuf = [];
    textBuf.push(line);
  }
  flush();
  return blocks;
}

async function translateBlock(block, lang) {
  if (block.kind === "code" || block.kind === "raw") return block.lines;
  if (block.kind === "heading") {
    const m = block.lines[0].match(/^(#+)\s*(.*)$/);
    const tr = await translateText(m[2].trim(), lang);
    return [`${m[1]} ${tr}`];
  }
  const tr = await translateText(block.lines.join("\n"), lang);
  return tr.split("\n");
}

function extractFirstTitle(content) {
  const m = content.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : "";
}

async function convertFile(srcPath, lang) {
  const md = fs.readFileSync(srcPath, "utf8");
  const { fm, content } = extractFrontmatter(md);
  const blocks = splitBlocks(content);
  const translated = await mapLimit(blocks, CONCURRENCY, (b) => translateBlock(b, lang));
  const body = translated.flat().join("\n");
  const fmTitle = (fm.match(/^title:\s*(.+)$/m) || [])[1];
  const title = extractFirstTitle(content) || (fmTitle ? fmTitle.replace(/^["']|["']$/g, "").trim() : "");
  const newTitle = title ? await translateText(title, lang) : "";
  const newFm = newTitle ? fm.replace(/^title:.*$/m, `title: ${JSON.stringify(newTitle)}`) : fm;
  const body2 = newTitle && extractFirstTitle(content) ? body.replace(/^#\s+[^\n]+$/m, `# ${newTitle}`) : body;
  return `---\n${newFm}\nlang: ${lang}\n---\n\n${body2}\n`;
}

async function main() {
  const args = process.argv.slice(2);
  const langs = args.includes("--de") ? ["de"] : args.includes("--zh") ? ["zh-CN"] : ["zh-CN", "de"];
  const only = args.find((a) => !a.startsWith("--"));

  const targets = [];
  const postsDir = path.join(ROOT, "source", "_posts");
  for (const f of fs.readdirSync(postsDir).filter((x) => x.endsWith(".md"))) {
    targets.push({ rel: path.join("_posts", f), src: path.join(postsDir, f) });
  }
  targets.push({ rel: "about/index.md", src: path.join(ROOT, "source", "about", "index.md") });
  for (const p of ["projects/index.md", "research/index.md", "talks/index.md"]) {
    const src = path.join(ROOT, "source", p);
    if (fs.existsSync(src)) targets.push({ rel: p, src });
  }
  for (const p of ["tags/index.md", "categories/index.md", "archives/index.md"]) {
    const src = path.join(ROOT, "source", p);
    if (fs.existsSync(src)) targets.push({ rel: p, src });
  }

  for (const lang of langs) {
    const outDir = path.join(ROOT, "translations", lang);
    for (const t of targets) {
      if (only && !t.rel.includes(only)) continue;
      const dest = path.join(outDir, t.rel);
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      try {
        const r = await convertFile(t.src, lang);
        fs.writeFileSync(dest, r);
        console.log(`[${lang}] ${t.rel} OK`);
      } catch (e) {
        console.error(`[${lang}] ${t.rel} FAIL`, e.message);
      }
    }
  }
  console.log("done");
}

main().catch((e) => console.error(e));
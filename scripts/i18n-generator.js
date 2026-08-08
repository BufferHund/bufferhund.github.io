"use strict";

const fs = require("fs");
const path = require("path");
const fm = require("hexo-front-matter");

const TRANSLATIONS_DIR = path.join(hexo.base_dir, "translations");
const cache = {};

function loadTranslations(lang) {
  if (cache[lang]) return cache[lang];
  const dir = path.join(TRANSLATIONS_DIR, lang);
  const map = new Map();
  if (fs.existsSync(dir)) {
    const walk = (d, prefix) => {
      for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
        const full = path.join(d, entry.name);
        if (entry.isDirectory()) walk(full, prefix + entry.name + "/");
        else if (entry.name.endsWith(".md")) {
          const data = fm.parse(fs.readFileSync(full, "utf8"));
          let body;
          try {
            body = hexo.render.renderSync({ text: data._content || "", engine: "markdown" });
          } catch (e) {
            body = data._content;
          }
          map.set(prefix + entry.name, { title: data.title || "", lang, body });
        }
      }
    };
    walk(dir, "");
  }
  cache[lang] = map;
  return map;
}

function getLanguages() {
  const cfg = hexo.config.i18n;
  const arr = cfg ? cfg.languages : null;
  if (Array.isArray(arr) && arr.length) return arr.filter((l) => l !== "default");
  return [];
}

function pick(obj, keys) {
  const o = {};
  keys.forEach((k) => { if (obj[k] !== undefined) o[k] = obj[k]; });
  return o;
}

hexo.extend.generator.register("i18n-posts", function (locals) {
  const languages = getLanguages();
  if (!languages.length) return [];
  return locals.posts.reduce((out, post) => {
    for (const lang of languages) {
      const files = loadTranslations(lang);
      const key = post.source.replace(/\\/g, "/");
      if (!files.has(key)) continue;
      const tr = files.get(key);
      out.push({
        path: lang + "/" + post.path,
        layout: ["post", "page", "index"],
        data: Object.assign(
          pick(post, ["title", "date", "updated", "categories", "tags", "comments", "hidden", "sticky", "excerpt"]),
          { lang, __i18n: true, title: tr.title || post.title, content: tr.body, _content: tr.body }
        )
      });
    }
    return out;
  }, []);
});

hexo.extend.generator.register("i18n-pages", function (locals) {
  const languages = getLanguages();
  if (!languages.length) return [];
  return locals.pages.reduce((out, page) => {
    for (const lang of languages) {
      const files = loadTranslations(lang);
      const key = page.source.replace(/\\/g, "/");
      if (!files.has(key)) continue;
      const tr = files.get(key);
      out.push({
        path: lang + "/" + page.path,
        layout: ["page", "post", "index"],
        data: Object.assign(
          pick(page, ["title", "date", "updated", "comments", "comment", "id", "type"]),
          { lang, __i18n: true, title: tr.title || page.title, content: tr.body, _content: tr.body }
        )
      });
    }
    return out;
  }, []);
});

hexo.extend.generator.register("i18n-archives", function (locals) {
  const languages = getLanguages();
  if (!languages.length) return [];

  const cloneItems = (items, lang) => {
    const res = [];
    for (const item of items || []) {
      if (!item || !item.layout) continue;
      const path = item.path;
      if (path && path.indexOf(lang + "/") === 0) continue;
      const isLanding = path === "" || path === "index.html";
      const newPath = isLanding ? lang + "/" : lang + "/" + path;
      const data = Object.assign({}, item.data, { lang, __i18n: true });
      if (data.posts && data.posts.toArray) data.posts = data.posts.toArray();
      if (data.base !== undefined) data.base = lang + "/" + data.base;
      if (data.current_url !== undefined) data.current_url = lang + "/" + data.current_url;
      if (data.prev_link !== undefined && data.prev_link) data.prev_link = lang + "/" + data.prev_link;
      if (data.next_link !== undefined && data.next_link) data.next_link = lang + "/" + data.next_link;
      res.push({ path: newPath, layout: item.layout, data });
    }
    return res;
  };

  const tasks = [];
  for (const lang of languages) {
    for (const name of ["index", "archive", "category", "tag"]) {
      const g = hexo.extend.generator.list()[name];
      if (!g) continue;
      tasks.push(Promise.resolve(g.call(this, locals)).then((items) => cloneItems(items, lang)));
    }
  }
  return Promise.all(tasks).then((all) => [].concat(...all));
});
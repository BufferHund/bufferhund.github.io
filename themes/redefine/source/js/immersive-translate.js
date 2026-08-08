/* Immersive-style bilingual translation powered by Google Translate (free gtx endpoint).
 * Controlled via the side-tools buttons: browser-translate / DE (German) / 文 (Chinese).
 */
(function () {
  "use strict";

  if (window.__imtLoaded) return;
  window.__imtLoaded = true;

  var I18N = {
    "zh-CN": { working: "翻译中…", done: "已翻译 %s 段", fail: "翻译失败，稍后重试", noPost: "请先打开一篇文章", cleared: "已清除翻译" },
    de: { working: "Wird übersetzt…", done: "%s Absätze übersetzt", fail: "Übersetzung fehlgeschlagen", noPost: "Bitte zuerst einen Artikel öffnen", cleared: "Übersetzung entfernt" }
  };
  function t(lang, key, n) {
    var s = I18N[lang] ? I18N[lang][key] : I18N["zh-CN"][key];
    return n != null ? s.replace("%s", n) : s;
  }
  var activeLang = null; // null = 未翻译, 否则为当前译文语言
  var container = null;
  var statusEl = null;

  var BLOCK_SEL = "p, li, blockquote, h2, h3, h4";
  var SKIP_SEL = "code, pre, math, .katex, .it-trans, [data-no-translate]";

  function isNested(el) {
    return el.parentElement ? Boolean(el.parentElement.closest(BLOCK_SEL + ", .it-trans")) : false;
  }

  function looksChinese(text) {
    var m = text.match(/[\u4e00-\u9fff]/g);
    return m && m.length > text.length * 0.2;
  }

  function collectBlocks() {
    container = document.querySelector(".article-content") || document.querySelector(".page-template-content");
    if (!container) return [];
    var nodes = Array.prototype.slice.call(container.querySelectorAll(BLOCK_SEL));
    var out = [];
    nodes.forEach(function (el) {
      if (isNested(el)) return;
      if (el.closest(SKIP_SEL)) return;
      var text = el.textContent.replace(/\s+/g, " ").trim();
      if (!text) return;
      if (looksChinese(text)) return;
      out.push({ el: el, text: text });
    });
    return out;
  }

  function translateBatch(texts, lang) {
    var joined = texts.join("\n");
    var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=" + lang + "&dt=t&q=" + encodeURIComponent(joined);
    return fetch(url)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        var parts = data[0] || [];
        var all = "";
        parts.forEach(function (seg) {
          if (!Array.isArray(seg) || !seg.length) return;
          var s = seg[0];
          if (typeof s === "string") all += s;
        });
        var lines = all.split(/\n/);
        var out = [];
        for (var i = 0; i < lines.length; i++) {
          var l = lines[i].trim();
          if (l) out.push(l);
        }
        while (out.length < texts.length) out.push("");
        return out.slice(0, texts.length);
      });
  }

  function insertTrans(el, transText) {
    var div = document.createElement("div");
    div.className = "it-trans it-bilingual";
    div.textContent = transText;
    el.parentNode.insertBefore(div, el.nextSibling);
  }

  function clearTranslations() {
    Array.prototype.forEach.call(document.querySelectorAll(".it-trans, .it-source"), function (n) {
      n.remove();
    });
    if (container) container.classList.remove("it-hide-source");
    activeLang = null;
  }

  function showStatus(text) {
    if (statusEl) statusEl.remove();
    statusEl = document.createElement("div");
    statusEl.id = "it-status";
    statusEl.textContent = text;
    statusEl.style.cssText =
      "position:fixed;right:24px;bottom:56px;z-index:9999;font-size:13px;color:#999;";
    document.body.appendChild(statusEl);
    if (text.indexOf("失败") !== -1 || text.indexOf("fehlgeschlagen") !== -1 || text.indexOf("请先") !== -1 || text.indexOf("Bitte") !== -1) {
      setTimeout(function () { statusEl.remove(); statusEl = null; }, 3000);
    }
  }

  function translateTo(lang) {
    var blocks = collectBlocks();
    if (!blocks.length) {
      showStatus(t(lang, "noPost"));
      return;
    }
    clearTranslations();
    activeLang = lang;
    showStatus(t(lang, "working"));

    var i = 0;
    var CHUNK = 8;
    var total = blocks.length;

    function nextChunk() {
      if (i >= total) {
        showStatus(t(lang, "done", total));
        setTimeout(function () { statusEl.remove(); statusEl = null; }, 2500);
        return;
      }
      var chunk = blocks.slice(i, i + CHUNK);
      i += CHUNK;
      var els = chunk.map(function (b) { return b.el; });
      var texts = chunk.map(function (b) { return b.text; });
      translateBatch(texts, lang).then(function (res) {
        els.forEach(function (el, idx) {
          var t2 = res[idx];
          if (t2 && t2.trim()) {
            el.classList.add("it-source");
            insertTrans(el, t2.trim());
          }
        });
        showStatus(t(lang, "working") + " " + i + "/" + total);
        setTimeout(nextChunk, 250);
      }).catch(function () {
        showStatus(t(lang, "fail"));
      });
    }

    nextChunk();
  }

  function currentLocale() {
    var p = window.location.pathname;
    if (p.indexOf("/zh-CN/") === 0 || p.indexOf("/zh-cn/") === 0) return "zh-CN";
    if (p.indexOf("/de/") === 0) return "de";
    return "en";
  }

  function isTranslatedPage() {
    return currentLocale() !== "en";
  }

  function stripLocale(pathname) {
    return pathname.replace(/^\/(zh-CN|zh-cn)\//i, "/").replace(/^\/de\//, "/");
  }

  function staticHrefFor(lang) {
    var base = stripLocale(window.location.pathname);
    if (lang === "en") return base;
    return "/" + lang + base;
  }

  function tryStatic(lang, fallback) {
    var href = staticHrefFor(lang);
    if (href === window.location.pathname) return;
    fetch(href, { method: "HEAD" })
      .then(function (r) {
        if (r.ok) window.location.href = href;
        else fallback();
      })
      .catch(function () { fallback(); });
  }

  function bindSideTools() {
    var btnDe = document.querySelector(".tool-translate-de");
    if (btnDe) {
      btnDe.addEventListener("click", function () {
        if (currentLocale() === "de") { window.location.href = stripLocale(window.location.pathname); return; }
        tryStatic("de", function () {
          if (activeLang === "de") { clearTranslations(); showStatus(t("de", "cleared")); }
          else translateTo("de");
        });
      });
    }
    var btnZh = document.querySelector(".tool-translate-zh");
    if (btnZh) {
      btnZh.addEventListener("click", function () {
        if (currentLocale() === "zh-CN") { window.location.href = stripLocale(window.location.pathname); return; }
        tryStatic("zh-CN", function () {
          if (activeLang === "zh-CN") { clearTranslations(); showStatus(t("zh-CN", "cleared")); }
          else translateTo("zh-CN");
        });
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindSideTools);
  } else {
    bindSideTools();
  }

  window.__imtRef = { clearTranslations: clearTranslations };

  try {
    if (window.swup) {
      swup.hooks.on("page:view", bindSideTools);
    }
  } catch (e) {}
})();

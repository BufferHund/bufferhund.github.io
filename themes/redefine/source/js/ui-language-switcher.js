/* Runtime UI language switcher (en / zh-CN / de) for Redefine theme.
 * Single side-tools button that cycles EN -> 中文 -> DE, reads the dict
 * JSON emitted at build time, replaces [data-i18n] element text, persists
 * choice in localStorage, and re-applies on swup (PJAX) page transitions.
 */
(function () {
  "use strict";

  if (window.__i18nSwitcherLoaded) return;
  window.__i18nSwitcherLoaded = true;

  var LANGS = ["en", "zh-CN", "de"];
  var LABELS = { en: "EN", "zh-CN": "中文", de: "DE" };
  var LOCALES = { en: "en", "zh-CN": "zh-CN", de: "de" };
  var TITLES = {
    en: "Site language",
    "zh-CN": "站点语言",
    de: "Seitensprache"
  };

  function loadDict() {
    var s = document.getElementById("hexo-i18n-dicts");
    if (!s) return null;
    try { return JSON.parse(s.textContent); } catch (e) { return null; }
  }
  var DICTS = loadDict();

  function getKey(obj, key) {
    if (!obj) return null;
    var parts = key.split(".");
    var cur = obj;
    for (var i = 0; i < parts.length; i++) {
      if (cur == null) return null;
      cur = cur[parts[i]];
    }
    return typeof cur === "string" ? cur : null;
  }

  function currentLang() {
    return pathLang();
  }

  function applyLang(lang) {
    if (lang !== "en" && !DICTS[lang]) lang = "en";
    var dict = DICTS[lang] || DICTS.en || {};
    document.documentElement.setAttribute("lang", LOCALES[lang] || lang);

    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n]"), function (el) {
      var key = el.getAttribute("data-i18n");
      var txt = getKey(dict, key);
      if (txt == null) return;
      var arg = el.getAttribute("data-i18n-arg");
      if (arg != null) txt = txt.replace("%s", arg);
      el.textContent = txt;
    });

    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n-placeholder]"), function (el) {
      var txt = getKey(dict, el.getAttribute("data-i18n-placeholder"));
      if (txt != null) el.setAttribute("placeholder", txt);
    });

    var nbtn = document.querySelector(".navbar-lang-switch");
    if (nbtn) {
      var nlabel = nbtn.querySelector(".navbar-lang-label");
      if (nlabel) nlabel.textContent = LABELS[lang];
      nbtn.title = TITLES[lang];
      nbtn.setAttribute("data-current", lang);
    }

    var btn = document.querySelector(".tool-lang-switch .lang-label");
    if (btn) {
      btn.textContent = LABELS[lang];
      var li = btn.closest(".tool-lang-switch");
      if (li) li.title = TITLES[lang];
    }

    try { localStorage.setItem("ui-lang", lang); } catch (e) {}
  }

  function langHref(lang) {
    var p = window.location.pathname;
    p = p.replace(/^\/(zh-CN|zh-cn|de)\//, "/");
    if (!p.endsWith("/")) p += "/";
    if (lang === "en") return p;
    return "/" + lang + p;
  }

  function tryNavigate(lang, fallback) {
    var href = langHref(lang);
    if (href === window.location.pathname) { fallback(); return; }
    fetch(href, { method: "HEAD" })
      .then(function (r) { if (r.ok) window.location.href = href; else fallback(); })
      .catch(function () { fallback(); });
  }

  function pathLang() {
    var p = window.location.pathname;
    if (p.indexOf("/zh-CN/") === 0 || p.indexOf("/zh-cn/") === 0) return "zh-CN";
    if (p.indexOf("/de/") === 0) return "de";
    return "en";
  }

  function goLang(lang, action) {
    tryNavigate(lang, function () {
      action(lang);
    });
  }

  function buildSwitcher() {
    var navbarItem = document.querySelector(".navbar-lang-switch");
    var active = currentLang();
    var label = LABELS[active];

    if (navbarItem) {
      var li = navbarItem;
      li.title = TITLES[active];
      li.dataset.current = active;

      var icon = li.querySelector("i");
      var text = document.createElement("span");
      text.className = "navbar-lang-label";
      text.textContent = label;
      text.style.cssText = "margin-left:4px;font-size:0.9rem;font-weight:600;display:inline-block;min-width:2.2em;text-align:center;";
      li.insertBefore(text, icon.nextSibling);

      // highlight current language in dropdown
      var links = li.querySelectorAll(".navbar-lang-dropdown a");
      for (var k = 0; k < links.length; k++) {
        links[k].classList.remove("lang-active");
        if (links[k].getAttribute("data-lang") === active) {
          links[k].classList.add("lang-active");
        }
        links[k].removeEventListener("click", links[k]._langGo);
        links[k]._langGo = function (e) {
          e.preventDefault();
          e.stopPropagation();
          var lang = this.getAttribute("data-lang");
          if (lang === pathLang()) { hideDropdown(li); return; }
          goLang(lang, function (l) {
            applyLang(l);
            try {
              document.dispatchEvent(new CustomEvent("ui-language-changed", { detail: { lang: l } }));
            } catch (err) {}
          });
        };
        links[k].addEventListener("click", links[k]._langGo);
      }

      // toggle dropdown on icon click
      li.removeEventListener("click", li._langToggle);
      li._langToggle = function (e) {
        if (e.target.closest && e.target.closest(".navbar-lang-dropdown a")) return;
        var dd = li.querySelector(".navbar-lang-dropdown");
        if (!dd) return;
        var isOpen = dd.classList.contains("open");
        hideDropdowns();
        if (!isOpen) dd.classList.add("open");
      };
      li.addEventListener("click", li._langToggle);
      return;
    }

    /* fallback: side-tools button if navbar element missing */
    var target = document.querySelector(".side-tools-container .hidden-tools-list");
    if (!target) return;

    var old = document.querySelector(".tool-lang-switch");
    if (old) old.remove();

    var li2 = document.createElement("li");
    li2.className = "right-bottom-tools tool-lang-switch flex justify-center items-center";
    li2.title = TITLES[label] || "Site language";
    li2.style.cursor = "pointer";

    var span = document.createElement("span");
    span.className = "translate-lang-label lang-label";
    span.style.fontSize = "0.78rem";

    li2.appendChild(span);
    li2.addEventListener("click", function (e) {
      e.stopPropagation();
      var next = LANGS[(LANGS.indexOf(pathLang()) + 1) % LANGS.length];
      goLang(next, function (l) {
        applyLang(l);
        try {
          document.dispatchEvent(new CustomEvent("ui-language-changed", { detail: { lang: l } }));
        } catch (err) {}
      });
    });

    target.insertBefore(li2, target.firstChild);
    applyLang(currentLang());
  }

  function hideDropdowns() {
    var all = document.querySelectorAll(".navbar-lang-dropdown.open");
    for (var i = 0; i < all.length; i++) all[i].classList.remove("open");
  }

  function hideDropdown(li) {
    var dd = li.querySelector(".navbar-lang-dropdown");
    if (dd) dd.classList.remove("open");
  }

  function init() {
    if (!DICTS) return;
    buildSwitcher();
    applyLang(currentLang());

    document.addEventListener("click", function (e) {
      if (!(e.target.closest && e.target.closest(".navbar-lang-switch"))) {
        hideDropdowns();
      }
    });

    try {
      if (window.swup) {
        swup.hooks.on("page:view", function () {
          var existing = document.querySelector(".tool-lang-switch");
          if (existing) existing.remove();
          var nlabel = document.querySelector(".navbar-lang-switch .navbar-lang-label");
          if (nlabel) nlabel.remove();
          buildSwitcher();
          applyLang(currentLang());
        });
      }
    } catch (e) {}
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
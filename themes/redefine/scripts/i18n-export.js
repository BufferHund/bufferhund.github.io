/* Export all UI language dicts (en / de / zh-CN) to window.i18n for runtime switching */
"use strict";

const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

hexo.extend.helper.register("export_i18n_dict", function () {
  const languageDir = path.join(__dirname, "../languages");
  const dicts = {};

  ["en", "de", "zh-CN"].forEach((lang) => {
    const file = path.join(languageDir, `${lang}.yml`);
    if (fs.existsSync(file)) {
      try {
        dicts[lang] = yaml.load(fs.readFileSync(file, "utf8"));
      } catch (e) {
        console.log(e);
        dicts[lang] = {};
      }
    } else {
      dicts[lang] = {};
    }
  });

  return `<script id="hexo-i18n-dicts" type="application/json">
${JSON.stringify(dicts)}
</script>`;
});

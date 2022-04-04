module.exports = {
  plugins: ["stylelint-order", "stylelint-config-rational-order/plugin"],
  rules: {
    "selector-class-pattern":
      "^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$",
    "max-empty-lines": 1,
    indentation: 4,
    "media-feature-name-disallowed-list": [
      "max-width",
      {
        message:
          "Use min-width for a mobile-first approach (media-feature-name-blacklist)",
      },
    ],
    "declaration-colon-space-after": "always",
    "number-leading-zero": "always",
    "block-opening-brace-newline-after": "always",
    "block-closing-brace-newline-after": "always",
    "color-no-invalid-hex": true,
    "color-named": "never",
    "selector-no-qualifying-type": true,
    "function-calc-no-invalid": true,
    "block-no-empty": true,
    "unit-no-unknown": true,
    "property-no-unknown": true,
    "comment-no-empty": true,
    "function-name-case": "lower",
    "rule-empty-line-before": "always-multi-line",
    "declaration-empty-line-before": "never",
    "no-extra-semicolons": true,
    "no-duplicate-selectors": true,
    "no-duplicate-at-import-rules": true,
    "shorthand-property-no-redundant-values": true,
    "value-no-vendor-prefix": true,
    "max-nesting-depth": 3,
    "length-zero-no-unit": true,
    "no-missing-end-of-source-newline": true,
    "order/properties-order": [],
    "plugin/rational-order": [
      true,
      {
        "border-in-box-model": false,
        "empty-line-between-groups": false,
      },
    ],
  },
};

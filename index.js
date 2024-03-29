module.exports = {
  ignoreFiles: ["assets/**/*.css"],
  overrides: [
    {
      files: ["**/*.scss", "**/*.pcss"],
    },
  ],
  plugins: ["stylelint-order", "stylelint-config-rational-order/plugin"],
  rules: {
    "at-rule-empty-line-before": ["always", { ignore: ["first-nested"] }],
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always",
    "block-no-empty": true,
    "block-opening-brace-newline-after": "always",
    "block-opening-brace-space-before": "always",
    "color-named": "never",
    "color-no-invalid-hex": true,
    "comment-no-empty": true,
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-semicolon-space-before": "never",
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "never",
    "declaration-empty-line-before": "never",
    "function-name-case": "lower",
    indentation: 2,
    "length-zero-no-unit": true,
    "max-empty-lines": 1,
    "max-nesting-depth": 3,
    "media-feature-name-disallowed-list": [
      "max-width",
      {
        message:
          "Use min-width for a 'mobile-first' approach.",
      },
    ],
    "no-duplicate-at-import-rules": true,
    "no-duplicate-selectors": true,
    "no-extra-semicolons": true,
    "no-missing-end-of-source-newline": true,
    "number-leading-zero": "always",
    "order/properties-order": [],
    "plugin/rational-order": [
      true,
      {
        "border-in-box-model": false,
        "empty-line-between-groups": false,
      },
    ],
    "property-no-unknown": true,
    "rule-empty-line-before": [
      "always-multi-line",
      { except: ["after-single-line-comment"] }
    ],
    "selector-class-pattern": [
      "^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$",
      {
        message: "Use BEM naming convention for your selectors.",
      },
    ],
    "selector-max-empty-lines": 0,
    "selector-no-qualifying-type": true,
    "selector-pseudo-class-disallowed-list": [
      ["not"],
      {
        message: "Avoid using 'negative conditionals' like :not(). It can make the selector much harder to understand.",
      }
    ],
    "shorthand-property-no-redundant-values": true,
    "unit-no-unknown": true,
    "value-no-vendor-prefix": true,
  },
};

/** @type {import("stylelint").Config} */
export default {
  allowEmptyInput: true,
  reportNeedlessDisables: true,
  reportInvalidScopeDisables: true,
  reportDescriptionlessDisables: true,
  reportUnscopedDisables: true,
  plugins: [
    "stylelint-plugin-use-baseline",
    "stylelint-high-performance-animation",
    "stylelint-declaration-block-no-ignored-properties"
  ],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order",
    "@stylistic/stylelint-config",
    "stylelint-plugin-defensive-css/configs/recommended",
    "stylelint-config-html"
  ],
  rules: {
    "color-named": "never",
    "declaration-no-important": true,
    "no-unknown-animations": true,
    "display-notation": "short",
    "font-weight-notation": "numeric",
    "selector-no-deprecated": true,
    "selector-no-invalid": true,
    "selector-no-unmatchable": true,
    "selector-max-id": 0,
    "selector-max-compound-selectors": 3,
    "selector-no-qualifying-type": [
      true,
      {
        ignore: ["attribute"]
      }
    ],
    "function-url-no-scheme-relative": true,
    "max-nesting-depth": [
      3,
      {
        ignore: ["blockless-at-rules", "pseudo-classes"],
        ignoreAtRules: ["if", "else", "each", "for", "while"]
      }
    ],
    "@stylistic/block-closing-brace-newline-after": [
      "always",
      {
        ignoreAtRules: ["if", "else"]
      }
    ],
    "@stylistic/linebreaks": "unix",
    "@stylistic/named-grid-areas-alignment": true,
    "@stylistic/unicode-bom": "never",
    "order/order": [
      [
        "custom-properties",
        "declarations",
        "rules"
      ]
    ],
    "plugin/use-baseline": [
      true,
      {
        available: "newly"
      }
    ],
    "plugin/no-low-performance-animation-properties": [
      true,
      {
        ignore: "paint-properties"
      }
    ],
    "plugin/declaration-block-no-ignored-properties": true
  },
  overrides: [
    {
      files: ["**/*.{scss,astro,svelte,vue}"],
      extends: [
        "stylelint-config-standard-scss",
        // restore postcss-html parser which standard-scss replaces eagerly
        "stylelint-config-html"
      ],
      rules: {
        "property-no-unknown": null,
        "defensive-css/require-pure-selectors": null,
        "at-rule-disallowed-list": ["extend", "import"],
        "order/order": [
          [
            "dollar-variables",
            "custom-properties",
            {
              type: "at-rule",
              name: "include",
              hasBlock: false
            },
            "declarations",
            {
              type: "at-rule",
              name: "include",
              hasBlock: true
            },
            "rules"
          ]
        ],
        "plugin/use-baseline": [
          true,
          {
            available: "newly",
            ignoreAtRules: ["function"]
          }
        ],
        "scss/at-each-key-value-single-line": true,
        "scss/at-function-named-arguments": [
          "always",
          {
            ignore: ["single-argument"],
            ignoreFunctions: [String.raw`/^(color|list|map|math|meta|selector|string)\./`]
          }
        ],
        "scss/at-mixin-named-arguments": [
          "always",
          {
            ignore: ["single-argument"]
          }
        ],
        "scss/at-mixin-no-risky-nesting-selector": true,
        "scss/at-root-no-redundant": true,
        "scss/at-use-no-unnamespaced": true,
        "scss/at-use-no-redundant-alias": true,
        "scss/block-no-redundant-nesting": true,
        "scss/declaration-nested-properties": "never",
        "scss/declaration-property-value-no-unknown": true,
        "scss/dimension-no-non-numeric-values": true,
        "scss/dollar-variable-colon-newline-after": "always-multi-line",
        "scss/dollar-variable-first-in-block": [
          true,
          {
            ignore: ["comments", "imports"]
          }
        ],
        "scss/dollar-variable-no-namespaced-assignment": true,
        "scss/double-slash-comment-inline": "never",
        "scss/function-calculation-no-interpolation": true,
        "scss/function-color-channel": true,
        "scss/function-color-relative": true,
        "scss/function-no-unknown": true,
        "scss/map-keys-quotes": "always",
        "scss/no-duplicate-dollar-variables": true,
        "scss/no-duplicate-load-rules": true,
        "scss/no-unused-private-members": true,
        "scss/property-no-unknown": true,
        "scss/selector-no-redundant-nesting-selector": true,
        "scss/selector-no-union-class-name": true
      }
    }
  ]
};

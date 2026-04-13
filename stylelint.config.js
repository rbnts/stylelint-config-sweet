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
    "stylelint-config-standard-scss",
    "stylelint-config-recess-order",
    "@stylistic/stylelint-config",
    "stylelint-config-html"
  ],
  rules: {
    "color-named": "never",
    "property-no-unknown": null,
    "declaration-property-value-disallowed-list": [
      {
        transition: "/all/"
      },
      {
        message: "Avoid using \"all\" in transition declarations. Be more specific."
      }
    ],
    "selector-disallowed-list": [
      "/:focus(?!-.*)/",
      {
        splitList: true,
        message: "Avoid the \":focus\" pseudo-class. Use \":focus-visible\" instead."
      }
    ],
    "@stylistic/block-closing-brace-newline-after": [
      "always",
      {
        ignoreAtRules: ["if", "else"]
      }
    ],
    "scss/at-mixin-no-risky-nesting-selector": true,
    "scss/at-mixin-argumentless-call-parentheses": "never",
    "scss/at-root-no-redundant": true,
    "scss/at-use-no-unnamespaced": true,
    "scss/at-use-no-redundant-alias": true,
    "scss/block-no-redundant-nesting": true,
    "scss/declaration-property-value-no-unknown": true,
    "scss/dimension-no-non-numeric-values": true,
    "scss/dollar-variable-first-in-block": [
      true,
      {
        ignore: ["comments", "imports"]
      }
    ],
    "scss/dollar-variable-no-namespaced-assignment": true,
    "scss/double-slash-comment-inline": "never",
    "scss/function-calculation-no-interpolation": true,
    "scss/function-color-relative": true,
    "scss/map-keys-quotes": "always",
    "scss/no-duplicate-dollar-variables": true,
    "scss/no-duplicate-load-rules": true,
    "scss/property-no-unknown": true,
    "scss/selector-no-redundant-nesting-selector": true,
    "scss/selector-no-union-class-name": true,
    "plugin/use-baseline": [true, { available: "newly" }],
    "plugin/no-low-performance-animation-properties": true,
    "plugin/declaration-block-no-ignored-properties": true
  }
};

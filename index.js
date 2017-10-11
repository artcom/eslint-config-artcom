module.exports = {
  extends: "eslint:recommended",
  env: {
    node: true,
    browser: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
    ecmaFeatures: {
      "experimentalObjectRestSpread": true
    }
  },
  plugins: [
    "import"
  ],
  settings: {
    "import/ignore": [
      "node_modules",
      "\\.(glsl|json)$"
    ]
  },
  rules: {
    "array-bracket-spacing": 2,
    "array-callback-return": 2,
    "arrow-body-style": 2,
    "arrow-spacing": 2,
    "block-scoped-var": 2,
    "brace-style": [2, "1tbs", { "allowSingleLine": true }],
    "camelcase": 2,
    "comma-spacing": 2,
    "comma-style": 2,
    "computed-property-spacing": 2,
    "curly": [2, "all"],
    "dot-notation": [2, { "allowKeywords": true }],
    "eol-last": 2,
    "eqeqeq": [2, "smart"],
    "func-names": 2,
    "indent": [2, 2, { "SwitchCase": 1 }],
    "jsx-quotes": 2,
    "key-spacing": 2,
    "keyword-spacing": 2,
    "max-len": [2, 100, 2],
    "new-cap": 2,
    "no-alert": 2,
    "no-array-constructor": 2,
    "no-caller": 2,
    "no-delete-var": 2,
    "no-duplicate-imports": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-label": 2,
    "no-extra-parens": 2,
    "no-floating-decimal": 2,
    "no-implicit-coercion": 2,
    "no-implied-eval": 2,
    "no-iterator": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-multiple-empty-lines": [2, { "max": 2, "maxEOF": 1 }],
    "no-native-reassign": 2,
    "no-nested-ternary": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-object": 2,
    "no-new-wrappers": 2,
    "no-octal-escape": 2,
    "no-param-reassign": [2, { "props": true }],
    "no-proto": 2,
    "no-return-assign": 2,
    "no-script-url": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-shadow-restricted-names": 2,
    "no-spaced-func": 2,
    "no-throw-literal": 2,
    "no-trailing-spaces": 2,
    "no-undefined": 0,
    "no-underscore-dangle": 2,
    "no-unneeded-ternary": [2, { "defaultAssignment": false }],
    "no-unused-vars": [2, { "vars": "local", "args": "after-used" }],
    "no-unused-expressions": 2,
    "no-use-before-define": [2, { "functions": false }],
    "no-useless-constructor": 2,
    "no-useless-escape": 2,
    "no-var": 2,
    "no-whitespace-before-property": 2,
    "no-with": 2,
    "object-curly-spacing": [2, "always" ],
    "object-shorthand": 2,
    "one-var": [2, "never"],
    "one-var-declaration-per-line": [2, "always"],
    "padded-blocks": [2, "never"],
    "prefer-arrow-callback": 2,
    "prefer-const": 2,
    "prefer-spread": 2,
    "prefer-rest-params": 2,
    "prefer-template": 2,
    "quote-props": [2, "consistent-as-needed"],
    "quotes": [2, "double", { "avoidEscape": true }],
    "radix": 2,
    "semi-spacing": 2,
    "semi": [2, "never"],
    "space-before-blocks": 2,
    "space-before-function-paren": [2, {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "always"
    }],
    "space-in-parens": 2,
    "space-infix-ops": 2,
    "spaced-comment": 2,
    "strict": [2, "never"],
    "template-curly-spacing": 2,
    "vars-on-top": 2,
    "wrap-iife": 2,
    "yield-star-spacing": 2,
    "yoda": 2,

    "import/default": 2,
    "import/export": 2,
    "import/extensions": [2, { "js": "never", "json": "always" }],
    "import/first": 2,
    "import/named": 2,
    "import/namespace": 2,
    "import/no-amd": 2,
    "import/no-commonjs": 2,
    "import/no-duplicates": 2,
    "import/no-extraneous-dependencies": 2,
    "import/no-named-as-default": 2,
    "import/no-named-as-default-member": 2,
    "import/no-mutable-exports": 2,
    "import/no-unresolved": 2,
    "import/no-webpack-loader-syntax": 2,
    "import/order": [2, {
      "groups": [
        ["builtin", "external"],
        ["internal", "parent", "sibling", "index"]
      ]
    }],
  }
}

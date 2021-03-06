module.exports = {
  "extends": "tslint:recommended",
  "rules": {
    "align": {
      "options": [
        "parameters",
        "statements"
      ]
    },
    "array-type": false,
    "arrow-return-shorthand": true,
    "curly": true,
    "deprecation": {
      "severity": "warning"
    },
    "eofline": true,
    "file-name-casing": [
      true,
      "kebab-case"
    ],
    "import-blacklist": [
      true,
      "rxjs/Rx"
    ],
    "import-spacing": true,
    "indent": [
      true,
      "spaces",
      4
    ],
    "max-classes-per-file": false,
    "max-line-length": [
      true,
      120
    ],
    "member-access": true,
    "member-ordering": [
      true,
      {
        "order": [
          "static-field",
          "instance-field",
          "static-method",
          "instance-method"
        ]
      }
    ],
    "no-bitwise": true,
    "no-console": [
      true,
      "debug",
      "info",
      "time",
      "timeEnd",
      "trace"
    ],
    "no-debugger": true,
    "no-empty": false,
    "no-inferrable-types": [
      true,
      "ignore-params",
      "ignore-properties"
    ],
    "no-non-null-assertion": true,
    "no-return-await": true,
    "no-redundant-jsdoc": true,
    "no-shadowed-variable": true,
    "no-string-literal": true,
    "no-string-throw": true,
    "no-switch-case-fall-through": true,
    "no-trailing-whitespace": true,
    "no-unused-expression": true,
    "no-var-requires": false,
    "no-var-keyword": true,
    "object-literal-key-quotes": [
      true,
      "as-needed"
    ],
    "object-literal-shorthand": false,
    "object-literal-sort-keys": false,
    "one-line": [
      true,
      "check-catch",
      "check-finally",
      "check-else",
      "check-open-brace",
      "check-whitespace"
    ],
    "prefer-const": true,
    "quotemark": [
      true,
      "single",
      "avoid-escape"
    ],
    "radix": true,
    "semicolon": {
      "options": [
        "always"
      ]
    },
    "triple-equals": true,
    "space-before-function-paren": {
      "options": {
        "anonymous": "never",
        "asyncArrow": "always",
        "constructor": "never",
        "method": "never",
        "named": "never"
      }
    },
    "typedef": [
      true,
      "call-signature",
      "parameter",
      "property-declaration",
      "member-variable-declaration"
    ],
    "typedef-whitespace": {
      "options": [
        {
          "call-signature": "nospace",
          "index-signature": "nospace",
          "parameter": "nospace",
          "property-declaration": "nospace",
          "variable-declaration": "nospace"
        },
        {
          "call-signature": "onespace",
          "index-signature": "onespace",
          "parameter": "onespace",
          "property-declaration": "onespace",
          "variable-declaration": "onespace"
        }
      ]
    },
    "variable-name": {
      "options": [
        "ban-keywords",
        "check-format",
        "allow-leading-underscore"
      ]
    },
    "whitespace": {
      "options": [
        "check-branch",
        "check-decl",
        "check-operator",
        "check-separator",
        "check-type",
        "check-typecast"
      ]
    }
  }
};

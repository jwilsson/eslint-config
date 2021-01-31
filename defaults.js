module.exports = {
    extends: 'eslint:recommended',
    parser: '@babel/eslint-parser',
    plugins: [
        'babel',
    ],
    env: {
        es2021: true,
    },
    rules: {
        'accessor-pairs': 'error',
        'array-bracket-newline': ['error', 'consistent'],
        'array-bracket-spacing': 'error',
        'array-element-newline': ['error', 'consistent'],
        'arrow-body-style': 'error',
        'arrow-parens': 'error',
        'arrow-spacing': 'error',
        'brace-style': 'error',
        'capitalized-comments': 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': 'error',
        'comma-style': 'error',
        'complexity': 'error',
        'computed-property-spacing': 'error',
        'consistent-return': 'error',
        'consistent-this': ['error', 'self'],
        'curly': 'error',
        'default-case-last': 'error',
        'default-param-last': 'error',
        'dot-location': ['error', 'property'],
        'dot-notation': 'error',
        'eol-last': 'error',
        'eqeqeq': 'error',
        'func-call-spacing': 'error',
        'func-name-matching': 'error',
        'func-names': 'error',
        'func-style': 'error',
        'function-call-argument-newline': ['error', 'consistent'],
        'function-paren-newline': ['error', 'consistent'],
        'generator-star-spacing': 'error',
        'grouped-accessor-pairs': ['error', 'getBeforeSet'],
        'guard-for-in': 'error',
        'implicit-arrow-linebreak': 'error',
        'indent': ['error', 4, {
            SwitchCase: 1,
            VariableDeclarator: 0,
        }],
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'line-comment-position': 'error',
        'linebreak-style': 'error',
        'lines-around-comment': ['error', {
            afterBlockComment: false,
            afterLineComment: false,
            allowBlockStart: false,
            allowBlockEnd: false,
        }],
        'lines-between-class-members': 'error',
        'max-classes-per-file': 'error',
        'max-depth': 'error',
        'max-nested-callbacks': ['error', {
            max: 4,
        }],
        'max-params': 'error',
        'max-statements-per-line': 'error',
        'multiline-comment-style': 'error',
        'multiline-ternary': ['error', 'never'],
        'new-cap': 'error',
        'new-parens': 'error',
        'newline-per-chained-call': ['error', {
            ignoreChainWithDepth: 3,
        }],
        'no-array-constructor': 'error',
        'no-await-in-loop': 'error',
        'no-caller': 'error',
        'no-confusing-arrow': ['error', {
            allowParens: false,
        }],
        'no-constructor-return': 'error',
        'no-div-regex': 'error',
        'no-duplicate-imports': 'error',
        'no-else-return': 'error',
        'no-empty-function': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-floating-decimal': 'error',
        'no-implicit-coercion': 'error',
        'no-implied-eval': 'error',
        'no-inline-comments': 'error',
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-label-var': 'error',
        'no-labels': ['error', {
            allowLoop: true,
        }],
        'no-lone-blocks': 'error',
        'no-lonely-if': 'error',
        'no-loop-func': 'error',
        'no-loss-of-precision': 'error',
        'no-mixed-operators': 'error',
        'no-multi-assign': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-multiple-empty-lines': 'error',
        'no-nested-ternary': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-wrappers': 'error',
        'no-nonoctal-decimal-escape': 'error',
        'no-octal-escape': 'error',
        'no-promise-executor-return': 'error',
        'no-proto': 'error',
        'no-return-assign': 'error',
        'no-return-await': 'error',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-shadow': 'error',
        'no-tabs': 'error',
        'no-template-curly-in-string': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef-init': 'error',
        'no-undef': 'error',
        'no-undefined': 'error',
        'no-underscore-dangle': ['error', {
            enforceInMethodNames: true,
        }],
        'no-unmodified-loop-condition': 'error',
        'no-unneeded-ternary': 'error',
        'no-unreachable-loop': 'error',
        'no-unsafe-negation': 'error',
        'no-unsafe-optional-chaining': ['error', {
            disallowArithmeticOperators: true,
        }],
        'no-unused-expressions': ['error', {
            allowShortCircuit: true,
        }],
        'no-use-before-define': 'error',
        'no-useless-backreference': 'error',
        'no-useless-call': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-concat': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'no-void': 'error',
        'no-warning-comments': 'error',
        'no-whitespace-before-property': 'error',
        'object-curly-newline': 'error',
        'object-curly-spacing': ['error', 'always'],
        'object-property-newline': 'error',
        'object-shorthand': ['error', 'properties'],
        'operator-linebreak': 'error',
        'padded-blocks': ['error', 'never'],
        'padding-line-between-statements': ['error',
            // Require a blank line before returns
            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            },

            // Require a blank line after a sequence of variable declarations
            {
                blankLine: 'always',
                prev: ['const', 'let', 'var'],
                next: '*',
            },
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var'],
            },

            // Require a blank line after directives, e.g. "use strict"
            {
                blankLine: 'always',
                prev: 'directive',
                next: '*',
            },
            {
                blankLine: 'any',
                prev: 'directive',
                next: 'directive',
            },

            // Require a blank line after blocks
            {
                blankLine: 'always',
                prev: 'block',
                next: '*',
            },

            // Require a blank line before exports
            {
                blankLine: 'always',
                prev: ['cjs-export', 'export'],
                next: '*',
            },
            {
                blankLine: 'any',
                prev: ['cjs-export', 'export'],
                next: ['cjs-export', 'export'],
            },

            // Require a blank line after a sequence of imports/requires
            {
                blankLine: 'always',
                prev: ['cjs-import', 'import'],
                next: '*',
            },
            {
                blankLine: 'any',
                prev: ['cjs-import', 'import'],
                next: ['cjs-import', 'import'],
            }],
        'prefer-arrow-callback': ['error', {
            allowNamedFunctions: true,
        }],
        'prefer-const': 'error',
        'prefer-destructuring': ['error', {
            array: false,
            object: true,
        }],
        'prefer-exponentiation-operator': 'error',
        'prefer-object-spread': 'error',
        'prefer-promise-reject-errors': 'error',
        'prefer-reflect': 'error',
        'prefer-regex-literals': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'quote-props': ['error', 'consistent-as-needed'],
        'quotes': ['error', 'single', 'avoid-escape'],
        'radix': ['error', 'as-needed'],
        'require-atomic-updates': 'error',
        'require-await': 'error',
        'require-unicode-regexp': 'error',
        'rest-spread-spacing': 'error',
        'semi-spacing': 'error',
        'semi-style': 'error',
        'semi': 'error',
        'sort-keys': ['error', 'asc', {
            caseSensitive: false,
            natural: true,
        }],
        'space-before-blocks': 'error',
        'space-before-function-paren': 'error',
        'space-in-parens': 'error',
        'space-infix-ops': 'error',
        'space-unary-ops': ['error', {
            nonwords: false,
            words: true,
        }],
        'spaced-comment': ['error', 'always', {
            block: {
                balanced: true,
                exceptions: ['*'],
                markers: ['!'],
            },
        }],
        'switch-colon-spacing': 'error',
        'template-curly-spacing': 'error',
        'template-tag-spacing': 'error',
        'unicode-bom': 'error',
        'wrap-iife': 'error',
        'yield-star-spacing': 'error',
        'yoda': 'error',

        'babel/camelcase': ['error', {
            ignoreDestructuring: true,
        }],
        'babel/no-invalid-this': 'error',
        'babel/no-unused-expressions': ['error', {
            allowShortCircuit: true,
            allowTaggedTemplates: true,
        }],
        'babel/object-curly-spacing': ['error', 'always'],
        'babel/semi': 'error',
    },
};

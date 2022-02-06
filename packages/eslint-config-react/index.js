module.exports = {
    extends: [
        '@jwilsson/eslint-config-browser',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    plugins: ['react'],
    env: {
        jest: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'jsx-quotes': 'error',

        'babel/quotes': ['error', 'single', 'avoid-escape'],

        'react/button-has-type': 'error',
        'react/default-props-match-prop-types': 'error',
        'react/forbid-component-props': 'error',
        'react/jsx-boolean-value': 'error',
        'react/jsx-child-element-spacing': 'error',
        'react/jsx-closing-bracket-location': 'error',
        'react/jsx-closing-tag-location': 'error',
        'react/jsx-curly-spacing': 'error',
        'react/jsx-equals-spacing': 'error',
        'react/jsx-first-prop-new-line': ['error', 'multiline'],
        'react/jsx-handler-names': 'error',
        'react/jsx-indent-props': 'error',
        'react/jsx-indent': 'error',
        'react/jsx-max-props-per-line': 'error',
        'react/jsx-no-bind': [
            'error',
            {
                allowArrowFunctions: true,
            },
        ],
        'react/jsx-no-constructed-context-values': 'error',
        'react/jsx-no-script-url': 'error',
        'react/jsx-no-useless-fragment': 'error',
        'react/jsx-pascal-case': 'error',
        'react/jsx-props-no-multi-spaces': 'error',
        'react/jsx-sort-default-props': 'error',
        'react/jsx-tag-spacing': 'error',
        'react/jsx-wrap-multilines': 'error',
        'react/no-access-state-in-setstate': 'error',
        'react/no-arrow-function-lifecycle': 'error',
        'react/no-danger': 'error',
        'react/no-deprecated': 'error',
        'react/destructuring-assignment': [
            'error',
            'always',
            {
                ignoreClassFields: true,
            },
        ],
        'react/no-adjacent-inline-elements': 'error',
        'react/no-did-mount-set-state': 'error',
        'react/no-did-update-set-state': 'error',
        'react/no-multi-comp': 'error',
        'react/no-namespace': 'error',
        'react/no-redundant-should-component-update': 'error',
        'react/no-this-in-sfc': 'error',
        'react/no-typos': 'error',
        'react/no-unsafe': 'error',
        'react/no-unused-prop-types': 'error',
        'react/no-unused-state': 'error',
        'react/no-will-update-set-state': 'error',
        'react/prefer-es6-class': 'error',
        'react/prefer-stateless-function': 'error',
        'react/require-optimization': 'error',
        'react/self-closing-comp': 'error',
        'react/sort-comp': 'error',
        'react/sort-prop-types': 'error',
        'react/style-prop-object': 'error',
        'react/void-dom-elements-no-children': 'error',
    },
};

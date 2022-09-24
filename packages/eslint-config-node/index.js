module.exports = {
    extends: ['@jwilsson/eslint-config', 'plugin:n/recommended'],
    plugins: ['n'],
    env: {
        node: true,
    },
    rules: {
        'no-underscore-dangle': [
            'error',
            {
                allow: ['__dirname', '__filename'],
                enforceInClassFields: true,
                enforceInMethodNames: true,
            },
        ],

        'n/callback-return': 'error',
        'n/exports-style': ['error', 'module.exports'],
        'n/global-require': 'error',
        'n/handle-callback-err': 'error',
        'n/no-new-require': 'error',
        'n/no-path-concat': 'error',
    },
};

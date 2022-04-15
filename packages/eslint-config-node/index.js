module.exports = {
    extends: ['@jwilsson/eslint-config', 'plugin:node/recommended'],
    plugins: ['node'],
    env: {
        node: true,
    },
    rules: {
        'no-underscore-dangle': [
            'error',
            {
                allow: ['__dirname', '__filename'],
            },
        ],

        'node/callback-return': 'error',
        'node/exports-style': ['error', 'module.exports'],
        'node/global-require': 'error',
        'node/handle-callback-err': 'error',
        'node/no-new-require': 'error',
        'node/no-path-concat': 'error',
    },
};

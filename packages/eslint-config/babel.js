module.exports = {
    plugins: ['@babel'],
    parser: '@babel/eslint-parser',
    rules: {
        'camelcase': 'off',
        'no-invalid-this': 'off',
        'no-unused-expressions': 'off',
        'object-curly-spacing': 'off',
        'semi': 'off',

        '@babel/camelcase': [
            'error',
            {
                ignoreDestructuring: true,
            },
        ],
        '@babel/no-invalid-this': 'error',
        '@babel/no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
                allowTaggedTemplates: true,
            },
        ],
        '@babel/object-curly-spacing': ['error', 'always'],
        '@babel/semi': 'error',
    },
};

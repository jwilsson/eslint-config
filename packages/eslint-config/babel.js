module.exports = {
    plugins: ['@babel'],
    parser: '@babel/eslint-parser',
    rules: {
        'no-invalid-this': 'off',
        'no-unused-expressions': 'off',

        '@babel/no-invalid-this': 'error',
        '@babel/no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
                allowTaggedTemplates: true,
            },
        ],
    },
};

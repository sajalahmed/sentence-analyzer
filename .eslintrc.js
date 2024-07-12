module.exports = {
    'env': {
        'commonjs': true,
        'es2021': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'overrides': [
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'rules': {
        'comma-style': ['error', 'last'],
        'indent': ['error', 4],
        'func-style': ['error', 'declaration', { 'allowArrowFunctions': true }],
        'quotes': ['error', 'single'],
        'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }]
        // 'camelcase': ['error', { 'properties': 'always' }]
    }
}

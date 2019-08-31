module.exports = {
    extends: ['plugin:react/recommended', '@kobionic/eslint-config-typescript'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        '@typescript-eslint/camelcase': false,
        '@typescript-eslint/explicit-function-return-type': { allowExpressions: true },
        'jsx-quotes': ['error', 'prefer-double'],
        'react/prop-types': false,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'quote-props': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-unused-vars': 'off',
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
    'no-nested-ternary': 'off',
    'import/no-named-as-default-member': 'off',
    'react/no-array-index-key': 'off',
    'max-len': 'off',
    'no-return-await': 'off',
  },
};

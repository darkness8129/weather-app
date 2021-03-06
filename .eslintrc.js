module.exports = {
  ignorePatterns: ['node_modules', 'dist', 'cache'],
  root: true,
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'react-hooks/exhaustive-deps': 0,
    'no-shadow': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'no-console': 0,
    'import/prefer-default-export': 0,
    'import/extensions': [
      'error',
      {
        ts: 'never',
      },
    ],
    'import/no-unresolved': 0,
    'import/order': 2,
    'no-nested-ternary': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 1,
    'react/prop-types': 0,
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-var-requires': 0,
    'no-use-before-define': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'global-require': 0,
    'react/jsx-props-no-spreading': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-unused-vars': 2,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'no-underscore-dangle': 0,
    'react/jsx-curly-newline': 0,
    'react/jsx-one-expression-per-line': 0,
    camelcase: 0,
    'no-alert': 0,
    '@typescript-eslint/no-empty-interface': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-fragments': [2, 'element'],
    'no-useless-constructor': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/media-has-caption': 0,
    'no-param-reassign': 0,
  },
  env: {
    browser: true,
    node: true,
  },
}

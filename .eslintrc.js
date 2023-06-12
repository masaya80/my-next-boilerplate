/* eslint-disable @typescript-eslint/naming-convention */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
    "plugin:storybook/recommended"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    warnOnUnsupportedTypeScriptVersion: false,
  },
  plugins: ['@typescript-eslint', 'react', 'import'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
      typescript: {
        config: 'tsconfig.json',
        project: './frontend',
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': false,
        },
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react/prop-types': ['off'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'import/named': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: '{react,react-dom/**,react-router-dom}',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'generic',
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../'],
      },
    ],
    'arrow-body-style': ['error', 'always'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['strictCamelCase', 'StrictPascalCase'],
      },
      {
        selector: 'typeParameter',
        format: ['strictCamelCase', 'StrictPascalCase'],
        prefix: ['T'],
      },
      {
        selector: 'typeProperty',
        format: ['snake_case', 'strictCamelCase', 'StrictPascalCase'],
      },
    ],
    // 詳細: https://eslint.org/docs/latest/rules/padding-line-between-statements#rule-details
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: 'import',
        next: ['const', 'type'],
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
  },
}

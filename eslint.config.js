import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  // 🛠️ Tell ESLint this config file is ESM
  {
    files: ['eslint.config.js'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      globals: globals.node,
    },
  },

  { ignores: ['dist'] },

  {
    files: ['**/*config.js'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'script',
      globals: globals.node,
    },
  },

  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]

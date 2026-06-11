import globals from 'globals';
import tseslint from 'typescript-eslint';
import neostandard from 'neostandard';
import astro from 'eslint-plugin-astro';

export default [
  { ignores: ['dist', 'node_modules', '.astro', '*.d.ts'] },

  ...neostandard({ semi: true }),

  ...tseslint.configs.recommended,

  ...astro.configs.recommended,

  // Astro templates are not React JSX — JSX stylistic rules misfire there.
  {
    files: ['**/*.astro'],
    rules: {
      '@stylistic/jsx-indent': 'off',
      '@stylistic/jsx-closing-tag-location': 'off',
      '@stylistic/jsx-one-expression-per-line': 'off',
      '@stylistic/jsx-curly-newline': 'off',
      '@stylistic/jsx-wrap-multilines': 'off',
    },
  },

  {
    files: ['**/*.{ts,js}'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          ignoreRestSiblings: true
        }
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
];

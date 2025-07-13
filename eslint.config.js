import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import parserBabel from '@babel/eslint-parser';

export default defineConfig([
  {
    // All JS / JSX files in your project
    files: ['**/*.{js,mjs,cjs,jsx}'],

    /* 1️⃣ tell ESLint to use the Babel parser */
    languageOptions: {
      parser: parserBabel,
      parserOptions: {
        /* make Babel parser independent of a babel.config.js */
        requireConfigFile: false,

        /* enable modern JS + JSX */
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },

        /* 2️⃣ give the parser React + env presets so JSX is understood */
        babelOptions: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        },
      },
      globals: globals.browser,
    },

    /* React plugin and core-JS rules */
    plugins: {
      js,
      react: pluginReact,
    },

    /* React version auto-detect so the plugin stops warning */
    settings: {
      react: { version: 'detect' },
    },

    /* Merge the recommended React rules, then override what you need */
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      'brace-style': ['error', 'allman'],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
    },
  },
]);

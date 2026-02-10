import vue from 'eslint-plugin-vue';
import eslintRecommended from 'eslint:recommended';

export default [
  {
    files: ['*.js', '*.vue'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
      }
    },
    plugins: {
      vue
    },
    rules: {
      // your custom rules here
      'no-unused-vars': 'warn',
      'vue/no-unused-components': 'warn'
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended'
    ]
  }
];

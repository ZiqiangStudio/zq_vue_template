export default [
  {
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
    files: ['.vue', '.js', '.jsx', '.cjs', '.mjs', '.ts', '.tsx', '.cts', '.mts'],
    parser: 'vue-eslint-parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
      parser: '@typescript-eslint/parser',
    },
  } 
];

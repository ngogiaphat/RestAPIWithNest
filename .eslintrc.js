module.exports = {
	parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir : __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "semi": 0,
    "@javascript-eslint/semi": "off",
		"@typescript-eslint/semi": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/interface-name-prefix": "off",
  },
};
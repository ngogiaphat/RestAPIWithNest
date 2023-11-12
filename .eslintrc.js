module.exports = {
  root: true,
	parser: '@typescript-eslint/parser',
  ignorePatterns: ['.eslintrc.js'],
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['plugin:@typescript-eslint/recommended'],
  env: {
    node: true,
    jest: true,
  },
  parserOptions: {
    tsconfigRootDir : __dirname,
    sourceType: 'module',
  },
  rules: {
    "semi": 0,
    "@javascript-eslint/semi": "off",
		"@typescript-eslint/semi": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  },
};
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  env: {
    browser: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'space-before-function-paren': 'off',
    'no-console': isProduction ? 'error' : 'off',
    'no-debugger': isProduction ? 'error' : 'off',
    'generator-star-spacing': 'off'
  }
}

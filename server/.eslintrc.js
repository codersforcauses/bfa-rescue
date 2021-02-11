module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true
  },
  extends: ['standard'],
  plugins: ['prettier', 'jest'],
  // add your custom rules here
  rules: {
    'space-before-function-paren': 0
  }
}

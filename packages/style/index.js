module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        trailingComma: 'none',
        arrowParens: 'avoid',
        semi: false,
        vueIndentScriptAndStyle: true
      }
    ],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off'
  }
}

const StylelintWebpackPlugin = require('stylelint-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  baseUrl: './',
  css: {
    sourceMap: !isProduction
  },
  configureWebpack: {
    plugins: [
      new StylelintWebpackPlugin({
        files: ['**/*.{vue,htm,html,css,scss,sass}']
      })
    ]
  }
}

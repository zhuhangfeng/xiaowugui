// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      'api': {
        target: 'http://39.98.123.211'
      }
    },
  }
}

const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/login', {
      target: 'http://3.38.191.164',
      changeOrigin: true,
    })
  )
  app.use(
    createProxyMiddleware('/register', {
      target: 'http://3.38.191.164',
      changeOrigin: true,
    })
  )
}

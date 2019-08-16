const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(proxy('/hello', { target: 'http://localhost:1323' }));
    app.use(proxy('/v1/image', { target: 'http://localhost:1323' }));
}

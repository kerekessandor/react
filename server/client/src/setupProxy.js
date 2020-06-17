const proxyMiddleware = require('http-proxy-middleware').createProxyMiddleware;

module.exports = function (app) {
    console.log('proxySetup');
    app.use(
        ['/api/*'],
        proxyMiddleware({
            target: 'http://localhost:5001'
        })
    );
};
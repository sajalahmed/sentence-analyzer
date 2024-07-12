const textRoutes = require('./analyze.route');
const authRoutes = require('./auth.route');
const sentenceRoutes = require('./sentence.route');
//const {keycloakMiddleware} = require('../app/middleware');

module.exports = (app) => {
    //app.use('/api', keycloakMiddleware.middleware(), textRoutes);
    app.use('/api', textRoutes)
    app.use('/auth', authRoutes);
    app.use('/api/sentence', sentenceRoutes);
};

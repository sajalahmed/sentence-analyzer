'use strict';
const rateLimitMiddleware = require('./rate-limit.middleware');
const errorMiddleware = require('./error.middleware');
const keycloakMiddleware = require('./keycloak.middleware');

module.exports = {
    rateLimitMiddleware,
    errorMiddleware,
    keycloakMiddleware
};

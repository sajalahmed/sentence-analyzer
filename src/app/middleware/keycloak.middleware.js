const Keycloak = require('keycloak-connect');
const env = process.env;

const kcConfig = {
    clientId: env.KEYCLOAK_CLIENT_ID,
    serverUrl: env.KEYCLOAK_URL,
    realm: env.KEYCLOAK_REALM_NAME,
};

const keycloak = new Keycloak({}, kcConfig);

module.exports = keycloak;
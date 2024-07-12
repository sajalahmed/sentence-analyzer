const fetch = require('node-fetch');
const urlencoded = require('../utils/urlencoded');

const env = process.env;

const getKeycloakAdminAccessToken = async () => {
    try {
        const paramsForAdmin = urlencoded.URLSearchParamsForClient();
        const adminLoginRes = await fetch(`${env.KEYCLOAK_URL}/realms/${env.KEYCLOAK_REALM_NAME}/protocol/openid-connect/token`, {
            method: 'POST',
            body: paramsForAdmin,
        });

        if (!adminLoginRes.ok) {
            throw new Error(`Error fetching admin token: ${adminLoginRes.statusText}`);
        }

        const adminLoginData = await adminLoginRes.json();
        return adminLoginData.access_token;
    } catch (err) {
        console.error('Failed to get admin access token:', err);
        throw err;
    }
};

const getKeycloakUserAccessToken = async (username, password) => {
    try {
        const paramsForUser = urlencoded.URLSearchParamsForPassword(username, password);
        const userLoginRes = await fetch(`${env.KEYCLOAK_URL}/realms/${env.KEYCLOAK_REALM_NAME}/protocol/openid-connect/token`, {
            method: 'POST',
            body: paramsForUser,
        });

        if (!userLoginRes.ok) {
            throw new Error(`Error fetching user token: ${userLoginRes.statusText}`);
        }

        const userLoginData = await userLoginRes.json();
        return userLoginData.access_token;
    } catch (err) {
        console.error('Failed to get user access token:', err);
        throw err;
    }
};

module.exports = {
    getKeycloakAdminAccessToken,
    getKeycloakUserAccessToken,
};

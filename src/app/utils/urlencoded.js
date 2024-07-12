const env = process.env

const URLEncoded = {
    URLSearchParamsForClient: () => {
        const params = new URLSearchParams();
        params.append('grant_type', env.KEYCLOAK_GRANT_TYPE_CLIENT);
        params.append('client_id', env.KEYCLOAK_CLIENT_ID);
        params.append('client_secret', env.KEYCLOAK_CLIENT_SECRET);

        return params;
    },

    URLSearchParamsForPassword: (username, password) => {
        const params = new URLSearchParams();
        params.append('grant_type', env.KEYCLOAK_GRANT_TYPE_PASSWORD);
        params.append('client_id', env.KEYCLOAK_CLIENT_ID);
        params.append('client_secret', env.KEYCLOAK_CLIENT_SECRET);
        params.append('username', username);
        params.append('password', password);

        return params
    },

    URLSearchParamsForClient: () => {
        const params = new URLSearchParams();
        params.append('grant_type', env.KEYCLOAK_GRANT_TYPE_CLIENT);
        params.append('client_id', env.KEYCLOAK_CLIENT_ID);
        params.append('client_secret', env.KEYCLOAK_CLIENT_SECRET);

        return params;
    },
}

module.exports = URLEncoded;
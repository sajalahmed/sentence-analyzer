const keycloakService = require('../services/keycloak.service');

const getAdminToken = async (req, res) => {
    try {
        const token = await keycloakService.getKeycloakAdminAccessToken();
        res.status(200).json({ accessToken: token });
    } catch (err) {
        res.status(500).json({ message: 'Failed to get admin token', error: err.message });
    }
};

const getUserToken = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        const token = await keycloakService.getKeycloakUserAccessToken(username, password);
        res.status(200).json({ accessToken: token });
    } catch (err) {
        res.status(500).json({ message: 'Failed to get user token', error: err.message });
    }
};

module.exports = {
    getAdminToken,
    getUserToken,
};

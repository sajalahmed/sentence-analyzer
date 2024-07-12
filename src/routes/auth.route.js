
const express = require('express');
const { getAdminToken, getUserToken } = require('../app/controllers/keycloak.controller');

const router = express.Router();

router.post('/admin/token', getAdminToken);
router.post('/user/token', getUserToken);

module.exports = router;

const express = require('express');
const credentialRoutes = express.Router();
const credentialController = require('../controllers/credentialController');


credentialRoutes.post("/registerForm", credentialController.registerUser);
credentialRoutes.post("/loginForm", credentialController.loginUser);

module.exports = credentialRoutes;

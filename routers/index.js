const express = require('express');
const router = express.Router();

// 1. Import index routers
const blogroutes = require('./blogRoutes');
router.use(blogroutes);


// 3. Import credentialRoutes
const credentialRoutes = require('./credentialRoutes');
router.use(credentialRoutes);

// 2. Import adminRoutes
const adminRoutes = require('./adminRoutes')
router.use(adminRoutes);

module.exports = router; 

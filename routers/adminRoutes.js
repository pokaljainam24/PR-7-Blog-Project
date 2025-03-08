const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const credentialController = require("../controllers/credentialController");
const upload = require("../middleware/imageUploadmulter");
const adminAuth = require("../middleware/adminAuth");

// Register & Login Routes should NOT be protected by adminAuth
router.get("/registerForm", credentialController.registerPage);
router.get("/loginForm", credentialController.loginPage);

// Protected Routes (Require Authentication)
router.use(adminAuth);

// Delete Blog Route
router.get("/delete/:id", adminController.deleteBlog);

// Edit Blog Route
router.get("/edit/:id", adminController.editBlog);

// Update Blog Route
router.post("/update/:id", upload, adminController.updateBlog);

// View Blog Routes
router.get("/view/:id", adminController.viewBlog);

module.exports = router;

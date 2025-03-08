const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const upload = require('../middleware/imageUploadmulter');
const redirectToblogPage = require('../middleware/redirectmiddleware');
const adminAuth = require('../middleware/adminAuth')

router.use(adminAuth);

// 1. Import home page routers
router.get('/', redirectToblogPage);
router.get('/home', blogController.openHomePage);

// 2. Import add blog page routers
router.get('/add-blog', blogController.openaddBlogPage);
router.post('/admin/add-blog', upload, blogController.submitBlog);
router.post('/admin/edit-blog/:id', upload, blogController.updateBlog);

module.exports = router;

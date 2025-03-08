const blog = require("../models/blogModel");

module.exports.openHomePage = async (req, res) => {
    try {
        const blogs = await blog.find().sort({ createdAt: -1 });
        res.render("admin/blog", { blogs });
    } catch (err) {
        console.log(err.message);
    }
};

module.exports.openaddBlogPage = (req, res) => {
    return res.render('admin/add-blog.ejs');
}

module.exports.submitBlog = async (req, res) => {
    console.log(req.body);
    console.log(req.file);
    try {
        console.log('Blog submitted successfully...');
        await blog.create({ ...req.body, imgUrl: req.file.path });
        return res.redirect('/home');

    } catch (error) {
        console.log(error.message);
    }
}


module.exports.updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        let blogtoupdate = { ...req.body };

        if (req.file) {
            blogtoupdate.imgUrl = req.file.path;
        }

        await blog.findByIdAndUpdate(id, blogtoupdate);
        console.log('Movie updated successefully');
        return res.redirect('/')
    } catch (error) {
        console.log(error.message);
        return res.redirect('/')
    }
}

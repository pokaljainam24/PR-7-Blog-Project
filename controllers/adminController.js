const blog = require("../models/blogModel");

module.exports.deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        await blog.findByIdAndDelete(id);
        console.log('Blog Deleted Successfully...');
        return res.redirect('/');
    } catch (error) {
        console.log(error.message);
        return res.redirect('/');
    }
}


module.exports.editBlog = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const blogtoedit = await blog.findById(id);
        console.log(blogtoedit);

        if (!blogtoedit) {
            console.log("Blog not found");
            return res.render('./admin/edit-blog', { blogtoedit: {} });
        }

        return res.render('./admin/edit-blog', { blogtoedit });
    } catch (error) {
        console.log(error.message);
        return res.render('./admin/edit-blog', { blogtoedit: {} });
    }
}

module.exports.viewBlog = async (req, res) => {
    const { id } = req.params;
    const viewblog = await blog.findById(id);
    return res.render('./admin/view-blog', { viewblog });
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
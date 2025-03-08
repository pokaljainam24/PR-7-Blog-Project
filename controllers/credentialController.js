const blog = require("../models/blogModel");

module.exports.loginPage = (req, res) => {
    return res.render("./admin/loginForm");
}

module.exports.loginUser = async (req, res) => {
    try {
        const admin = await blog.findOne({ username: req.body.username });

        // Check if admin exists
        if (!admin) {
            console.log("User not found!");
            return res.redirect("/loginForm");
        }

        // Check if password matches
        if (admin.password !== req.body.password) {
            console.log("Incorrect password!");
            return res.redirect("/loginForm");
        }

        // Set cookie and redirect
        res.cookie("admin", admin.id);
        console.log("Login successful, redirecting to home...");
        return res.redirect("/");

    } catch (error) {
        console.log("Error:", error.message);
        return res.redirect("/loginForm");
    }
};

module.exports.registerPage = (req, res) => {
    return res.render("admin/registerForm");
};

module.exports.registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if username already exists
        const existingUser = await blog.findOne({ username });
        if (existingUser) {
            return res.render("admin/loginForm");
        }

        // Save user to database
        const newUser = new User({ username, email, password });
        await newUser.save();

        console.log("Registration successful, redirecting to login...");
        return res.redirect("/loginForm");
    } catch (error) {
        console.log("Error:", error.message);
        return res.render("admin/registerForm");
    }
};


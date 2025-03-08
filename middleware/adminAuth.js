module.exports = (req, res, next) => {
    if (!req.cookies.admin) {
        
        if (req.path !== "/loginForm" && req.path !== "/registerForm") {
            return res.redirect("/loginForm");
        }
    }
    return next();
};

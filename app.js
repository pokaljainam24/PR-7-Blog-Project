const express = require('express');
const cookieParser = require("cookie-parser");
const db = require('./configs/database');
const app = express();
const port = 8098;


app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(express.static('public'));
app.use(cookieParser());


// ------------ middlewares ------------ //

// 1. Import index routers
const indexRouter = require('./routers/index');
app.use(indexRouter);


app.listen(port, (err) => {
    if (!err) {
        db();
        console.log(`Server is running on http://localhost:${port}`);
    }
});

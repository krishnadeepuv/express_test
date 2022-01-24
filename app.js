//#region imports
const http = require('http');
const express = require('express');
const body_parser = require('body-parser');
const admin_route = require('./router/admin.js');
const shop_route = require('./router/shop.js');
const path = require('path');
//#endregion

const app = express();

app.use(body_parser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', admin_route);
app.use(shop_route);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})
app.listen(3000);
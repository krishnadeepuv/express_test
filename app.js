const http = require('http');
const express = require('express');
const body_parser = require('body-parser');
const admin_route = require('./router/admin.js');
const shop_route = require('./router/shop.js');
const { response } = require('express');

const app = express();

app.use(body_parser.urlencoded({ extended: false }));

app.use('/admin', admin_route);
app.use(shop_route);

app.use((req, res, next) => {
    res.status(404).send("<h1>Page not found</h1>")
})
app.listen(3000);
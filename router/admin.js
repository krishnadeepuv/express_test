const express = require('express');
const path = require('path');
const dir_name = require('../util/paths.js');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(dir_name, 'views', 'admin.html'));
})

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
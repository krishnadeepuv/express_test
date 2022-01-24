const express = require('express');
const path = require('path');
const dir_name = require('../util/paths.js');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(dir_name, 'views', 'shop.html'));
});

module.exports = router;
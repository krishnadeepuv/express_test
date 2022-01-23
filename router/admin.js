const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send(`<h1>Slacker in the house</h1>
    <form action="/product" method="POST">
        <input type="text" name="product_name" > <button type="submit">Add product</button>
    </form>
    `)
})

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
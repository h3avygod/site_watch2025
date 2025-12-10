var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/casio', function(req, res, next) {
    res.send("<h1>Page Casio</h1>")
});
router.get('/philipe', function(req, res, next) {
    res.send("<h1>Page Philipe Patek</h1>")
});
router.get('/rolex', function(req, res, next) {
    res.send("<h1>Page Rolex</h1>")
});

module.exports = router;

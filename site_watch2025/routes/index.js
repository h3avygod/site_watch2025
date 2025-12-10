var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/casio', function(req, res, next) {
    res.render('watch', {
        title: "Page Casio",
        picture: "images/casio.png",
        desc: "Casio — легенда на запястье Японская надёжность, культовый дизайн и технологии, проверенные поколениями."
    });
});
router.get('/philipe', function(req, res, next) {
    res.render('watch', {
        title: "Page Philipe Patek",
        picture: "images/philipe.png",
        desc: "Patek Philippe — тихая вселенная вечности.Не просто часы, а фамильные драгоценности, которые переходят от отца к сыну. Швейцарское совершенство, которое не торопится."
    });
});
router.get('/rolex', function(req, res, next) {
    res.render('watch', {
        title: "Page Rolex",
        picture: "images/rolex.png",
        desc: "Rolex — не просто часы, а символ.Узнаваемый, весомый, уверенный. Марка, которая превратила инструмент в икон"
    });
});

module.exports = router;

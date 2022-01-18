var express = require('express');
var router = express.Router();
const spozywczy = require('../controllers/spozywczy.controller.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.post("/nowy", spozywczy.create);

module.exports = router;
var express = require('express');
var router = express.Router();

module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//fire chief control router

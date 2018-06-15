var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('editores/index');
});

router.get('/busca', function(req, res, next) {
  res.render('editores/busca');
});

module.exports = router;

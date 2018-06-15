var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('materias/index');
});

router.get('/busca', function(req, res, next) {
  res.render('materias/busca');
});

module.exports = router;

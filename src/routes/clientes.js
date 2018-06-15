var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('clientes/busca');
});

router.get('/:id', function(req, res, next) {
  res.render('clientes/index');
});

module.exports = router;

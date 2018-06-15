var express = require('express');
var router = express.Router();
const controller = require('../controllers/categorias');

router.get('/', controller.index);
router.get('/busca', controller.get);
router.get('/search', controller.search);
router.get('/alterar/:id', controller.getById);
router.get('/delete/nome/:id', controller.delete);
router.post('/', controller.post);
router.post('/alterar/:id', controller.put);

module.exports = router;

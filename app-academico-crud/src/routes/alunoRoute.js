const express = require('express');
var router = express.Router();

var alunoController = require('../controllers/alunoController');

router.get('/alunos', alunoController.getAll);
router.post('/alunos', alunoController.create);
router.put('/alunos/:id', alunoController.update);
router.delete('/alunos/:id', alunoController.delete);

module.exports = router;

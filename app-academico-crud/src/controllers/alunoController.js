const Aluno = require('../models/aluno');

exports.getAll = (req, res, next) => {
    Aluno.find({}, (err, alunos) => {
        if(err) {
            res.status(422).send(err)
        }
        res.json(alunos);
    })
}

exports.create = (req, res, next) => {
    var aluno = {
        nome: req.body.nome,
        email: req.body.email,
        matricula: req.body.matricula,
        nascimento: req.body.nascimento,
        curso: req.body.curso,
    }

    Aluno.create(aluno, (err, aluno) => {
        if(err) {
            res.json({
                error: err
            });
        }
        res.json({
            message: "Aluno foi criado com sucesso!"
        });
    });
}

exports.update = (req, res, next) => {
    Aluno.findByIdAndUpdate(req.params.id, (err, aluno) => {
        if(err) { 
            res.status(412).send(err) ;
        }
        res.json({
            message: "Aluno foi atualizado com sucesso!",
            aluno
        });
    });
}

exports.delete = (req, res, next) => {
    Aluno.findByIdAndRemove(req.params.id, (err, aluno) => {
        if(err) {
            res.status(412).send(err);
        }
        res.json({
            message: "Aluno foi removido com sucesso!",
            aluno
        });
    });
}
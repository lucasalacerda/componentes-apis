const mongoose = require('mongoose');

const Aluno = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    matricula: {
        type: Number,
        required: true,
        unique: true
    },
    nascimento: {
        type: String,
        required: true
    },
    curso: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Aluno', Aluno);
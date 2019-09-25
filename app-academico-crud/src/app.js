const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const alunoRoute = require('./routes/alunoRoute');

var port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(alunoRoute);

const mongoDB = 'mongodb://127.0.0.1:27017/educ';
mongoose.connect(mongoDB, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', function(req, res, next){
    res.send('Vá para /alunos (:');    
});

app.listen(port, () => {
    console.log(`Listen to port ${port}`)
});
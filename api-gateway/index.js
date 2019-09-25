//index.js
var http = require('http');
const express = require('express')
const httpProxy = require('express-http-proxy')
const app = express()
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet');

const alunoServiceProxy = httpProxy('http://localhost:3001');
const helloServiceProxy = httpProxy('http://localhost:3002');

app.get('/alunos', (req, res, next) => {
    alunoServiceProxy(req, res, next);
})

app.get('/hello', (req, res, next) => {
    helloServiceProxy(req, res, next);
})

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var server = http.createServer(app);
server.listen(3000);
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var port = process.env.PORT || 3002;

app.use(bodyParser.json());

app.get('/hello', function(req, res, next){
    res.send('Hello (:');    
});

app.listen(port, () => {
    console.log(`Listen to port ${port}`)
});
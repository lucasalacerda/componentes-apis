const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Listen to port 3000')
});
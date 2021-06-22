const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/images', express.static(__dirname + '/images'));

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: false }));

const movieRouter = require('./router/Router');
app.use(movieRouter);

module.exports = app;
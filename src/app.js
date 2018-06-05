'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

//Conexão ao banco
mongoose.connect(config.connectionString);

//Carrega as Models

//Carrega as Rotas
const index = require('./routes/index');

//Carrega as Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
	extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

module.exports = app;

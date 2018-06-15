'use strict';

const express = require('express');
const flash = require('express-flash');
const load = require('express-load');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

//Conexão ao banco
mongoose.connect(config.connectionString);

//Carrega as Models
const Categorias = require('./models/categorias');

//Carrega as Rotas
const index = require('./routes/index');
const painel = require('./routes/painel');
const categorias = require('./routes/categorias');
const materias = require('./routes/materias');
const clientes = require('./routes/clientes');
const editores = require('./routes/editores');

//Carrega as Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
	extended: false
}));
app.use(session({ secret: 'aulanodejs009933' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());

app.use('/', index);
app.use('/dashboard', painel);
app.use('/categorias', categorias);
app.use('/materias', materias);
app.use('/clientes', clientes);
app.use('/editores', editores);

module.exports = app;

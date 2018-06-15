'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
	title: {
		type: String,
		required: true,
		trim: true
	},
	slug: {
		type: String,
		required: [true, 'O slug é obrigatório'],
		trim: true,
		index: true,
		unique: true
	}, 
	descricao: {
		type: String,
		required: true
	},
	metaTitle: {
		type: String,
		required: true
	},
	metaDescription: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Categorias', schema);
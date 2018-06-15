'use strict';

const mongoose = require('mongoose');
const buscaBR = require('busca-br');
const Categorias = mongoose.model('Categorias');

exports.index = async() => {
	const res = new Categorias();
	return res;
}

exports.create = async(data, req, res) => {	
	await Categorias.findOne({
		slug: data.slug
	}, async(err,url) => {
		if (url) {
			req.flash('erro', 'A url inserida já esta cadastrada, coloque outra url para continuar com o processo de criação da categoria.');
			res.render('categorias/index', {model: data});
		} else {
			var categorias = new Categorias();
			categorias.title = data.title;
			categorias.slug = data.slug;
			categorias.descricao = data.descricao;
			categorias.metaTitle = data.metaTitle;
			categorias.metaDescription = data.metaDescription;
			await categorias.save();
		}
	});
}

exports.get = async() => {
	const res = await Categorias.find();
	return res;
}

exports.search = async(query) => {
	const res = await Categorias.find({
		title: /[query]/i
	});
	return res;
}

exports.getById = async(id) => {
	const res = await Categorias
	.findById(id);
	return res;
}

exports.update = async(id, data) => {
	await Categorias
	.findByIdAndUpdate(id, {
		$set: {
			title: data.title,
			slug: data.slug,
			descricao: data.descricao,
			metaTitle: data.metaTitle,
			metaDescription: data.metaDescription
		}
	});
}

exports.delete = async(id) => {
	const res = await Categorias.findById(id);
	res.remove();
}
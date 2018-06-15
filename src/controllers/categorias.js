'use strict';

const repository = require('../repositories/categorias');

exports.index = async(req, res, next) => {
	try {
		let data = await repository.index();
		res.render('categorias/index', {model: data});
	} catch(e) {
		req.flash('erro', 'Erro ao abrir a página de cadastro: '+e);
		res.redirect('/categorias/busca');
	}
}

exports.post = async(req, res, next) => {
	try {
		await repository.create(req.body, req, res);
		req.flash('info', 'Categoria cadastrada com sucesso!');
		res.redirect('/categorias/busca');
	} catch(e) {
		req.flash('erro', 'Falha ao cadastrar categoria: ' +e);
		res.render('categorias/index', {model: data});
	}
};

exports.get = async(req, res, next) => {
	try {
		let data = await repository.get();
		res.render('categorias/busca', {lista: data});
	} catch(e) {
		req.flash('erro', 'Erro ao buscar categorias: '+e);
		res.redirect('/categorias/busca');
	}
};

exports.getById = async(req, res, next) => {
	try {
		let data = await repository.getById(req.params.id);
		res.render('categorias/edit', {model: data});
	} catch(e) {
		req.flash('erro', 'Erro ao encontrar categoria: '+e);
		res.redirect('/categorias/busca');
	}
};

exports.search = async(req, res, next) => {
	try {
		var searchParams = req.query.query;
		let data = await repository.search(searchParams);
		res.render('categorias/busca', {lista: data});
	} catch(e) {
		req.flash('erro', 'Erro ao buscar categorias: '+e);
		res.redirect('/categorias/busca');
	}
};

exports.put = async(req, res, next) => {
	try {
		await repository.update(req.params.id, req.body);
		req.flash('info', 'Categoria atualizada com sucesso!');
		let data = await repository.getById(req.params.id);
		res.render('categorias/edit', {model: data});
	} catch(e) {
		req.flash('erro', 'Erro ao atualizar categoria: '+e);
		res.render('categorias/edit', {model: req.body});
	}
};

exports.create = async(req, res, next) => {
	try {
		await repository.index();
		res.render('categorias/edit', {model: data});
	} catch(e) {
		req.flash('erro', 'Erro ao encontrar categoria: '+e);
		res.redirect('/categorias/busca');
	}
};

exports.delete = async(req, res, next) => {
	try {
		await repository.delete(req.params.id);
		req.flash('info', 'Categoria excluida com sucesso, agora você não verá e nem poderá mais acessa - la.');
		res.redirect('/categorias/busca');
	} catch(e) {
		req.flash('erro', 'Erro ao deletar categoria: '+e);
		res.redirect('/categorias/busca');
	}
};
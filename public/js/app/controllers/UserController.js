class UserController {

	constructor() {

		let $ = document.querySelector.bind(document);
		this._image = $("#img_preview");
		this._primeiroNome = $('#primeironome');
		this._ultimoNome = $('#ultimonome');
		this._user = $('#usuario');
	}

	image(input) {

		this._input = input;
		this._images = new Image(this._input, this._image);
	}

	user() {

		this._valor = `${this._primeiroNome.value}.${this._ultimoNome.value}`;
		this._filtro = new Filtro();
		this._filtro.filtragem(this._valor, this._user);
	}

	mask(campo) {

		this._mask = new Mascara();
		this._mask.mask(campo);
	}
}
class Menu {

	constructor() {

		let $ = document.querySelector.bind(document);
		this._media = $('body').clientWidth;
		this._menu = $('.menu');
		this._botao = $('button.bar');
		this._main = $('main');

		this._botao.setAttribute('title', 'Minimizar Menu');

		if (this._media <= 992) {

		    this._botao.style.left = "80px";
		    this._menu.className += " close";
		} 
	}

	efeito() {

		if (this._media >= 993) {

		    if (this._menu.className == 'menu') {

		        this._botao.style.left = "80px";
		        this._menu.className += " close";
		        this._botao.setAttribute('title', 'Maximizar Menu');
		    } else {

		        this._botao.style.left = "280px";
		        this._menu.className = "menu";
		        this._botao.setAttribute('title', 'Minimizar Menu');
		    }
		} else {

		    if (this._menu.className == 'menu') {

		        this._botao.style.left = "80px";
		        this._menu.className += " close";
		        document.querySelector('.back').remove();
		        this._main.style.filter = "blur(0px)";
		    } else {

		        this._botao.style.left = "280px";
		        this._menu.className = "menu";
		        this._div = document.createElement('div')
		        this._div.className = 'back';
		        this._main.insertBefore(this._div, this._main.childNodes[0]);
		        this._main.style.filter = "blur(3px)";
		    }
		}
	}
}
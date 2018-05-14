class MenuController {

	constructor() {

		let $ = document.querySelector.bind(document);
		this._elem = $('.collapsible');
		this._instance = M.Collapsible.init(this._elem);
		this._menu = new Menu();
	}

	fade() {

		this._menu.efeito();
	}
}
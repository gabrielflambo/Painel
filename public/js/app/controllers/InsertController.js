class InsertController {

	constructor() {

		let $ = document.querySelector.bind(document);

		this._dominio = $('.dominio');
        this._dominio.innerHTML = window.location.hostname;

        this._url = $('#url');
        this._reset = $('#resetar');
        CKEDITOR.replace('descricao');
	}

	dados(node) {

        this._filtro = new Filtro();
        this._node = node;
        this._filtro.filtragem(this._node.value, this._url);
    }

    url() {

    	this._url.focus();
    	this._url.select();
    }

    categorias(alvo) {

        this._alvo = alvo.getAttribute('id');
        this._alvo = `#${this._alvo}+span`;
        this._inputs = document.querySelectorAll('input[name=categorias]:not(:checked)+span');
        for (let index = 0; index < this._inputs.length; index++) {
            this._inputs[index].style.display = 'none';            
        }
        this._reset.style.opacity = '1';
    }

    reset() {

        this._inputs = document.querySelectorAll('input[name=categorias]+span');
        for (let nat = 0; nat < this._inputs.length; nat++) {
            this._inputs[nat].style.display = 'inline-block';
        }
        this._reset.style.opacity = '0';
    }
}
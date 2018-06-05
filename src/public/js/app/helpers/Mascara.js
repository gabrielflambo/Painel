class Mascara {

	mask(campo) {

		let $ = document.querySelector.bind(document);
		this._campo = campo;
		this._count = 0;
		this._valor = [];
		while (this._count < this._campo.value.length) { 
			this._valor.push(this._campo.value[this._count]);
			this._count++;
		}
		if (this._campo.value.length == 11) {
			this._campo.value = `(${this._valor[0]}${this._valor[1]}) ${this._valor[2]}${this._valor[3]}${this._valor[4]}${this._valor[5]}${this._valor[6]}-${this._valor[7]}${this._valor[8]}${this._valor[9]}${this._valor[10]}`;
		}
		else if (this._campo.value.length == 10) {
			this._campo.value = `(${this._valor[0]}${this._valor[1]}) ${this._valor[2]}${this._valor[3]}${this._valor[4]}${this._valor[5]}-${this._valor[6]}${this._valor[7]}${this._valor[8]}${this._valor[9]}`;
		}
	}
}
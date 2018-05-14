class Filtro {

    filtragem(valor, campo) {

        let $ = document.querySelector.bind(document);
        this._valor = valor;
        this._node = campo;

        this._valor = this._valor.toLowerCase();
        this._valor = this._valor.replace(/[áàãâä]/g, 'a');
        this._valor = this._valor.replace(/[éèêë]/g, 'e');
        this._valor = this._valor.replace(/[íìîï]/g, 'i');
        this._valor = this._valor.replace(/[óòõôö]/g, 'o');
        this._valor = this._valor.replace(/[úùûü]/g, 'u');
        this._valor = this._valor.replace(/[ç]/g, 'c');
        this._valor = ((this._node.id == 'usuario') ? this._valor.replace(/[\s]/g, '') : this._valor.replace(/[\s]/g, '-'));
        
        if (this._node.length > 1) {
            
            for (let target = 0; target < this._node.length; target++) {
            
                $(`#${this._node[target].id}`).innerHTML = this._valor;
                $(`#${this._node[target].id}`).value = this._valor;
            }
        }
        else {

            $(`#${this._node.id}`).innerHTML = this._valor;
            $(`#${this._node.id}`).value = this._valor;
        }
    }
}
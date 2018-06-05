class Limite {

    limit(value, wordLimit, campo) {

        let $ = document.querySelector.bind(document);
        this._valor = value;
        this._limit = wordLimit;
        this._node = campo;

        if (this._valor != null && this._valor.length < this._limit) {

            $(`#${this._node.id}`).innerHTML = this._valor;
        }
        if (this._valor != null && this._valor.length > this._limit){
            
            $(`#${this._node.id}`).innerHTML = '';
            this._count = 0;

            while (this._count < this._limit) { 

                $(`#${this._node.id}`).innerHTML += this._valor[this._count];
                if (this._count == (this._limit - 1)) {

                    $(`#${this._node.id}`).innerHTML += '...';
                }
                this._count++;
            }
        }
    }
}
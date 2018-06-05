class Barra {

    constructor() {

        this._width = document.querySelector('.progress').clientWidth;
        this._init = 0;
    }

    init(elemento, divicao) {

        let $ = document.querySelector.bind(document);
        this._divicao = divicao;
        this._elemento = elemento;
        this._soma = this._width / this._divicao;
        this._letras = $(`#${this._elemento.id}`).value.length;

            if (this._letras > this._init) {

                this._tamanho = this._soma * this._letras;
                $(`#${this._elemento.id}`).nextElementSibling.children[0].style.width = `${this._tamanho}px`;
                this._init++;
            } 
            else {

                this._tamanho = this._soma * this._letras;
                $(`#${this._elemento.id}`).nextElementSibling.children[0].style.width = `${this._tamanho}px`;
                this._init--;
            }

            if (this._letras > this._divicao) {

                $(`#${this._elemento.id}`).nextElementSibling.children[0].style.backgroundColor = '#ff0000';
            } 
            else {

                $(`#${this._elemento.id}`).nextElementSibling.children[0].style.backgroundColor = '#33cc33';
            }
    }
}
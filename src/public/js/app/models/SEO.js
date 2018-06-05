class SEO {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._title = $('#titlegoogle');
        this._url = $('#urlgoogle');
        this._description = $('#description');
        this._slug = $('#slug');
    }

    model(campo) {

        this._campo = campo;
        this._filtro = new Filtro();
        this._limite = new Limite();

        if (this._campo.id == 'h1seo') {

            this._limite.limit(this._campo.value, 50, this._title);
            this._filtro.filtragem(this._campo.value, [this._slug, this._url]);
        } 
        else if (this._campo.id == 'slug'){

            this._filtro.filtragem(this._campo.value, [this._slug, this._url]);
        } 
        else {

            this._limite.limit(this._campo.value, 150, this._description);
        }
    }
}
class SEOController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._dominio = $('.seo .dominio');
        this._dominio.innerHTML = window.location.hostname;
    }

    dados(node) {

        this._seo = new SEO();
        this._seo.model(node);
    }

    key(node, limit) {

        this._barra = new Barra();
        this._barra.init(node, limit);
    }
}
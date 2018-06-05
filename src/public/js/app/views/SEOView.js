class SEOView {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._slug = $('#slug');
        this._url = $('#urlgoogle');
    }

    update(texto) {

        this._slug.value = texto;
        this._url.innerHTML = texto;
    }
}
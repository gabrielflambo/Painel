let $ = document.querySelector.bind(document);
var url = '';
var elem = '';
function Abrir (site, objeto) {
	$('.excluir').className += ' open';
	url = site;
	if (objeto) {
		elem = objeto.parentNode.parentNode;
	}
}

$('.alert .btn').addEventListener("click", () => {
	let acao = $('.alert .btn').value;
	if (acao == 'fechar') {
		$('.modal-back.open').className = 'modal-back';
	}
});

var elems = document.querySelectorAll('.autocomplete');
var instances = M.Autocomplete.init(elems, {
	data: {
		"Apple": null,
		"Microsoft": null,
		"Google": 'https://placehold.it/250x250'
	},
});
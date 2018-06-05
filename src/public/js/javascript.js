let $ = document.querySelector.bind(document);

//Chamada de plugins

let elem = $('.collapsible');
let instance = M.Collapsible.init(elem);

if ($("#line_chart")) {
    window.onload = () => new Chart($("#line_chart").getContext("2d"), getChartJs('line'));
}

function getChartJs(type) {
    let config = null;

    if (type === 'line') {
        config = {
            type: 'line',
            data: {
                labels: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo"],
                datasets: [{
                    label: "Novos",
                    data: [65, 51, 180, 97, 56, 205, 40],
                    borderColor: 'rgba(2, 2, 2, 0.8)',
                    backgroundColor: 'rgba(2, 2, 2, 0.5)',
                    pointBorderColor: 'rgba(2, 2, 2, 0)',
                    pointBackgroundColor: 'rgba(2, 2, 2, 0.8)',
                    pointBorderWidth: 1
                }, {
                    label: "Recorrentes",
                    data: [65, 59, 80, 81, 175, 55, 30],
                    borderColor: 'rgba(180, 131, 65, 0.75)',
                    backgroundColor: 'rgba(180, 131, 65, 0.3)',
                    pointBorderColor: 'rgba(180, 131, 65, 0)',
                    pointBackgroundColor: 'rgba(180, 131, 65, 0.9)',
                    pointBorderWidth: 1
                }]
            },
            options: {
                responsive: true,
                legend: false
            }
        }
    }
    return config;
}

//Menu do Painel

let media = $('body').clientWidth;

window.addEventListener("resize", () => media = $('body').clientWidth);


if (media >= 993) {
    $('button.bar').addEventListener("click", () => {
        let classe = $('.menu').className;
        if (classe == 'menu') {
            $('button.bar').style.left = "80px";
            $('.menu').className += " close";
            $('.back').remove();
            $('main').style.filter = "blur(0px)";
        } else {
            $('button.bar').style.left = "280px";
            $('.menu').className = "menu";
        }
    });
} else {
    $('button.bar').style.left = "80px";
    $('.menu').className += " close";

    $('button.bar').addEventListener("click", () => {
        let classe = $('.menu').className;
        if (classe == 'menu') {
            $('button.bar').style.left = "80px";
            $('.menu').className += " close";
            $('.back').remove();
            $('main').style.filter = "blur(0px)";
        } else {
            $('button.bar').style.left = "280px";
            $('.menu').className = "menu";
            let div = document.createElement('div')
            div.className = 'back';
            $('main').insertBefore(div, $('main').childNodes[0]);
            $('main').style.filter = "blur(3px)";
        }
    });
}

// Configurações de Inputs

if ($('textarea').getAttribute('name') == 'descricao') {
    CKEDITOR.replace('descricao');
}

if (document.querySelectorAll('.dominio').length) {
    let url_atual = window.location.hostname;
    let dominio = document.querySelectorAll('.dominio');
    dominio[0].innerHTML = url_atual;
    dominio[1].innerHTML = url_atual;
}

if ($('#h1')){
    $('#h1').addEventListener("focusout", () => {
        let valor = $('#h1').value;
        valor = valor.replace(/[áàãâä]/g, 'a');
        valor = valor.replace(/[éèêë]/g, 'e');
        valor = valor.replace(/[íìîï]/g, 'i');
        valor = valor.replace(/[óòõôö]/g, 'o');
        valor = valor.replace(/[úùûü]/g, 'u');
        valor = valor.replace(/[ç]/g, 'c');
        valor = valor.replace(/[\s]/g, '-').toLowerCase();
            if (valor != '') {
                $('#url').value = valor;
                $('#urlgoogle').innerHTML = valor;
                $('#slug').value = valor;
            }
    });

    $('#h1').addEventListener("focusout", () => {
        let valor = $('#h1').value;
            if (valor != '') {
                $('#h1seo').value = valor;
                $('#titlegoogle').innerHTML = valor;
            }
    });
}

if ($('#editar')) {
    $('#editar').addEventListener("click", () => {
        $('#url').focus();
        $('#url').select();
    });
}

if ($('#url')) {
    $('#url').addEventListener("focus", () => $('#url').select());

    $('#url').addEventListener("focusout", () => {
        let valor = $('#url').value;
        valor = valor.replace(/[áàãâä]/g, 'a');
        valor = valor.replace(/[éèêë]/g, 'e');
        valor = valor.replace(/[íìîï]/g, 'i');
        valor = valor.replace(/[óòõôö]/g, 'o');
        valor = valor.replace(/[úùûü]/g, 'u');
        valor = valor.replace(/[ç]/g, 'c');
        valor = valor.replace(/[\s]/g, '-').toLowerCase();
            if (valor != '') {
                $('#url').value = valor;
                $('#urlgoogle').innerHTML = valor;
                $('#slug').value = valor;
            }
    });
}

if ($('#h1seo')) {
    $('#h1seo').addEventListener("focusout", () => {
        let valor = $('#h1seo').value;
        valor = valor.replace(/[áàãâä]/g, 'a');
        valor = valor.replace(/[éèêë]/g, 'e');
        valor = valor.replace(/[íìîï]/g, 'i');
        valor = valor.replace(/[óòõôö]/g, 'o');
        valor = valor.replace(/[úùûü]/g, 'u');
        valor = valor.replace(/[ç]/g, 'c');
        valor = valor.replace(/[\s]/g, '-').toLowerCase();
            if (valor != '') {
                $('#url').value = valor;
                $('#urlgoogle').innerHTML = valor;
                $('#slug').value = valor;
            }
    });

    $('#h1seo').addEventListener("focusout", () => {
        let valor = $('#h1seo').value;
            if (valor != null && valor.length < 50) {
                $('#titlegoogle').innerHTML = valor;
            }
            if (valor != null && valor.length > 50){
                let wordLimit = 50;
                $('#titlegoogle').innerHTML = '';
                count = 0;
                while (count < wordLimit) { 
                    $('#titlegoogle').innerHTML += valor[count];
                    if (count == (wordLimit - 1)) {
                        $('#titlegoogle').innerHTML += '...';
                    }
                    count++;
                }
            }
    });
}

if ($('#slug')) {
    $('#slug').addEventListener("focusout", () => {
        let valor = $('#slug').value;
        valor = valor.replace(/[áàãâä]/g, 'a');
        valor = valor.replace(/[éèêë]/g, 'e');
        valor = valor.replace(/[íìîï]/g, 'i');
        valor = valor.replace(/[óòõôö]/g, 'o');
        valor = valor.replace(/[úùûü]/g, 'u');
        valor = valor.replace(/[ç]/g, 'c');
        valor = valor.replace(/[\s]/g, '-').toLowerCase();
            if (valor != '') {
                $('#url').value = valor;
                $('#urlgoogle').innerHTML = valor;
                $('#slug').value = valor;
            }
    });
}

if ($('#meta')) {
    $('#meta').addEventListener("focusout", () => {
        let valor = $('#meta').value;
            if (valor != null && valor.length < 150) {
                $('#description').innerHTML = valor;
            }
            if (valor != null && valor.length > 150){
                let wordLimit = 150;
                $('#description').innerHTML = '';
                count = 0;
                while (count < wordLimit) { 
                    $('#description').innerHTML += valor[count];
                    if (count == (wordLimit - 1)) {
                        $('#description').innerHTML += '...';
                    }
                    count++;
                }
            }
    });

    let largura = $('.progress').clientWidth;
    let titlemax = largura/50;
    let metamax = largura/150;
    let title = 0;

    $('#h1seo').addEventListener("input", () => {
        let letras = $('#h1seo').value.length;
            if (letras > title) {
                let tamanho = titlemax * letras;
                $('#h1seo').nextElementSibling.children[0].style.width = `${tamanho}px`;
                title++;
            } else {
                let tamanho = titlemax * letras;
                $('#h1seo').nextElementSibling.children[0].style.width = `${tamanho}px`;
                title--;
            }

            if (letras > 50) {
                $('#h1seo').nextElementSibling.children[0].style.backgroundColor = '#ff0000';
            } else {
                $('#h1seo').nextElementSibling.children[0].style.backgroundColor = '#33cc33';
            }
    });

    $('#meta').addEventListener("input", () => {
        let letras = $('#meta').value.length;
            if (letras > title) {
                let tamanho = metamax * letras;
                $('#meta').nextElementSibling.children[0].style.width = `${tamanho}px`;
                title++;
            } else {
                let tamanho = metamax * letras;
                $('#meta').nextElementSibling.children[0].style.width = `${tamanho}px`;
                title--;
            }

            if (letras > 150) {
                $('#meta').nextElementSibling.children[0].style.backgroundColor = '#ff0000';
            } else {
                $('#meta').nextElementSibling.children[0].style.backgroundColor = '#33cc33';
            }
    });
}

if ($('#ultimonome')) {
    $('#ultimonome').addEventListener("focusout", () => {
        let primeironome = $('#primeironome').value;
        let ultimonome = $('#ultimonome').value;
            if (primeironome != "" && ultimonome != "") {
                let usuario = `${primeironome}.${ultimonome}`;
                usuario = usuario.replace(/[áàãâä]/g, 'a');
                usuario = usuario.replace(/[éèêë]/g, 'e');
                usuario = usuario.replace(/[íìîï]/g, 'i');
                usuario = usuario.replace(/[óòõôö]/g, 'o');
                usuario = usuario.replace(/[úùûü]/g, 'u');
                usuario = usuario.replace(/[ç]/g, 'c');
                usuario = usuario.replace(/[\s]/g, '').toLowerCase();
                $('#usuario').value = usuario;
            }
    })
}

if($('#telefone')) {
    $('#telefone').addEventListener("focusout", () => {
        let texto = $('#telefone').value;
		let wordLimit = $('#telefone').value.length;
		let count = 0;
		let valor = [];
		while (count < wordLimit) { 
			valor.push(texto[count]);
			count++;
		}
		if (wordLimit == 11) {
			$('#telefone').value = `(${valor[0]}${valor[1]}) ${valor[2]}${valor[3]}${valor[4]}${valor[5]}${valor[6]}-${valor[7]}${valor[8]}${valor[9]}${valor[10]}`;
		}
		else if (wordLimit == 10) {
			$('#telefone').value = `(${valor[0]}${valor[1]}) ${valor[2]}${valor[3]}${valor[4]}${valor[5]}-${valor[6]}${valor[7]}${valor[8]}${valor[9]}`;
		}
    });
};

function ImagePreview(input) {

	if (input.files && input.files[0]) {

			var r = new FileReader();
			r.onload = (e) => {
				$("#img_preview").style.visibility = 'visibility';
				$("#img_preview").setAttribute("src", e.target.result);
			}
			r.readAsDataURL(input.files[0]);
		}
	}

	if($("#img_input")){

		hide_empty_image = false;
		set_blank_to_empty_image = false;
		set_image_border = true;

		if (hide_empty_image)
			$("#img_preview").style.visibility = 'hidden';

		if (set_blank_to_empty_image)
			$("#img_preview").setAttribute("src","data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=");

		$("#img_input").addEventListener("change", () => {
            ImagePreview($("#img_input"));
        })
    };
    
if($('input[name=categorias]')){
    let node = document.querySelectorAll('input[name=categorias]');

    for (let nativo = 0; nativo < node.length; nativo++) {
        node[nativo].addEventListener("change", () => {
            let shot = $('input[name=categorias]:checked').getAttribute('id');
            let inputs = document.querySelectorAll('input[name=categorias]:not(:checked)+span');
            for (let index = 0; index < inputs.length; index++) {
                inputs[index].style.display = 'none';            
            }
            $(`#${shot}+span`).style.visibility = 'visibility';
            $('#resetar').style.opacity = '1';
        })
    }

    $('#resetar').style.opacity = '0';
    let nodes = document.querySelectorAll('input[name=categorias]+span');
    $('#resetar').addEventListener("click", () => {
        for (let nat = 0; nat < node.length; nat++) {
            nodes[nat].style.display = 'inline-block';
        }
        $('#resetar').style.opacity = '0';
    })
}
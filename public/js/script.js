$(document).ready(function() {

	// Chamadas de plugins

	$('.button-collapse').sideNav();
	$('.collapsible').collapsible();
	$('.menu .links').slimScroll({
		color: '#fff',
		size: '10px',
		height: '60vh'
	});

	// Efeito do Menu

	$('button.bar').click(function(event) {
		var classe = $('.menu').attr('class');
		if (classe == 'menu') {
			$('.menu').addClass('close');
			$(this).css('left', '80px');
		}else{
			$('.menu').removeClass('close');
			$(this).css('left', '280px');
		}
	});

	var media = $('body').width();
	if (media < 993) {
		$('.menu').addClass('close');
		$('button.bar').css('left', '80px');
	}

	// Página de Posts

	var url_atual = window.location.hostname;
	$('.dominio').text(url_atual);
	$('#h1').focusout(function(event) {
		var valor = $(this).val();
		valor = valor.replace(/[áàãâä]/g, 'a');
		valor = valor.replace(/[éèêë]/g, 'e');
		valor = valor.replace(/[íìîï]/g, 'i');
		valor = valor.replace(/[óòõôö]/g, 'o');
		valor = valor.replace(/[úùûü]/g, 'u');
		valor = valor.replace(/[ç]/g, 'c');
		valor = valor.replace(/[\s]/g, '-').toLowerCase();
		if (valor != null) {
			$('#url').val(valor);
			$('#urlgoogle').text(valor);
			$('#slug').val(valor);
		}
	});
	$('#h1').focusout(function(event) {
		var valor = $(this).val();
		if (valor != null) {
			$('#h1seo').val(valor);
			$('#titlegoogle').text(valor);
		}
	});
	$('#h1seo').focusout(function(event) {
		var valor = $(this).val();
		if (valor != null && valor.length < 50) {
			$('#titlegoogle').text(valor);
		}
		if (valor != null && valor.length > 50){
			var wordLimit = 50;
			$('#titlegoogle').text('');
			count = 0;
			while (count < wordLimit) { 
				$('#titlegoogle').append(valor[count]);
				if (count == (wordLimit - 1)) {
					$('#titlegoogle').append('...');
				}
				count++;
			}
		}
	});
	$('#editar').click(function(event) {
		$('#url').focus().select();
	});
	$('#url').focus(function(event) {
		$(this).select();
	});
	$('#url').focusout(function(event) {
		var valor = $(this).val();
		valor = valor.replace(/[áàãâä]/g, 'a');
		valor = valor.replace(/[éèêë]/g, 'e');
		valor = valor.replace(/[íìîï]/g, 'i');
		valor = valor.replace(/[óòõôö]/g, 'o');
		valor = valor.replace(/[úùûü]/g, 'u');
		valor = valor.replace(/[ç]/g, 'c');
		valor = valor.replace(/[\s]/g, '-').toLowerCase();
		if (valor != null) {
			$('#url').val(valor);
			$('#urlgoogle').text(valor);
			$('#slug').val(valor);
		}
	});
	$('#slug').focusout(function(event) {
		var valor = $(this).val();
		valor = valor.replace(/[áàãâä]/g, 'a');
		valor = valor.replace(/[éèêë]/g, 'e');
		valor = valor.replace(/[íìîï]/g, 'i');
		valor = valor.replace(/[óòõôö]/g, 'o');
		valor = valor.replace(/[úùûü]/g, 'u');
		valor = valor.replace(/[ç]/g, 'c');
		valor = valor.replace(/[\s]/g, '-').toLowerCase();
		if (valor != null) {
			$('#url').val(valor);
			$('#urlgoogle').text(valor);
			$('#slug').val(valor);
		}
	});
	$('#meta').focusout(function(event) {
		var valor = $(this).val();
		if (valor != null && valor.length < 150) {
			$('#description').text(valor);
		}
		if (valor != null && valor.length > 150){
			var wordLimit = 150;
			$('#description').text('');
			count = 0;
			while (count < wordLimit) { 
				$('#description').append(valor[count]);
				if (count == (wordLimit - 1)) {
					$('#description').append('...');
				}
				count++;
			}
		}
	});

	var largura = $('.progress').width();
	var titlemax = largura/50;
	var metamax = largura/150;
	var title = 0;
	$('#h1seo').bind('input', function(event) {
		var letras = $(this).val().length;
		if (letras > title) {
			var tamanho = titlemax * letras;
			$(this).parent().find('.progress').children().css('width', tamanho);
			title++;
		}else{
			var tamanho = titlemax * letras;
			$(this).parent().find('.progress').children().css('width', tamanho);
			title--;
		}

		if (letras > 50) {
			$(this).parent().find('.progress').children().css('backgroundColor', '#ff0000');
		}else{
			$(this).parent().find('.progress').children().css('backgroundColor', '#33cc33');
		}

	});

	$('#meta').bind('input', function(event) {
		var letras = $(this).val().length;
		if (letras > title) {
			var tamanho = metamax * letras;
			$(this).parent().find('.progress').children().css('width', tamanho);
			title++;
		}else{
			var tamanho = metamax * letras;
			$(this).parent().find('.progress').children().css('width', tamanho);
			title--;
		}

		if (letras > 150) {
			$(this).parent().find('.progress').children().css('backgroundColor', '#ff0000');
		}else{
			$(this).parent().find('.progress').children().css('backgroundColor', '#33cc33');
		}

	});

	$('#ultimonome').focusout(function(event) {
		var primeironome = $('#primeironome').val();
		var ultimonome = $(this).val();
		if (primeironome != "" && ultimonome != "") {
			var usuario = primeironome + '.' + ultimonome;
			usuario = usuario.replace(/[áàãâä]/g, 'a');
			usuario = usuario.replace(/[éèêë]/g, 'e');
			usuario = usuario.replace(/[íìîï]/g, 'i');
			usuario = usuario.replace(/[óòõôö]/g, 'o');
			usuario = usuario.replace(/[úùûü]/g, 'u');
			usuario = usuario.replace(/[ç]/g, 'c');
			usuario = usuario.replace(/[\s]/g, '').toLowerCase();
			$('#usuario').val(usuario);
		}
	});

	$('#telefone').focusout(function(event) {
		var texto = $(this).val();
		var wordLimit = $(this).val().length;
		var count = 0;
		var valor = [];
		while (count < wordLimit) { 
			valor.push(texto[count]);
			count++;
		}
		if (wordLimit == 11) {
			$(this).val('(' + valor[0]+valor[1] + ') ' + valor[2]+valor[3]+valor[4]+valor[5]+valor[6] + '-' + valor[7]+valor[8]+valor[9]+valor[10])
		}
		else if (wordLimit == 10) {
			$(this).val('(' + valor[0]+valor[1] + ') ' + valor[2]+valor[3]+valor[4]+valor[5] + '-' + valor[6]+valor[7]+valor[8]+valor[9])
		}
	});

	CKEDITOR.replace('descricao');

});

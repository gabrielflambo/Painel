$(document).ready(function() {

	$('.button-collapse').sideNav();
	$('.collapsible').collapsible();
	$('.menu .links').slimScroll({
		color: '#fff',
		size: '10px',
		height: '60vh'
	});

	$('.menu button').click(function(event) {
		var classe = $('.menu').attr('class');
		if (classe == 'menu') {
			$('.menu').addClass('close');
			$(this).css('left', '110px');
		}else{
			$('.menu').removeClass('close');
			$(this).css('left', '280px');
		}
	});

});

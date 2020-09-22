$(document).ready(function(){
	

	$('.btn-box').click(function(){
		$('.box').toggleClass('active');
	});

	$('.box').click(function(){
		$(this).toggleClass('active');
	});

	$('.btn-slide').click(function(){
		$('.slide').toggleClass('active');
	});


	$('.btn-alert').click(function(){
		$('alert').toggleClass('active');
	});

	$('.btn-Punk').click(function(){
		$('.item').addClass('hide');
		$('.item.Punk').removeClass('hide')
	});

	$('.btn-Psychedelic').click(function(){
		$('.item').addClass('hide');
		$('.item.Psychedelic').removeClass('hide')
	});

	$('.btn-Reggae').click(function(){
		$('.item').addClass('hide');
		$('.item.Reggae').removeClass('hide')

	});

});
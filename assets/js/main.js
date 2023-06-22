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

	$('.btn-Print').click(function(){
		$('.item').addClass('hide');
		$('.item.Print').removeClass('hide')
	});

	$('.btn-Posters').click(function(){
		$('.item').addClass('hide');
		$('.item.Posters').removeClass('hide')
	});

	$('.btn-Personal').click(function(){
		$('.item').addClass('hide');
		$('.item.Personal').removeClass('hide')
	});

	$('.btn-reset').click(function(){
	    $('.item').removeClass('hide');
	});

	});
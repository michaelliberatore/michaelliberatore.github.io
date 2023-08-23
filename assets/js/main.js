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

	$('.btn-Photography').click(function(){
		$('.item').addClass('hide');
		$('.item.Photography').removeClass('hide')
	});

	$('.btn-Client').click(function(){
		$('.item').addClass('hide');
		$('.item.Client').removeClass('hide')
	});

	$('.btn-reset').click(function(){
	    $('.item').removeClass('hide');
	});

	});
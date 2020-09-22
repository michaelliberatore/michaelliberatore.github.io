 $(document).ready(function(){
	console.log('hello world');

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

	$('.btn-mag').click(function(){
		$('.item').addClass('hide');
		$('.item.mag').removeClass('hide')
	});

	$('.btn-red').click(function(){
		$('.item').addClass('hide');
		$('.item.red').removeClass('hide')
	});


});
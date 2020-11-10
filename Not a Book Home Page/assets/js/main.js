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

});
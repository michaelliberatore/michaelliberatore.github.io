$(document).ready(function(){

/* =========================
   UI TOGGLES
========================= */

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

/* =========================
   FILTER SYSTEM (WORK PAGE)
========================= */

$('.btn-Print').click(function(){
$('.item').addClass('hide');
$('.item.Print').removeClass('hide');
});

$('.btn-Photography').click(function(){
$('.item').addClass('hide');
$('.item.Photography').removeClass('hide');
});

$('.btn-Client').click(function(){
$('.item').addClass('hide');
$('.item.Client').removeClass('hide');
});

$('.btn-reset').click(function(){
$('.item').removeClass('hide');
});

/* =========================
   CAROUSEL (ARROWS + AUTO SLIDE)
========================= */

$('.carousel').each(function(){

let $carousel = $(this);
let $track = $carousel.find('.carousel-track');
let $slides = $carousel.find('img');
let index = 0;

function updateCarousel(){
$track.css('transform', 'translateX(' + (-index * 100) + '%)');
}

/* NEXT */
$carousel.find('.next').click(function(){
index = (index + 1) % $slides.length;
updateCarousel();
});

/* PREVIOUS */
$carousel.find('.prev').click(function(){
index = (index - 1 + $slides.length) % $slides.length;
updateCarousel();
});

/* AUTO PLAY */
setInterval(function(){
index = (index + 1) % $slides.length;
updateCarousel();
}, 3500);

});

});
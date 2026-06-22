$(document).ready(function () {

// =========================
// TESTIMONIAL CAROUSEL
// =========================

const testimonialTrack = document.querySelector('.testimonial-track');
const testimonialSlides = document.querySelectorAll('.testimonial');
const testimonialPrev = document.querySelector('.testimonial-carousel .prev');
const testimonialNext = document.querySelector('.testimonial-carousel .next');

if (testimonialTrack && testimonialSlides.length && testimonialNext && testimonialPrev) {

let testimonialIndex = 0;

function updateTestimonials() {
testimonialTrack.style.transform =
`translateX(-${testimonialIndex * 100}%)`;
}

function nextTestimonial() {
testimonialIndex =
(testimonialIndex + 1) % testimonialSlides.length;
updateTestimonials();
}

function prevTestimonial() {
testimonialIndex =
(testimonialIndex - 1 + testimonialSlides.length) %
testimonialSlides.length;
updateTestimonials();
}

testimonialNext.addEventListener('click', nextTestimonial);
testimonialPrev.addEventListener('click', prevTestimonial);

// =========================
// MOBILE AUTO-SCROLL
// =========================

if (window.matchMedia("(max-width: 768px)").matches) {
setInterval(() => {
nextTestimonial();
}, 4000);
}
}

// =========================
// UI TOGGLES
// =========================

$('.btn-box').click(function () {
$('.box').toggleClass('active');
});

$('.box').click(function () {
$(this).toggleClass('active');
});

$('.btn-slide').click(function () {
$('.slide').toggleClass('active');
});

// FIXED (you had invalid selector before)
$('.btn-alert').click(function () {
$('.alert').toggleClass('active');
});

// =========================
// FILTER SYSTEM
// =========================

$('.btn-Print').click(function () {
$('.item').addClass('hide');
$('.item.Print').removeClass('hide');
});

$('.btn-Photography').click(function () {
$('.item').addClass('hide');
$('.item.Photography').removeClass('hide');
});

$('.btn-Client').click(function () {
$('.item').addClass('hide');
$('.item.Client').removeClass('hide');
});

$('.btn-reset').click(function () {
$('.item').removeClass('hide');
});

});
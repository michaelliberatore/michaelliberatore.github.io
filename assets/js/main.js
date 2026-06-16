$(document).ready(function(){
	
<script>
let currentIndex = 0;

function updateTestimonials() {
const track = document.getElementById("testimonialTrack");
const items = document.querySelectorAll(".testimonial");

if (!track || items.length === 0) return;

track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextTestimonial() {
const items = document.querySelectorAll(".testimonial");
currentIndex = (currentIndex + 1) % items.length;
updateTestimonials();
}

function prevTestimonial() {
const items = document.querySelectorAll(".testimonial");
currentIndex = (currentIndex - 1 + items.length) % items.length;
updateTestimonials();
}

/* AUTO PLAY ONLY ON MOBILE */
function startAuto() {
if (window.innerWidth > 768) return;

setInterval(() => {
nextTestimonial();
}, 4000);
}

window.addEventListener("load", () => {
updateTestimonials();
startAuto();
});
</script>

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


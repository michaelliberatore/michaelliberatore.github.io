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

    testimonialNext.addEventListener('click', () => {
      testimonialIndex =
        (testimonialIndex + 1) % testimonialSlides.length;
      updateTestimonials();
    });

    testimonialPrev.addEventListener('click', () => {
      testimonialIndex =
        (testimonialIndex - 1 + testimonialSlides.length) %
        testimonialSlides.length;
      updateTestimonials();
    });
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
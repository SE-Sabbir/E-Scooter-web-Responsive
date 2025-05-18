$('.count_num').counterUp({
    delay: 10,
    time: 1000
});
// ----Aos Animation js part----
AOS.init({
  duration: 1200,
});
// ----slider js part------

 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});
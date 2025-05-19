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
// --------Testimonials slider part-----
$('.myslider_2').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    pauseOnHover: true,
    autoplay: true,
    dots: false,
    prevArrow: '<i class="fa-light arrow prvarrow fa-arrow-left"></i>',
    nextArrow: '<i class="fa-light arrow nextarrow fa-arrow-right"></i>'
  });
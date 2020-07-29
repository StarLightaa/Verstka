$(function(){
  $('.slider__inner').slick({
    prevArrow: '<button class="slider-btn slider-btn__left"></button>',
    nextArrow: '<button class="slider-btn slider-btn__right"></button>',
    infinite:false,
    dots: true
  });

  $('.menu__link').on('click', function(){
    $('.menu__link').removeClass('menu__link--active');
    $(this).addClass('menu__link--active');
  });

  $('.portfolio__btn').on('click', function(){
    $('.portfolio__btn').removeClass('portfolio__btn--active');
    $(this).addClass('portfolio__btn--active');
  });
});
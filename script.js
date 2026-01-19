const swiperBusinesses = new Swiper('.businesses__swiper', {
  loop: true,
  slidesPerView: 3,
  centeredSlides: 'auto',
  spaceBetween: 16,
  grabCursor: true,
  speed: 600,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


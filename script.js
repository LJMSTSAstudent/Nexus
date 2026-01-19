const swiperBusinesses = new Swiper('.businesses__swiper', {
   loop: true,
   slidesPerView: 'auto',
   centeredSlides: 'auto',
  
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

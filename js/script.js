var swiper2 = new Swiper(".mySwiper", {
    spaceBetween: 30,
    slidesPerView: 4,
    //centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed:2000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  
  $('.swiper-slide').hover(function(){
    swiper2.autoplay.stop();
  }, function(){
    swiper2.autoplay.start();
  });
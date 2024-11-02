const swiper = new Swiper('.slider-wrapper', {
 

    loop: true,
    // grabCursor: true,
    // spaceBetween: 10,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{

        0:{
            slidesPerView: 2
        },

        620:{
            slidesPerView: 3
        },

        1024:{
            slidesPerView: 5
        }
    }
  
   
  });
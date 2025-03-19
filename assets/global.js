document.addEventListener('DOMContentLoaded', function () {
    var swiperContainer = document.querySelector('.swiper-container');
    var swiperInstance = null;
    var isSwiperInitialized = false; // Track if Swiper is initialized

    function initSwiper() {
      if (!swiperContainer) {
        return;
      }

      var screenWidth = document.documentElement.clientWidth; // Correct width

      console.log('Actual screen width:', screenWidth);

      if (screenWidth <= 768 && !isSwiperInitialized) {
        console.log('Initializing Swiper for mobile view...');

        document.querySelectorAll('.swiper-container .grid__item').forEach((item) => {
          item.classList.add('swiper-slide');
          item.classList.remove('grid__item');
        });

        swiperInstance = new Swiper('.swiper-container', {
          slidesPerView: 1,
          spaceBetween: 10,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });

        console.log('Swiper initialized.');
        isSwiperInitialized = true;
      } else if (screenWidth > 768 && isSwiperInitialized) {
        console.log('Destroying Swiper for desktop view...');

        if (swiperInstance) {
          swiperInstance.destroy(true, true);
          swiperInstance = null;
        }

        document.querySelectorAll('.swiper-container .swiper-slide').forEach((item) => {
          item.classList.remove('swiper-slide');
          item.classList.add('grid__item');
        });

        isSwiperInitialized = false;
        console.log('Swiper destroyed and grid restored.');
      }
    }

    // Run on load
    initSwiper();

    // Run on resize immediately
    window.addEventListener('resize', initSwiper);
  });
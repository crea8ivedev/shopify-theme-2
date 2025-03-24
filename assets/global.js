
  document.addEventListener('DOMContentLoaded', function () {
    var swiperContainer = document.querySelector('.swiper-container');
    var swiperInstance = null;
    var isSwiperInitialized = false; 

    function initSwiper() {
        var screenWidth = document.documentElement.clientWidth;
        console.log('Screen Width:', screenWidth);

        document.querySelectorAll('[data-show-mobile-slider="true"]').forEach((item) => {
            if (screenWidth <= 768) {
                item.classList.remove('grid__item');
                item.classList.add('swiper-slide');
            } else {
                item.classList.add('grid__item');
                item.classList.remove('swiper-slide');
            }
        });

        if (screenWidth <= 768 && !isSwiperInitialized) {
            console.log('Initializing Swiper for mobile view...');

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

            isSwiperInitialized = false;
            console.log('Swiper destroyed and grid restored.');
        }
    }
    initSwiper();
    
    window.addEventListener('resize', initSwiper);
});


document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".marquee-swiper", {
    loop: true,
    centeredSlides: true,
    spaceBetween: 30,
    speed: 1000,
    autoplay: window.swiperSettings.autoplay,
    breakpoints: {
      300: {
        slidesPerView: window.swiperSettings.marquee_breakpoint_mobile,
        slidesPerGroup: 1,
        spaceBetween: 5,
        centeredSlides: false,
      },
      768: {
        slidesPerView: window.swiperSettings.marquee_breakpoint_tablet,
        slidesPerGroup: 1,
        spaceBetween: 5,
        centeredSlides: false,
      },
      1200: {
        slidesPerView: window.swiperSettings.marquee_breakpoint_desktop,
        slidesPerGroup: 1,
        spaceBetween: 5,
        centeredSlides: false,
      },
    },
  });
});

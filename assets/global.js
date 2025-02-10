<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

const swiper = new Swiper(".logo-swiper-container", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  centeredSlides: true,  // Ensure centeredSlides is true initially
  loop: true,
  speed:5000,
  autoplay: {
    delay: 1,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 600px
    600: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 5,
      centeredSlides: true // Center slides on tablets
    },
    // when window width is >= 900px
    900: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 5,
      centeredSlides: false
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 5,
      slidesPerGroup: 1,
      spaceBetween: 5,
      centeredSlides: false
    }
  }
});
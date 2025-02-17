document.addEventListener("DOMContentLoaded", function () {
  const brandLogoSection = document.querySelector(".brand-logos");

  if (!brandLogoSection) return;

  const enableScrolling = brandLogoSection.getAttribute("data-enable-scrolling") === "true";
  const scrollSpeed = parseInt(brandLogoSection.getAttribute("data-scroll-speed"), 10) || 5;
  const direction = brandLogoSection.getAttribute("data-direction");
  const pauseOnHover = brandLogoSection.getAttribute("data-pause-on-hover") === "true";

  let reverse = direction === "right";

  if (enableScrolling) {
    const swiper = new Swiper(".logo-swiper-container", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      centeredSlides: true,
      loop: true,
      speed: scrollSpeed * 1000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: pauseOnHover, // Enable built-in pause on hover
        reverseDirection: reverse,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        600: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 2,
          centeredSlides: true,
        },
        900: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1200: {
          slidesPerView: 5,
          slidesPerGroup: 1,
          spaceBetween: 5,
          centeredSlides: false,
        }
      }
    });

    if (pauseOnHover) {
      // Get the correct container element
      const swiperContainer = document.querySelector(".logo-swiper-container");
      
      swiperContainer.addEventListener("mouseenter", () => {
        swiper.autoplay.stop();
        // Force stop any ongoing transition
        swiper.translateTo(swiper.translate, 0);
      });

      swiperContainer.addEventListener("mouseleave", () => {
        swiper.autoplay.start();
      });
    }
  }
});
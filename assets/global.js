document.addEventListener("DOMContentLoaded", function () {

  if (typeof Swiper === "undefined") {
    return;
  }

  const brandLogoSection = document.querySelector(".brand-logos-main");

  if (!brandLogoSection) return;

  const enableScrolling = brandLogoSection.getAttribute("data-enable-scrolling") === "true";
  const scrollSpeed = parseInt(brandLogoSection.getAttribute("data-scroll-speed"), 10);
  const direction = brandLogoSection.getAttribute("data-direction"); // "left" or "right"
  const swiperContainer = document.querySelector(".brand-logo-swiper");
  if (!swiperContainer) return;

  let isReverse = direction === "left"; // Swiper scrolls left to right by default, so reverse if right

  if (enableScrolling) {
    new Swiper(swiperContainer, {
      slidesPerView: "auto",
      loop: true,
      speed: scrollSpeed * 1000,
      autoplay: {
        delay: 0, // Continuous scrolling effect
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        reverseDirection: isReverse, // Reverses scrolling direction
      },
      allowTouchMove: false,
      direction: "horizontal",
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 2,
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 2,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 0,
        }
      }
    });
  }
});

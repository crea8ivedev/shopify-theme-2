document.addEventListener("DOMContentLoaded", function () {
  if (typeof Swiper === "undefined") {
    return;
  }

  // Select all brand logo sections
  const brandLogoSections = document.querySelectorAll(".brand-logos-main");

  brandLogoSections.forEach((brandLogoSection) => {
    const enableScrolling = brandLogoSection.getAttribute("data-enable-scrolling") === "true";
    const scrollSpeed = parseInt(brandLogoSection.getAttribute("data-scroll-speed"), 10);
    const direction = brandLogoSection.getAttribute("data-direction");
    const swiperContainer = brandLogoSection.querySelector(".brand-logo-swiper");

    if (!swiperContainer) return;

    let isReverse = direction === "left";

    if (enableScrolling) {
      new Swiper(swiperContainer, {
        slidesPerView: "auto",
        loop: true,
        speed: scrollSpeed * 1000,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: isReverse,
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
});

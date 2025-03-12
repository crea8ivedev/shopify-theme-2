document.addEventListener("DOMContentLoaded", function () {
  const brandLogoSection = document.querySelector(".brand-logos");

  if (!brandLogoSection) return;

  const enableScrolling = brandLogoSection.getAttribute("data-enable-scrolling") === "true";
  const scrollSpeed = parseInt(brandLogoSection.getAttribute("data-scroll-speed"), 10);
  const direction = brandLogoSection.getAttribute("data-direction"); // "left" or "right"

  let isReverse = direction === "left"; // Swiper scrolls left to right by default, so reverse if right

  if (enableScrolling) {
    const swiper = new Swiper(".logo-swiper-container", {
      slidesPerView: "auto",
      loop: true,
      speed: scrollSpeed * 1000,
      autoplay: {
        delay: 0, // Continuous scrolling effect
        disableOnInteraction: false,
        reverseDirection: isReverse, // Reverses scrolling direction
      },
      allowTouchMove: false,
      direction: "horizontal",
      breakpoints: {
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
          spaceBetween: 5,
        }
      }
    });
  }
});

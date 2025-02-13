document.addEventListener("DOMContentLoaded", () => {
  if (typeof Swiper === "undefined") {
    return;
  }

  const collectionSections = document.querySelectorAll(
    ".section--collection-list.section--slider",
  );
  if (!collectionSections.length) {return;}

  collectionSections.forEach((section) => {
    const collectionWrapper = section.querySelector(".collection-wrapper");
    const swiperPagination = section.querySelector(".swiper-pagination");
    const swiperButtonPrev = section.querySelector(".swiper-button-prev");
    const swiperButtonNext = section.querySelector(".swiper-button-next");

    const toggleNavigation = (show) => {
      [swiperPagination, swiperButtonPrev, swiperButtonNext].forEach((el) => {
        if (el) {el.style.display = show ? "block" : "none";}
      });
    };

    const initializeSlider = () => {
      const sliderContainer = section.querySelector(".swiper-container");
      if (!sliderContainer) {return;}

      const slides = section.querySelectorAll(".swiper-slide");
      const totalSlides = slides?.length;
      const maxSlidesPerView =
        window.innerWidth >= 1580
          ? 4
          : window.innerWidth >= 1024
            ? 3
            : window.innerWidth >= 768
              ? 2
              : 1;

      const hideNav = totalSlides <= maxSlidesPerView;
      toggleNavigation(!hideNav);

      new Swiper(sliderContainer, {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: !hideNav,
        navigation: hideNav
          ? false
          : { nextEl: swiperButtonNext, prevEl: swiperButtonPrev },
        pagination: hideNav ? false : { el: swiperPagination, clickable: true },
        breakpoints: {
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1580: { slidesPerView: 4 },
        },
      });
    };

    const handleResponsiveSlider = () => {
      if (section.classList.contains("section--slider-mobile")) {
        if (window.innerWidth <= 768) {
          section.classList.remove("section--grid");
          collectionWrapper?.classList.remove("collection-grid");
          initializeSlider();
        } else {
          section.classList.add("section--grid");
          collectionWrapper?.classList.add("collection-grid");
        }
      }
    };

    if (section.classList.contains("section--slider-mobile")) {
      toggleNavigation(false);
    } else {
      initializeSlider();
    }

    window.addEventListener("resize", handleResponsiveSlider);
    handleResponsiveSlider();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".slideshow-swiper");

  sliders.forEach((sliderEl) => {
    const autoplay = sliderEl.dataset.autoplay === "true";

    const options = {
      loop: true,
    };

    if (autoplay) {
      const speed = (parseFloat(sliderEl.dataset.speed) || 3) * 1000;
      options.autoplay = { delay: speed, disableOnInteraction: false };
      options.speed = 1500;
    }

    new Swiper(sliderEl, options);
  });
});

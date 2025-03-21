
document.addEventListener("DOMContentLoaded", function () {
    let blogGrid = document.querySelector(".blog-grid");
    let enableSlider = blogGrid.dataset.showMobileSlider === "true";
    let swiperInstance = null;

    function toggleSwiper() {
        if (window.innerWidth < 768 && enableSlider) {
            if (!swiperInstance) {
                // Add necessary Swiper classes
                blogGrid.classList.add("swiper-container");
                let items = blogGrid.querySelectorAll(".article-card");
                items.forEach(item => item.classList.add("swiper-slide"));

                swiperInstance = new Swiper(".blog-grid.swiper-container", {
                    slidesPerView: 1.2, // Show partial next slide
                    spaceBetween: 10,
                    pagination: { el: ".swiper-pagination", clickable: true },
                });
            }
        } else {
            if (swiperInstance) {
                swiperInstance.destroy(true, true);
                swiperInstance = null;

                // Remove Swiper classes
                blogGrid.classList.remove("swiper-container");
                let items = blogGrid.querySelectorAll(".article-card");
                items.forEach(item => item.classList.remove("swiper-slide"));
            }
        }
    }

    toggleSwiper();
    window.addEventListener("resize", toggleSwiper);
});


document.addEventListener("DOMContentLoaded", function () {
    const productListContainer = document.querySelector(".product-list-container");
    if (!productListContainer) {
        console.log("❌ productListContainer not found");
        return;
    }

    const productList = productListContainer.querySelector(".product-list");
    const productWrapper = productList?.querySelector("div");

    if (!productList || !productWrapper) {
        console.log("❌ productList or productWrapper not found");
        return;
    }

    let swiperInstance = null; // Store Swiper instance

    function initializeSwiper(slidesPerView) {
        console.log(`✅ Initializing Swiper with ${slidesPerView} slides per view...`);

        // Remove grid_item before applying Swiper
        productWrapper.classList.remove("grid_item");

        productList.classList.add("swiper-container");
        productWrapper.classList.add("swiper-wrapper");

        document.querySelectorAll(".product-list .grid-cell").forEach(item => {
            item.classList.add("swiper-slide");
        });

        if (swiperInstance) {
            swiperInstance.destroy(true, true);
            swiperInstance = null;
            console.log("🛑 Destroying old Swiper instance...");
        }

        swiperInstance = new Swiper(".swiper-container", {
            slidesPerView: slidesPerView,
            spaceBetween: 10,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        console.log("✅ Swiper initialized successfully.");
    }

    function applyGrid() {
        console.log("✅ Applying Grid layout...");

        productWrapper.classList.add("grid_item"); // Ensure it's added back

        document.querySelectorAll(".product-list .swiper-slide").forEach(item => {
            item.classList.remove("swiper-slide");
        });

        productList.classList.remove("swiper-container");
        productWrapper.classList.remove("swiper-wrapper");

        if (swiperInstance) {
            console.log("🛑 Destroying Swiper since switching to grid...");
            swiperInstance.destroy(true, true);
            swiperInstance = null;
        }

        // 🔥 **Force reflow to apply styles instantly**
        productListContainer.style.display = "none";
        productListContainer.offsetHeight; // Force reflow
        productListContainer.style.display = "block";

        console.log("✅ Grid layout applied successfully.");
    }

    function applyLayout() {
        let screenWidth = document.documentElement.clientWidth;
        const productLayout = productListContainer.getAttribute("data-product-layout");
        const showMobileSlider = productListContainer.getAttribute("data-show-mobile-slider") === "true";
        const productsPerRowMobile = parseInt(productListContainer.getAttribute("data-products-per-row-mobile"));
        const productsPerRowDesktop = parseInt(productListContainer.getAttribute("data-products-per-row-desktop"));

        console.log(`📌 Screen Width: ${screenWidth}`);

        if (screenWidth > 768) {
            if (productLayout === "slider") {
                console.log("🔵 Desktop: Activating Swiper...");
                initializeSwiper(productsPerRowDesktop);
            } else {
                console.log("🔵 Desktop: Applying Grid...");
                applyGrid();
            }
        } else {
            if (showMobileSlider) {
                console.log("🟠 Mobile: Activating Swiper...");
                initializeSwiper(productsPerRowMobile);
            } else {
                console.log("🟠 Mobile: Applying Grid...");
                applyGrid();
            }
        }
    }

    // Run layout application initially
    applyLayout();

    // Run layout application on window resize instantly
    window.addEventListener("resize", function () {
        console.log("🔄 Screen resized, reapplying layout...");
        applyLayout();
    });
});


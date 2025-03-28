document.addEventListener("DOMContentLoaded", function () {
    let sliderWrapper = document.querySelector("e-iconwithtext");
    let sliderTrack = document.querySelector(".grid-boxes.slider-track");

    if (!sliderWrapper || !sliderTrack) {
        console.log("❌ Required elements not found.");
        return;
    }

    let showMobileSlider = sliderWrapper.getAttribute("data-show-mobile-slider") === "true";
    let isMobile = window.innerWidth < 768;

    console.log("✅ Data Attribute (showMobileSlider):", showMobileSlider);
    console.log("✅ Screen Width:", window.innerWidth);

    if (showMobileSlider && isMobile) {
        console.log("✅ Initializing infinite scrolling...");

        let items = Array.from(sliderTrack.children);
        
        // Clone items for seamless effect
        items.forEach(item => {
            let clone = item.cloneNode(true);
            sliderTrack.appendChild(clone);
        });

        sliderTrack.classList.add("scrolling"); // Add scrolling class
    } else {
        console.log("❌ Mobile slider is disabled or screen width is too large.");
    }
});

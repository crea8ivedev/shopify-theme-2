// before after slider
var swiper = new Swiper(".before-after-slider", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    allowTouchMove: false,
    centeredSlides: true,
});


document.querySelectorAll('.before-after-section').forEach(section => {
    const handle = section.querySelector('.before-after-slider-handle');
    const beforeImage = section.querySelector('.slider-image.before');
    const sliderContainer = section.querySelector('.right-content');
    const dragText = section.querySelector('.before-after-drag-text');

    let isDragging = false;
    let startX = 0;

    dragText.addEventListener('mousedown', (event) => {
        isDragging = true;
        startX = event.clientX;
    });

    function handleDrag(event) {
        if (!isDragging) return;
        let offsetX;

        if (event.touches) {
            offsetX = event.touches[0].clientX - startX;
        } else {
            offsetX = event.clientX - startX;
        }
        const rect = sliderContainer.getBoundingClientRect();
        const newPosition = Math.max(0, Math.min(100, ((startX + offsetX - rect.left) / rect.width) * 100));
        handle.style.left = `${newPosition}%`;
        beforeImage.style.clipPath = `polygon(0 0, ${newPosition}% 0, ${newPosition}% 100%, 0% 100%)`;
    }

    window.addEventListener('mousemove', (event) => {
        handleDrag(event);
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
    });

    dragText.addEventListener('touchstart', (event) => {
        isDragging = true;
        startX = event.touches[0].clientX;
    });

    window.addEventListener('touchmove', (event) => {
        handleDrag(event);
    });

    window.addEventListener('touchend', () => {
        isDragging = false;
    });
});
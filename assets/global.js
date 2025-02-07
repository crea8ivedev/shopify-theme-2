if (!customElements.get("e-announcement-bar")) {
    class EAnnouncementBar extends HTMLElement {
        constructor() {
            super();
            // Simplify initialization with default values
            const dataset = this.dataset;
            this.autoplay = dataset.autoplay === "true";
            this.autoplaySpeed = parseInt(dataset.autoplaySpeed, 10) || 5000;
            this.showArrows = dataset.enableArrows === "true";
            this.showDots = dataset.enableDots === "true";
            this.enableSlider = dataset.enableSlider === "true";
            this.slider = null;
        }
        connectedCallback() {
            this.initializeComponent();
        }
        initializeComponent() {
            if (this.enableSlider) {
                this.initSlider();
            }
            this.initCloseIcon();
            this.initAnnouncementLink();
        }
        initSlider() {
            const swiperContainer = this.querySelector(".announcementbar-slide");
            if (!swiperContainer) return;

            this.slider = new Swiper(swiperContainer, {
                loop: true,
                autoplay: this.autoplay ? {
                    delay: this.autoplaySpeed,
                    disableOnInteraction: false,
                } : false,
                navigation: {
                    nextEl: '.next-btn',
                    prevEl: '.prev-btn',
                },
            });

            this.slider.init();
        }
        initCloseIcon() {
            const closeIcon = this.querySelector('.close-icon');
            if (!closeIcon) {
                console.error('Close icon not found in the template!');
                return;
            }

            const removeElement = () => this.remove();

            closeIcon.addEventListener('click', removeElement);
            closeIcon.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    removeElement();
                }
            });
        }
        initAnnouncementLink() {
            const announcementLink = this.querySelector('.announcement-link');
            if (!announcementLink) {
                console.error('Announcement link not found in the template!');
                return;
            }

            announcementLink.addEventListener('keydown', (event) => {
                if (event.key === ' ') {
                    event.preventDefault();
                    announcementLink.click();
                }
            });
        }
    }
    customElements.define("e-announcement-bar", EAnnouncementBar);
}

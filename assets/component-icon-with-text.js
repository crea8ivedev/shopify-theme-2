const breakpoints = {
    mobile: 768,
    tablet: 1024
  };
  if (!customElements.get("e-iconwithtext")) {
      class EIconWithText extends HTMLElement {
          constructor() {
              super();
              this.showMobileSlider = this.dataset.showMobileSlider === "true";
              this.breakpoints = window.matchMedia('(max-width: 768px)');
          }
          connectedCallback() {
              this.initializeComponent();
          }
          initializeComponent() {
              this.updateSwiperClasses();
              this.breakpoints.addEventListener('change', () => this.updateSwiperClasses());
              window.addEventListener('resize', () => this.updateSwiperClasses());
          } 
          updateSwiperClasses() {
              const container = this.querySelector('.grid-boxes');
              if (!container) return;
  
              const items = this.querySelectorAll('.grid-box.grid__item');
              if (this.showMobileSlider && this.breakpoints.matches) {
                  container.classList.add('swiper-wrapper');
                  items.forEach(item => item.classList.add('swiper-slide'));
                  this.initializeSwiper();
              } else {
                  container.classList.remove('swiper-wrapper');
                  items.forEach(item => item.classList.remove('swiper-slide'));
              }
          }
          initializeSwiper() {
              new Swiper(".icon-with-text-slider", {
                slidesPerView: 1,
                pagination: {
                  el: ".swiper-pagination",
                },
              });
          }
      }
      customElements.define("e-iconwithtext", EIconWithText);
  }
  
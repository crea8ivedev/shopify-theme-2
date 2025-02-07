class Marquee {
  constructor() {
    this.marqueeContentPrimary = document.querySelector(".marquee-content-primary");
    this.init();
  }

  init() {
    document.addEventListener("DOMContentLoaded", () => this.setMarqueePadding());
  }

  setMarqueePadding() {
    const marqueeWidth = this.marqueeContentPrimary.scrollWidth;
    document.documentElement.style.setProperty('--marquee-padding', `${marqueeWidth}px`);
  }
}

// Instantiate the Marquee class to apply the functionality
new Marquee();

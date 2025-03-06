
class Marquee {
  constructor() {
    this.marqueeText = document.querySelector(".marquee .marquee_text ul");
    this.cloneCount = 5; // Number of times to clone the element
    this.init();
  }

  init() {
    document.addEventListener("DOMContentLoaded", () => this.createMarqueeEffect());
  }

  createMarqueeEffect() {
    if (!this.marqueeText) return;

    const parentElement = this.marqueeText.parentElement;

    for (let i = 0; i < this.cloneCount; i++) {
      this.cloneMarqueeContent(parentElement);
    }

    this.updateMarqueeStyles();
  }

  cloneMarqueeContent(parentElement) {
    const contentClone = this.marqueeText.cloneNode(true);
    contentClone.classList.add("marquee-clone");
    parentElement.appendChild(contentClone);
  }

  updateMarqueeStyles() {
    const contentWidth = this.marqueeText.scrollWidth;
    document.documentElement.style.setProperty("--marquee-padding", `${contentWidth}px`);
    document.documentElement.style.setProperty("--marquee-padding-negative", `-${contentWidth}px`);
  }
}


new Marquee();


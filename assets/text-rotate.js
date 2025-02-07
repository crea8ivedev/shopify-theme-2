// class Marquee {
//   constructor() {
//     this.marqueeContentPrimary = document.querySelector(".marquee-content-primary");
//     this.init();
//   }

//   init() {
//     document.addEventListener("DOMContentLoaded", () => this.setMarqueePadding());
//   }

//   setMarqueePadding() {
//     const marqueeWidth = this.marqueeContentPrimary.scrollWidth;
//     document.documentElement.style.setProperty('--marquee-padding', `${marqueeWidth}px`);
//   }
// }

// // Instantiate the Marquee class to apply the functionality
// new Marquee();
class Marquee {
    constructor() {
      this.marqueeText = document.querySelector(".marquee .marquee_text ul");
      this.init();
    }
  
    init() {
      document.addEventListener("DOMContentLoaded", () => this.createMarqueeEffect());
    }
  
    createMarqueeEffect() {
      if (!this.marqueeText) return;
  
      const contentClone = this.marqueeText.cloneNode(true);
      contentClone.classList.add("marquee-clone");
      this.marqueeText.parentElement.appendChild(contentClone);
  
      const contentWidth = this.marqueeText.scrollWidth;
      document.documentElement.style.setProperty("--marquee-padding", `${contentWidth}px`);
      document.documentElement.style.setProperty("--marquee-padding-negative", `-${contentWidth}px`);
    }
  }
  
  // Instantiate the Marquee class
  new Marquee();
  
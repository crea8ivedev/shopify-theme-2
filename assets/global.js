// const breakpoints = {
//   mobile: 768,
//   tablet: 1024
// };
// if (!customElements.get("e-iconwithtext")) {
//     class EIconWithText extends HTMLElement {
//         constructor() {
//             super();
//             this.showMobileSlider = this.dataset.showMobileSlider === "true";
//             this.breakpoints = window.matchMedia('(max-width: 768px)');
//         }
//         connectedCallback() {
//             this.initializeComponent();
//         }
//         initializeComponent() {
//             this.updateSwiperClasses();
//             this.breakpoints.addEventListener('change', () => this.updateSwiperClasses());
//             window.addEventListener('resize', () => this.updateSwiperClasses());
//         }
//         updateSwiperClasses() {
//             const container = this.querySelector('.grid-boxes');
//             if (!container) return;

//             const items = this.querySelectorAll('.grid-box.grid__item');
//             if (this.showMobileSlider && this.breakpoints.matches) {
//                 container.classList.add('swiper-wrapper');
//                 items.forEach(item => item.classList.add('swiper-slide'));
//                 this.initializeSwiper();
//             } else {
//                 container.classList.remove('swiper-wrapper');
//                 items.forEach(item => item.classList.remove('swiper-slide'));
//             }
//         }
//         initializeSwiper() {
//             new Swiper(".icon-with-text-slider", {
//               slidesPerView: 1,
//               pagination: {
//                 el: ".swiper-pagination",
//               },
//             });
//         }
//     }
//     customElements.define("e-iconwithtext", EIconWithText);
// }

document.addEventListener("click", (e) => {
  const videoContainer = e.target.closest('.video-with-text-container');
  if (videoContainer) {
    const playButton = videoContainer.querySelector('#video-play-icon');
    const videoWithTextCover = videoContainer.querySelector('#video-with-text-cover');
    const videoIframe = videoContainer.querySelector('#video-player');

    if (videoWithTextCover && playButton) {
      playButton.addEventListener("click", () => {
        videoWithTextCover.classList.add("hidden");

        if (videoIframe) {
          videoIframe.classList.remove("hidden");
          videoIframe.classList.add("visible");

          if (!videoIframe.src.includes("&autoplay=1")) {
            videoIframe.src += "&autoplay=1";
          }
        }
      })
    }
  }
  if (e.target instanceof HTMLVideoElement) {
    const videoPlayer = e.target;
    const videoContainer = videoPlayer.closest(".video-with-text-container");

    const videoPlayIcon = videoContainer.querySelector("#video-play-icon");
    const videoTagCover = videoContainer.querySelector(
      "#video-tag-with-text-cover",
    );

    if (videoPlayer.paused) {
      videoPlayer.play();
      if (videoPlayIcon) {
        videoPlayIcon.classList.add("hidden");
        videoPlayIcon.classList.remove("visible");
      }
      videoTagCover.classList.add("hidden");
    } else {
      videoPlayer.pause();
      if (videoPlayIcon) {
        videoPlayIcon.classList.remove("hidden");
        videoPlayIcon.classList.add("visible");
      }
    }
  }
  
});

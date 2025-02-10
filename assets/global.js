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
document.addEventListener("DOMContentLoaded", function () {
  const playButton = document.getElementById("video-play-button");
  const videoCover = document.getElementById("video-with-text-cover");
  const iframePlayer = document.getElementById("video-player");
  const playIcon = document.getElementById("play-icon");

  if (playButton && videoCover) {
    playButton.addEventListener("click", function () {
      videoCover.classList.add("hidden"); // Hide the cover

      if (iframePlayer) {
        iframePlayer.classList.remove("hidden"); // Show iframe
        iframePlayer.classList.add("visible");

        if (!iframePlayer.src.includes("&autoplay=1")) {
          iframePlayer.src += "&autoplay=1";
        }
        if (playIcon) {
          playIcon.classList.add("hidden");
        }
      }
    });
  }
});

document.addEventListener("click", (e) => {
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

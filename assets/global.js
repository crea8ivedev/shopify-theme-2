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
      videoCover.style.display = "none";

      if (iframePlayer) {
        iframePlayer.style.display = "block";
        if (!iframePlayer.src.includes("&autoplay=1")) {
          iframePlayer.src += "&autoplay=1";
        }
        if (playIcon) {
          playIcon.style.display = "none";
        }
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const videoPlayButton = document.getElementById("video-tag-play-button");
  const videoTagCover = document.getElementById("video-tag-with-text-cover");
  const videoPlayer = document.getElementById("video-tag-player");
  const videoPlayIcon = document.getElementById("video-play-icon");

  if (videoPlayButton && videoTagCover) {
    videoPlayButton.addEventListener("click", function () {
      videoTagCover.style.display = "none";
    });
  }
  if (videoPlayer) {
    videoPlayer.addEventListener("click", function () {
      if (videoPlayer.paused) {
        videoPlayer.play();
        //   if (pauseIcon) pauseIcon.style.display = "block";
        if (videoPlayIcon) {
          videoPlayIcon.style.display = "none";
        }

        videoTagCover.style.display = "none";
      } else {
        videoPlayer.pause();
        if (videoPlayIcon) {
          videoPlayIcon.style.display = "block";
        }
      }
    });
  }
});

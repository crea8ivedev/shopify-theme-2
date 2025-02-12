function handleMediaInteraction(e) {
  e.preventDefault();
  const videoContainer = e.target.closest(".video-with-text-container");
  if (
    !videoContainer ||
    !(e.type === "click" || e.key === "Enter" || e.key === " ")
  )
    {return;}

  const videoWithTextCover = videoContainer.querySelector(
    ".video-with-text-cover",
  );
  const videoIframe = videoContainer.querySelector("iframe#video-player");
  const video = videoContainer.querySelector("video");
  const videoPlayIcon = videoContainer.querySelector(".video-play-button");

  if (videoWithTextCover) {videoWithTextCover.classList.add("hidden");}

  if (videoIframe) {
    videoIframe.classList.remove("hidden");
    videoIframe.classList.add("visible");

    if (!videoIframe.src.includes("&autoplay=1")) {
      videoIframe.src += "&autoplay=1";
      videoIframe.setAttribute("tabindex", "0");
      videoIframe.focus();
    }
  }

  if (video) {
    if (video.paused) {
      video.play();
      if (videoPlayIcon) {
        videoPlayIcon.classList.add("hidden");
        videoPlayIcon.classList.remove("visible");
      }
      video.setAttribute("tabindex", "0");
      video.focus();
    } else {
      video.pause();
      if (videoPlayIcon) {
        videoPlayIcon.classList.remove("hidden");
        videoPlayIcon.classList.add("visible");
        videoPlayIcon.setAttribute("tabindex", "0");
        videoPlayIcon.focus();
      }
    }
  }
}

document.addEventListener("click", handleMediaInteraction);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    handleMediaInteraction(e);
  }
});

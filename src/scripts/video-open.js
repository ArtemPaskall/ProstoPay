// Hide and show video section

const showButtons = document.querySelectorAll('.video-open');
const closeButton = document.getElementById('video-close');
const video = document.getElementById('video');

showButtons.forEach(showButton => {
  showButton.addEventListener('click', showVideo);
})

function showVideo() {
  const videoSection = document.querySelector('.page__section--video')

  if (!videoSection.classList.contains('page__section--video-open')) {
    videoSection.classList.add('page__section--video-open')
    setTimeout(() => {
      video.style.zIndex = "1";
    }, 400)

    setTimeout(() => {
      videoSection.style.position = "relative"
    }, 150)
  }
}

closeButton.addEventListener('click', hideVideo)

function hideVideo() {
  video.style.zIndex = "-1";
  const videoSection = document.querySelector('.page__section--video')
  videoSection.classList.remove('page__section--video-open')
  videoSection.style.position = "absolute"
}

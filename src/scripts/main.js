'use strict';
import { translationArr } from './translate';

// Select language and translate content;

const allLang = ['UA', 'EN', 'GE'];
const select = document.getElementById('select-lang');

for (const child of select.children) {
  child.addEventListener('click', () => changeURLLanguage(child));
}

function changeURLLanguage(child) {
  const lang = child.innerHTML;
  let prevHash = window.location.hash.substring(1);
  window.location.href = window.location.pathname + '#' + lang;
  // window.location.reload();
  changeLanguage(prevHash);
}

function changeLanguage(prevHash) {
  let hash = window.location.hash;

  hash = hash.substring(1);

  if (!allLang.includes(hash.toLocaleUpperCase())) {
    window.location.href = window.location.pathname + '#UA';
    window.location.reload();
  }

  const currentLang = document.getElementById('current-lang');

  currentLang.innerHTML = hash;

  // const link = document.getElementById('services');
  // console.log(link);

  // link.href = link.href + '#' + hash;
  // console.log(link.href);

  for (const key in translationArr) {
    let element = document.querySelector('.lang-' + key);
    if(element) {
      if(translationArr[key][hash] !== undefined) {
        element.innerHTML = translationArr[key][hash];
      } else if (hash !== prevHash) {
        element.innerHTML = translationArr[key][prevHash];
      }
    }
  }
}

// Hide and show video section
const showButton = document.getElementById('video-open');
const closeButton = document.getElementById('video-close');
const video = document.getElementById('video');

showButton.addEventListener('click', () => {
  const videoSection = document.querySelector('.page__section--video')
  videoSection.classList.add('page__section--video-open')
  setTimeout(() => {
    video.style.zIndex = "1";
  }, 600)

  setTimeout(() => {
    videoSection.style.position = "relative"
  }, 150)
})

closeButton.addEventListener('click', () => {
  video.style.zIndex = "-1";
  const videoSection = document.querySelector('.page__section--video')
  videoSection.classList.remove('page__section--video-open')
  videoSection.style.position = "absolute"
})



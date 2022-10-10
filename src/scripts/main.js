'use strict';
import { translationArr } from './translate';

// Select language and translate content;

const allLang = ['UA', 'EN'];
const langSwitchers = document.querySelectorAll('.select-lang');

langSwitchers.forEach(select => {
  for (const child of select.children) {
    child.addEventListener('click', () => changeURLLanguage(child));
  }
})

function changeURLLanguage(child) {
  const lang = child.innerHTML;
  window.location.href = window.location.pathname + '#' + lang;
  document.cookie = lang;
  changeLanguage();
  changeImages()
}

changeLanguage();

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substring(1);
  document.cookie = hash;

  if (!allLang.includes(hash.toLocaleUpperCase())) {
    window.location.href = window.location.pathname + '#UA';
    window.location.reload();
  }


  const currentLang = document.querySelectorAll('.current-lang');
  currentLang.forEach(item => item.innerHTML = hash)

  for (const key in translationArr) {
    let element = document.querySelectorAll('._lang__' + key);

    if(element) {
      element.forEach(item => {
        if(translationArr[key][hash] !== undefined) {
          item.innerHTML = translationArr[key][hash];
        }
      })
    }
  }
}

// Сhange the image depending on the language
function changeImages() {
  let lang = document.cookie;

  let imageWhyProsto = document.querySelectorAll('._lang__img');

  imageWhyProsto.forEach(item => {
    item.classList.remove('_lang__img--visible');

    if (window.innerWidth >= 768)  {
      if(item.classList.contains(lang) && item.classList.contains('wide-screen')) {
        item.classList.add('_lang__img--visible');
      }
    } else {
      if(item.classList.contains(lang) && item.classList.contains('mobile')) {
        item.classList.add('_lang__img--visible');
      }
    }
  })
}

changeImages();
window.addEventListener('resize', changeImages);

// Menu hide
const menuIcon = document.getElementById('dropdownOpen')
const dropdownMenu = document.getElementById('dropdownMenu')

menuIcon.addEventListener('click', function() {

  if (!dropdownMenu.classList.contains('dropdown__animation')) {
    dropdownMenu.classList.add('dropdown__animation')
  } else {
    dropdownMenu.classList.remove('dropdown__animation')
  }

  window.addEventListener('scroll', function() {
    dropdownMenu.classList.remove('dropdown__animation')
  })
})

// Function show 'pop-up-form' overlay
  const touchButtons = document.querySelectorAll('.button__form');
  const closePopup = document.querySelector('.touch-form__close-cross');

  touchButtons.forEach(button => button.addEventListener('click', togglePopup));
  closePopup.addEventListener('click', togglePopup);

  function togglePopup() {
    document.getElementById('pop-up-form').classList.toggle('touch-form--active');
  }

  // Function show 'try-it' overlay
  const tryItButtons = document.querySelectorAll('.button__try-it');
  const closeTryIt = document.querySelector('.try-it__close-cross');

  tryItButtons.forEach(button => button.addEventListener('click', toggleTryIt));
  closeTryIt.addEventListener('click', toggleTryIt);

  function toggleTryIt() {
    document.getElementById('try-it').classList.toggle('try-it--active');
  }

    // Function show 'demo-video' overlay
    const showVideo = document.querySelector('.try-it__QR-image');
    const videoIframe = document.querySelector('.try-it__demo-video');
    const closeVideo = document.querySelector('.try-it__video-close-button');

    showVideo.addEventListener('click', function() {
      showVideo.classList.add('try-it__QR-image--close');
      videoIframe.classList.add('try-it__demo-video--show')
      closeVideo.classList.add('try-it__video-close-button--show')
    });

    closeVideo.addEventListener('click', function() {
      showVideo.classList.remove('try-it__QR-image--close');
      videoIframe.classList.remove('try-it__demo-video--show')
      closeVideo.classList.remove('try-it__video-close-button--show')
    });


  // Open and hide text on Services mobile

  const openButtons = document.querySelectorAll('.services-section__text-open-btn');

  openButtons.forEach(child => {
    child.addEventListener('click', function() {
      let parent = child.closest('.services-section__mobile')
      let textMobile = parent.querySelector('.services-section__mobile-text')

      if (textMobile.classList.contains('services-section__mobile-text--close')) {
        textMobile.classList.remove('services-section__mobile-text--close');
        textMobile.classList.add('services-section__mobile-text--open');
        child.innerHTML = 'Менше'
      } else {
        textMobile.classList.remove('services-section__mobile-text--open');
        textMobile.classList.add('services-section__mobile-text--close');
        child.innerHTML = 'Більше'
      }
    })
  })

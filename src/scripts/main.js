import { translationArr } from './translate';

// Select language and translate content;

if (!document.cookie) {
  document.cookie = 'UA';
}

const langSwitchers = document.querySelectorAll('.select-lang');

langSwitchers.forEach(select => {
  for (const child of select.children) {
    child.addEventListener('click', () => changeURLLanguage(child));
  }
});

function changeURLLanguage(child) {
  const lang = child.innerHTML;

  document.cookie = lang;
  changeLanguage();
  changeImages();
  translateButtonsMore();
}

function changeLanguage() {
  const lang = document.cookie;
  const currentLang = document.querySelectorAll('.current-lang');

  currentLang.forEach(item => {
    item.innerHTML = lang;
  });

  for (const key in translationArr) {
    const element = document.querySelectorAll('._lang__' + key);

    if (element) {
      element.forEach(item => {
        if (translationArr[key][lang] !== undefined) {
          item.innerHTML = translationArr[key][lang];
        }
      });
    }
  }
}

function translateButtonsMore() {
  const moreButtons = document.querySelectorAll('.services-section__text-open-btn');
  const lang = document.cookie;

  moreButtons.forEach(button => {
    if (lang === 'EN') {
      if (button.innerHTML === 'Більше') {
        button.innerHTML = 'See more';
      }

      if (button.innerHTML === 'Менше') {
        button.innerHTML = 'Less';
      }
    } else {
      if (button.innerHTML === 'See more') {
        button.innerHTML = 'Більше';
      }

      if (button.innerHTML === 'Less') {
        button.innerHTML = 'Менше';
      }
    }
  });
}

changeLanguage();

// Сhange the image depending on the language
function changeImages() {
  const lang = document.cookie;

  const imageWhyProsto = document.querySelectorAll('._lang__img');

  imageWhyProsto.forEach(item => {
    item.classList.remove('_lang__img--visible');

    if (window.innerWidth >= 768) {
      if (item.classList.contains(lang) && item.classList.contains('wide-screen')) {
        item.classList.add('_lang__img--visible');
      }
    } else {
      if (item.classList.contains(lang) && item.classList.contains('mobile')) {
        item.classList.add('_lang__img--visible');
      }
    }
  });
}
changeImages();
window.addEventListener('resize', changeImages);
window.addEventListener('resize', translateButtonsMore);

// Menu hide
const menuIcon = document.getElementById('dropdownOpen');
const dropdownMenu = document.getElementById('dropdownMenu');

menuIcon.addEventListener('click', function() {
  if (!dropdownMenu.classList.contains('dropdown__animation')) {
    dropdownMenu.classList.add('dropdown__animation');
  } else {
    dropdownMenu.classList.remove('dropdown__animation');
  }

  window.addEventListener('scroll', function() {
    dropdownMenu.classList.remove('dropdown__animation');
  });
});

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

if (closeTryIt) {
  closeTryIt.addEventListener('click', toggleTryIt);
}

function toggleTryIt() {
  document.getElementById('try-it').classList.toggle('try-it--active');
}

// Function show 'demo-video' overlay
const showVideo = document.querySelector('.try-it__QR-image');
const videoIframe = document.querySelector('.try-it__demo-video');
const closeVideo = document.querySelector('.try-it__video-close-button');

if (showVideo) {
  showVideo.addEventListener('click', function() {
    showVideo.classList.add('try-it__QR-image--close');
    videoIframe.classList.add('try-it__demo-video--show');
    closeVideo.classList.add('try-it__video-close-button--show');
  });
}

if (closeVideo) {
  closeVideo.addEventListener('click', function() {
    showVideo.classList.remove('try-it__QR-image--close');
    videoIframe.classList.remove('try-it__demo-video--show');
    closeVideo.classList.remove('try-it__video-close-button--show');
  });
}

// Open and hide text on Services mobile
const openButtons = document.querySelectorAll('.services-section__text-open-btn');

if (openButtons) {
  openButtons.forEach(child => {
    child.addEventListener('click', function() {
      const parent = child.closest('.services-section__mobile');
      const textMobile = parent.querySelector('.services-section__mobile-text');

      if (textMobile.classList.contains('services-section__mobile-text--close')) {
        textMobile.classList.remove('services-section__mobile-text--close');
        textMobile.classList.add('services-section__mobile-text--open');

        if (document.cookie === 'UA') {
          child.innerHTML = 'Менше';
        } else {
          child.innerHTML = 'Less';
        }
      } else {
        textMobile.classList.remove('services-section__mobile-text--open');
        textMobile.classList.add('services-section__mobile-text--close');

        if (document.cookie === 'UA') {
          child.innerHTML = 'Більше';
        } else {
          child.innerHTML = 'See more';
        }
      }
    });
  });
}

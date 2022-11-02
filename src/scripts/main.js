import { translationArr } from './translate';

// Select language and translate content;

const userLang = navigator.language || navigator.userLanguage;
const slavicLangList = ['UA', 'ua', 'UK', 'uk', 'BY', 'by', 'BE', 'be', 'RU', 'ru'];
const slavicLangcheck = slavicLangList.some(el => userLang.includes(el));

let lang = window.localStorage.getItem('lang');

if (!lang) {
  if (slavicLangcheck) {
    window.localStorage.setItem('lang', 'UA');
  } else {
    window.localStorage.setItem('lang', 'EN');
  }
}

const langSwitchers = document.querySelectorAll('.select-lang');

langSwitchers.forEach(select => {
  for (const child of select.children) {
    child.addEventListener('click', () => changeURLLanguage(child));
  }
});

function changeURLLanguage(child) {
  const newLang = child.innerHTML;

  window.localStorage.setItem('lang', newLang);
  lang = window.localStorage.getItem('lang');

  changeLanguage();
  changeImages();
  translateButtonsMore();
  translatePlaceholders();
  tryItImageChange();
  emailSwitch();
  editDiagram();
}

changeLanguage();

function changeLanguage() {
  // lang = window.localStorage.getItem('lang');

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

translatePlaceholders();

function translatePlaceholders() {
  // lang = window.localStorage.getItem('lang');

  const inputs = document.getElementsByClassName('touch-form__data-field');
  const textAreas = document.getElementsByClassName('touch-form__textarea');

  if (lang === 'EN') {
    for (const input of inputs) {
      if (input.placeholder === 'Ім\'я') {
        input.placeholder = 'Name';
      }

      if (input.placeholder === 'Країна') {
        input.placeholder = 'Country';
      }

      if (input.placeholder === 'Телефон/Email') {
        input.placeholder = 'Phone/Email';
      }

      if (input.placeholder === 'Кількість апаратів') {
        input.placeholder = 'Number of machines';
      }
    }
  }

  if (lang === 'UA') {
    for (const input of inputs) {
      if (input.placeholder === 'Name') {
        input.placeholder = 'Ім\'я';
      }

      if (input.placeholder === 'Country') {
        input.placeholder = 'Країна';
      }

      if (input.placeholder === 'Phone/Email') {
        input.placeholder = 'Телефон/Email';
      }

      if (input.placeholder === 'Number of machines') {
        input.placeholder = 'Кількість апаратів';
      }
    }
  }

  if (lang === 'EN') {
    for (const area of textAreas) {
      area.placeholder = 'Are you interested in something else?';
    }
  }

  if (lang === 'UA') {
    for (const area of textAreas) {
      area.placeholder = 'Можливо вас цікавить ще щось?';
    }
  }
}

translateButtonsMore();

function translateButtonsMore() {
  const moreButtons = document.querySelectorAll('.services-section__text-open-btn');

  // lang = window.localStorage.getItem('lang');

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

// Сhange the image depending on the language
changeImages();

function changeImages() {
  // lang = window.localStorage.getItem('lang');

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

  const superLineMobile = document.querySelectorAll('.main-block__img-mobile');

  superLineMobile.forEach(line => {
    line.classList.remove('main-block__img-mobile--visible');

    if (line.classList.contains(lang)) {
      line.classList.add('main-block__img-mobile--visible');
    }
  });
}

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
const closePopup = document.querySelectorAll('.touch-form__close-cross');

touchButtons.forEach(button => button.addEventListener('click', () => toggleTouchForm(button)));
closePopup.forEach(button => button.addEventListener('click', closeForms));

function closeForms() {
  const forms = document.querySelectorAll('.touch-form');

  forms.forEach(form => {
    if (form.classList.contains('touch-form--active')) {
      form.classList.toggle('touch-form--active');
    }
  });
}

function toggleTouchForm(button) {
  const forms = document.querySelectorAll('.touch-form');
  let buttonNumber;

  button.className.trim().split(' ').map(item => {
    if (item.includes('button__form--')) {
      buttonNumber = item.slice(-1);
    }
  });

  forms.forEach(form => {
    if (form.classList.contains(`touch-form--${buttonNumber}`)) {
      form.classList.toggle('touch-form--active');
    }
  });
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

// Function change image depend on language on 'try-it' overlay
tryItImageChange();

function tryItImageChange() {
  const images = document.querySelectorAll('.try-it__QR-image');
  console.log(images);
  // lang = window.localStorage.getItem('lang');

  images.forEach(image => {
    image.classList.add('try-it__QR-image--close');

    if (image.classList.contains(lang)) {
      image.classList.remove('try-it__QR-image--close');
    }
  });
};

// Function show 'demo-video' overlay
const showVideoButtons = document.querySelectorAll('.try-it__QR-image');
const videoIframe = document.querySelector('.try-it__demo-video');
const closeVideo = document.querySelector('.try-it__video-close-button');

showVideoButtons.forEach(showVideo => {
  if (showVideo) {
    showVideo.addEventListener('click', function() {
      showVideo.classList.add('try-it__QR-image--close');
      videoIframe.classList.add('try-it__demo-video--show');
      closeVideo.classList.add('try-it__video-close-button--show');
    });
  }

  if (closeVideo) {
    closeVideo.addEventListener('click', function() {
      // lang = window.localStorage.getItem('lang');

      if (showVideo.classList.contains(lang)) {
        showVideo.classList.remove('try-it__QR-image--close');
      }
      videoIframe.classList.remove('try-it__demo-video--show');

      const reloadVideo = videoIframe.src;

      videoIframe.src = reloadVideo;
      closeVideo.classList.remove('try-it__video-close-button--show');
    });
  }
});

// Close all videos when close try-it section
const tryItCloseButton = document.querySelector('.try-it__close-cross');
const allVideoItems = document.querySelectorAll('.try-it__video-item');

if (tryItCloseButton) {
  tryItCloseButton.addEventListener('click', function() {
    allVideoItems.forEach(video => {
      const reloadVideo = video.src;

      video.src = reloadVideo;
    });
  });
}

// Open and hide text on Services mobile
const openButtons = document.querySelectorAll('.services-section__text-open-btn');

// lang = window.localStorage.getItem('lang');

if (openButtons) {
  openButtons.forEach(child => {
    child.addEventListener('click', function() {
      const parent = child.closest('.services-section__mobile');
      const textMobile = parent.querySelector('.services-section__mobile-text');

      if (textMobile.classList.contains('services-section__mobile-text--close')) {
        textMobile.classList.remove('services-section__mobile-text--close');
        textMobile.classList.add('services-section__mobile-text--open');

        if (lang === 'UA') {
          child.innerHTML = 'Менше';
        } else {
          child.innerHTML = 'Less';
        }
      } else {
        textMobile.classList.remove('services-section__mobile-text--open');
        textMobile.classList.add('services-section__mobile-text--close');

        if (lang === 'UA') {
          child.innerHTML = 'Більше';
        } else {
          child.innerHTML = 'See more';
        }
      }
    });
  });
}

const openImages = document.querySelectorAll('.services-section__mobile-img');

openImages.forEach(img => {
  img.addEventListener('click', function() {
    const parent = img.closest('.services-section__mobile');
    const textMobile = parent.querySelector('.services-section__mobile-text');

    if (textMobile.classList.contains('services-section__mobile-text--close')) {
      textMobile.classList.remove('services-section__mobile-text--close');
      textMobile.classList.add('services-section__mobile-text--open');
    } else {
      textMobile.classList.remove('services-section__mobile-text--open');
      textMobile.classList.add('services-section__mobile-text--close');
    }
  });
});

// Show and hide 'Partners layout'
const showButton = document.querySelector('.pay-service__button');
const hideButton = document.querySelector('.partners-layout__close-cross');
const partnerSection = document.getElementById('partners-layout');

if (showButton) {
  showButton.addEventListener('click', function() {
    partnerSection.classList.add('partners-layout--show');
  });
};

if (showButton) {
  hideButton.addEventListener('click', function() {
    partnerSection.classList.remove('partners-layout--show');
  });
};

// Switch email depend on language
emailSwitch();

function emailSwitch() {
  const forms = document.querySelectorAll('.touch-form__form');

  // lang = window.localStorage.getItem('lang');

  forms.forEach(el => {
    if (lang === 'EN') {
      el.action = 'https://formsubmit.co/9ac3bb0099f26da215a604d9ba0c10e9';
    } else {
      el.action = 'https://formsubmit.co/51caef3694f7691cae1d35f0ffc5e349';
    }
  });
}

// Change diagram links style depend on language
editDiagram();

function editDiagram() {
  const diagram = document.querySelector('.diagram');
  const cashlessLink = document.querySelector('.diagram__cashless-link');
  const feedbackLink = document.querySelector('.diagram__feedback-link');
  const fiskalkLink = document.querySelector('.diagram__fiscal-link');
  const remoteLink = document.querySelector('.diagram__remote-link');

  if (diagram) {
    if (lang === 'EN') {
      cashlessLink.classList.add('diagram__cashless-link--en');
      feedbackLink.classList.add('diagram__feedback-link--en');
      fiskalkLink.classList.add('diagram__fiscal-link--en');
      remoteLink.classList.add('diagram__remote-link--en');
    } else {
      cashlessLink.classList.remove('diagram__cashless-link--en');
      feedbackLink.classList.remove('diagram__feedback-link--en');
      fiskalkLink.classList.remove('diagram__fiscal-link--en');
      remoteLink.classList.remove('diagram__remote-link--en');
    }
  }
}

// Screen orientation

window.matchMedia('(orientation: portrait)').addEventListener('change', e => {
  const portrait = e.matches;

  if (portrait) {
    console.log('portrait');
  } else {
    console.log('landscape');
  }
});

// window.orientation.lock('portrait');
// this.screen.orientation.lock('portrait');

if (window.innerHeight < window.innerWidth) {
  document.getElementsByTagName('body')[0].style.transform = 'rotate(90deg)';
}

// window.screen.orientation.lock('portrait');

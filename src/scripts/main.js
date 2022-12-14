import { translationArr } from './translate';

// Select language and translate content;

const userLang = navigator.language || navigator.userLanguage;
const slavicLangList = ['UA', 'ua', 'UK', 'uk', 'BY', 'by', 'BE', 'be', 'RU', 'ru'];
const slavicLangcheck = slavicLangList.some(el => userLang.includes(el));

let lang = window.localStorage.getItem('lang');

if (!lang) {
  if (slavicLangcheck) {
    window.localStorage.setItem('lang', 'UA');
    startWithLanguage();
  } else {
    window.localStorage.setItem('lang', 'EN');
    startWithLanguage();
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

// Changing the language at the first entry
function startWithLanguage() {
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
  const inputs = document.getElementsByClassName('touch-form__data-field');
  const textAreas = document.getElementsByClassName('touch-form__textarea');

  if (lang === 'EN') {
    for (const input of inputs) {
      if (input.placeholder === '????\'??') {
        input.placeholder = 'Name';
      }

      if (input.placeholder === '????????????') {
        input.placeholder = 'Country';
      }

      if (input.placeholder === '??????????????/Email') {
        input.placeholder = 'Phone/Email';
      }

      if (input.placeholder === '?????????????????? ????????????????') {
        input.placeholder = 'Quantity of machines';
      }
    }
  }

  if (lang === 'UA') {
    for (const input of inputs) {
      if (input.placeholder === 'Name') {
        input.placeholder = '????\'??';
      }

      if (input.placeholder === 'Country') {
        input.placeholder = '????????????';
      }

      if (input.placeholder === 'Phone/Email') {
        input.placeholder = '??????????????/Email';
      }

      if (input.placeholder === 'Number of machines') {
        input.placeholder = '?????????????????? ????????????????';
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
      area.placeholder = '?????????????? ?????? ???????????????? ???? ?????????';
    }
  }
}

translateButtonsMore();

function translateButtonsMore() {
  const moreButtons = document.querySelectorAll('.services-section__text-open-btn');

  moreButtons.forEach(button => {
    if (lang === 'EN') {
      if (button.innerHTML === '????????????') {
        button.innerHTML = 'See more';
      }

      if (button.innerHTML === '??????????') {
        button.innerHTML = 'Less';
      }
    } else {
      if (button.innerHTML === 'See more') {
        button.innerHTML = '????????????';
      }

      if (button.innerHTML === 'Less') {
        button.innerHTML = '??????????';
      }
    }
  });
}

// ??hange the image depending on the language
changeImages();

function changeImages() {
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
  const buttonOffset = getOffset(button).top;

  button.className.trim().split(' ').map(item => {
    if (item.includes('button__form--')) {
      buttonNumber = item.slice(-1);
    }
  });

  forms.forEach(form => {
    if (form.classList.contains(`touch-form--${buttonNumber}`)) {
      form.classList.toggle('touch-form--active');

      if (buttonNumber === '2') {
        form.style.top = `${buttonOffset - 50}px`;
      }
    }
  });

  function getOffset(el) {
    const rect = el.getBoundingClientRect();

    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
    };
  }
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

if (openButtons) {
  openButtons.forEach(child => {
    child.addEventListener('click', function() {
      const parent = child.closest('.services-section__mobile');
      const textMobile = parent.querySelector('.services-section__mobile-text');

      if (textMobile.classList.contains('services-section__mobile-text--close')) {
        textMobile.classList.remove('services-section__mobile-text--close');
        textMobile.classList.add('services-section__mobile-text--open');

        if (lang === 'UA') {
          child.innerHTML = '??????????';
        } else {
          child.innerHTML = 'Less';
        }
      } else {
        textMobile.classList.remove('services-section__mobile-text--open');
        textMobile.classList.add('services-section__mobile-text--close');

        if (lang === 'UA') {
          child.innerHTML = '????????????';
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
// Page scale decrease on mobile

toggleZoomScreen();
window.addEventListener('resize', toggleZoomScreen);

function toggleZoomScreen() {
  const headerMobile = document.getElementsByClassName('header-mobile')[0];
  const headerMobileContent = document.getElementsByClassName('header-mobile__content')[0];

  if (window.innerWidth < 430) {
    document.body.style.zoom = '80%';
    headerMobile.style.height = '120vh';
    headerMobileContent.style.zoom = '130%';
  } else {
    document.body.style.zoom = '100%';
    headerMobile.style.height = '100vh';
    headerMobileContent.style.zoom = '100%';
  }
};

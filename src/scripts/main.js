'use strict';
import { translationArr } from './translate';

// Select language and translate content;

const allLang = ['UA', 'EN'];
const select = document.getElementById('select-lang');
const langSwitchers = document.querySelectorAll('.select-lang');

langSwitchers.forEach(select => {
  for (const child of select.children) {
    child.addEventListener('click', () => changeURLLanguage(child));
  }
})

function changeURLLanguage(child) {
  const lang = child.innerHTML;
  let prevHash = window.location.hash.substring(1);
  window.location.href = window.location.pathname + '#' + lang;
  // window.location.reload();
  changeLanguage(prevHash);
  changeImages()
}

function changeImages() {
  let hash = window.location.hash;
  hash = hash.substring(1);

  if (hash === '' || hash === undefined) {
    hash = 'UA';
  }

  let imageWhyProsto = document.querySelectorAll('._lang__img');

  imageWhyProsto.forEach(item => {
    item.classList.remove('_lang__img--visible');

    if (window.innerWidth >= 768)  {
      if(item.classList.contains(hash) && item.classList.contains('wide-screen')) {
        item.classList.add('_lang__img--visible');
      }
    } else {
      if(item.classList.contains(hash) && item.classList.contains('mobile')) {
        item.classList.add('_lang__img--visible');
      }
    }
  })
}

changeImages();
window.addEventListener('resize', changeImages);

function changeLanguage(prevHash) {
  let hash = window.location.hash;

  hash = hash.substring(1);

  if (!allLang.includes(hash.toLocaleUpperCase())) {
    window.location.href = window.location.pathname + '#UA';
    window.location.reload();
  }

  const currentLang = document.querySelectorAll('.current-lang');
  currentLang.forEach(item => item.innerHTML = hash)



  // console.log(visibleImage);
  // const link = document.getElementById('services');
  // console.log(link);

  // link.href = link.href + '#' + hash;
  // console.log(link.href);


  for (const key in translationArr) {
    let element = document.querySelectorAll('._lang__' + key);

    if(element) {
      element.forEach(item => {
        if(translationArr[key][hash] !== undefined) {
          item.innerHTML = translationArr[key][hash];
        } else if (hash !== prevHash) {
          item.innerHTML = translationArr[key][prevHash];
        }
      })
    }
  }
}

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

// Hide header menu on scroll down, show on scroll up

let lastScrollTop = 0;
const menu = document.getElementById('menu');
window.addEventListener('scroll', function() {
let scrollTop = window.pageYOffset  || document.documentElement.scrollTop;

let menustyle = this.getComputedStyle(menu);
let height = menustyle.height;
menu.style.position = 'absolute';
menu.style.top = '-400px';

  if (scrollTop > lastScrollTop) {
    menu.style.top = '-' + height;

  } else {
    menu.style.top = "0";
    menu.style.zIndex = '1';
    if (scrollTop < 500) {
      menu.style.top = '-400px';
      menu.style.position = 'absolute';
      menu.style.zIndex = '-4';
    } else {
      menu.style.position = 'sticky';
    }
  }

  lastScrollTop = scrollTop;
});


// Menu hide
const menuIcon = document.getElementById('dropdownOpen')
const dropdownMenu = document.getElementById('dropdownMenu')

menuIcon.addEventListener('click', function() {

  if (!dropdownMenu.classList.contains('dropdown__animation')) {
    dropdownMenu.classList.add('dropdown__animation')
  } else {
    dropdownMenu.classList.remove('dropdown__animation')
  }

  // window.addEventListener('scroll', function() {
  //   dropdownMenu.classList.remove('dropdown__animation')
  // })
})


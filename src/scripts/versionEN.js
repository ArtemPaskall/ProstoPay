const langSwitchers = document.querySelectorAll('.select-lang');
let lang;

langSwitchers.forEach(select => {
  for (const child of select.children) {
    child.addEventListener('click', function() {
      versionEN();
    });
  }
});

function versionEN() {
  const parentDiv = document.querySelector('.about__text');
  const benefitBlock = document.querySelector('.main-block__benefit');
  const aboutBlock = document.querySelector('.page__section--about');
  const contactsBlock = document.querySelector('.page__section--contacts');

  lang = window.localStorage.getItem('lang');

  if (lang === 'EN') {
    for (const p of parentDiv.children) {
      p.classList.add('about__text-p');
    }
    benefitBlock.classList.add('main-block__benefit--EN');
    aboutBlock.classList.add('page__section--about-EN');
    contactsBlock.classList.add('page__section--contacts-EN');
  } else {
    for (const p of parentDiv.children) {
      p.classList.remove('about__text-p');
    }
    benefitBlock.classList.remove('main-block__benefit--EN');
    aboutBlock.classList.remove('page__section--about-EN');
    contactsBlock.classList.remove('page__section--contacts-EN');
  }
}

versionEN();

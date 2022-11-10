// Style changes for Redmi Note 9
const langSwitchers = document.querySelectorAll('.select-lang');

langSwitchers.forEach(select => {
  for (const child of select.children) {
    child.addEventListener('click', redmiStyleChange);
  }
});

function redmiStyleChange() {
  const deviceAgent = navigator.userAgent;
  const aboutText = document.getElementsByClassName('about__text')[0];
  const aboutSection = document.getElementsByClassName('page__section--about')[0];
  const lang = window.localStorage.getItem('lang');

  if (deviceAgent.includes('M2003J15SC')) {
    aboutText.style.maxWidth = '350px';
    aboutText.style.right = '27px';

    if (lang === 'EN') {
      aboutSection.style.marginTop = '300px';
    }
  }
}

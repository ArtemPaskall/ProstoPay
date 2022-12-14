// Hide header menu on scroll down, show on scroll up
let lastScrollTop = 0;
const menu = document.getElementById('menu');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  const menustyle = this.getComputedStyle(menu);
  const height = menustyle.height;

  if (scrollTop > lastScrollTop) {
    const touchForm2 = document.getElementById('touch-form-2');

    if (touchForm2.classList.contains('touch-form--active')) {
      menu.style.position = 'sticky';
    } else {
      menu.style.top = '-' + height;
    }
    menu.style.top = '-' + modifyHeight(height);
    menu.style.boxShadow = 'none';
    menu.style.marginTop = '-1px';
  } else {
    menu.style.top = '-2px';
    menu.style.zIndex = '2';
    menu.style.position = 'sticky';
    menu.style.boxShadow = '0 4px 4px rgba(0, 0, 0, 0.25)';

    if (scrollTop < 200) {
      menu.style.top = '-400px';
      menu.style.position = 'absolute';
      menu.style.zIndex = '-4';
    } else {
      menu.style.position = 'sticky';
    }
  }

  lastScrollTop = scrollTop;

  function modifyHeight(h) {
    const newHeight = +(h.slice(0, -2)) + 1;

    return `${newHeight}px`;
  }
});

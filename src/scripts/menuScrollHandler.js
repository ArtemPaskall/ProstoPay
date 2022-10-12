// Hide header menu on scroll down, show on scroll up

let lastScrollTop = 0;
const menu = document.getElementById('menu');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  const menustyle = this.getComputedStyle(menu);
  const height = menustyle.height;

  menu.style.position = 'absolute';
  menu.style.top = '-400px';

  if (scrollTop > lastScrollTop) {
    menu.style.top = '-' + height;
  } else {
    menu.style.top = '0';
    menu.style.zIndex = '1';

    if (scrollTop < 200) {
      menu.style.top = '-400px';
      menu.style.position = 'absolute';
      menu.style.zIndex = '-4';
    } else {
      menu.style.position = 'sticky';
    }
  }

  lastScrollTop = scrollTop;
});

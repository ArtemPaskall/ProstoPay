// Hide header menu on scroll down, show on scroll up

let lastScrollTop = 0;
const menu = document.getElementById('menu');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  const menustyle = this.getComputedStyle(menu);
  const height = menustyle.height;

  if (scrollTop > lastScrollTop) {
    menu.style.top = '-' + modifyHeight(height);
    menu.style.boxShadow = 'none';
  } else {
    menu.style.top = '-1px';
    menu.style.zIndex = '2';
    menu.style.position = 'sticky';
    menu.style.boxShadow = '0 4px 4px rgba(0, 0, 0, 0.25)';
  }

  lastScrollTop = scrollTop;

  function modifyHeight(h) {
    const newHeight = +(h.slice(0, -2)) + 1;

    return `${newHeight}px`;
  }
});

const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toogle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navToggle.classList.remove('main-nav__toogle--closed');
  } else {
    navMain.classList.add('main-nav--closed');
    navToggle.classList.add('main-nav__toogle--closed');
  }
});

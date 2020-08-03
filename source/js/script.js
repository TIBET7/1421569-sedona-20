let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toogle');

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

/*if (document.querySelector('review-main')) {
  let sendFormButton = document.querySelector('button--form');
  let form = document.querySelector('form');
  let popupFailure = document.querySelector('modal--failure');
  let popupSuccess = document.querySelector('modal--success');

  form.addEventListener('submit', (event) => {
    if(!username.value || !user-surname.value || !user-phone.value || !user-email.value) {
      event.preventDefault();
      popupFailure.classList.add()

    }
  })
}*/

if (document.querySelector('review-main')) {
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
}


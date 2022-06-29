const menuButton = document.querySelector('.content__menu-button');
const menuPopup = document.querySelector('.menu-popup');
const addTextButton = menuPopup.querySelector('#title');

menuButton.addEventListener('click', openMenuPopup);

addTextButton.addEventListener('click', createTitle)

function openMenuPopup() {
  menuPopup.classList.add('menu-popup_active');
}

function createTitle() {
  menuPopup.insertAdjacentHTML('beforebegin', '<p>Title</p>');
  menuPopup.classList.remove('menu-popup_active');
}

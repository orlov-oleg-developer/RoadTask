// VARIABLES

const selectors = {
  create: '.create',
  menuButton: '.create__menu-button',
  menuPopup: '.menu-popup',
  buttonAddLargeTitle: '#large-title',
  buttonAddText: '#text',
  buttonAddImage: '#image',

  largeTitleTemplate: '#large-title-template',
  textTemplate: '#text-template',
  addImageTemplate: '#add-image-template',
  imageTemplate: '#image-template',

  form: '.content__form',
  trash: '.content__trash',
  largeTitle: '.content__large-title',
  text: '.content__text',
  file: '.content__file',
  image: '.content__image',
}

const elementCreate = document.querySelector(selectors.create);
const menuButton = elementCreate.querySelector(selectors.menuButton);
const menuPopup = elementCreate.querySelector(selectors.menuPopup);

const buttonAddLargeTitle = menuPopup.querySelector(selectors.buttonAddLargeTitle)
const buttonAddText = menuPopup.querySelector(selectors.buttonAddText);
const buttonAddImage = menuPopup.querySelector(selectors.buttonAddImage);

const formAddElement = document.querySelector(selectors.form);

// FUNCTIONS

function openPopup() {
  menuPopup.classList.add('menu-popup_active');
}

function createElement(templateSelector) {
  const template = document.querySelector(templateSelector).content;
  const element = template.querySelector(selectors.form).cloneNode(true);

  element.addEventListener('keydown', (event) => {
    if(event.key === 'Enter' || event.keyCode === 13) event.preventDefault();
  });
  element.querySelector(selectors.trash).addEventListener('click', () => {element.remove(); });
  return element;
}

function addElement(node, elementSelector) {
  const element = createElement(elementSelector);
  node.before(element);
}

function createAddImageElement() {
  const imagePlace = createElement(selectors.addImageTemplate);

  imagePlace.querySelector(selectors.file).addEventListener('change', function() {
    if (!this.files) return;
    if (!this.files[0]) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      const image = createElement(selectors.imageTemplate);
      image.querySelector('.content__image').setAttribute('src', e.target.result);
      elementCreate.before(image);
    };
    reader.readAsDataURL(this.files[0]);

    imagePlace.remove();
  });
  return imagePlace;
}

function addAddImageElement(node) {
  const imageElement = createAddImageElement();
  node.before(imageElement);
}

// MAIN LOGIC

menuButton.addEventListener('click', openPopup);

buttonAddLargeTitle.addEventListener('click', function() {
  addElement(elementCreate, selectors.largeTitleTemplate);
})

buttonAddText.addEventListener('click', function() {
  addElement(elementCreate, selectors.textTemplate);
})

buttonAddImage.addEventListener('click', function() {
  addAddImageElement(elementCreate);
})





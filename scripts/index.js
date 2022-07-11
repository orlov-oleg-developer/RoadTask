// VARIABLES

const selectors = {
  create: '.create',
  menuButton: '.create__menu-button',
  menuPopup: '.menu-popup',
  buttonAddLargeTitle: '#large-title',
  buttonAddText: '#text',

  largeTitleTemplate: '#large-title-template',
  textTemplate: '#text-template',

  form: '.content__form',
  trash: '.content__trash',
}

const elementCreate = document.querySelector(selectors.create);
const menuButton = elementCreate.querySelector(selectors.menuButton);
const menuPopup = elementCreate.querySelector(selectors.menuPopup);
const buttonAddLargeTitle = menuPopup.querySelector(selectors.buttonAddLargeTitle)
const buttonAddText = menuPopup.querySelector(selectors.buttonAddText);

const formAddElement = document.querySelector(selectors.form);

// FUNCTIONS

function openPopup() {
  menuPopup.classList.add('menu-popup_active');
}

function createLargeTitle() {
  const titleTemplate = document.querySelector(selectors.largeTitleTemplate).content;
  const titleElement = titleTemplate.querySelector(selectors.form).cloneNode(true);

  titleElement.querySelector(selectors.trash).addEventListener('click', () => {titleElement.remove(); });
  return titleElement;
}

function createText() {
  const textTemplate = document.querySelector(selectors.textTemplate).content;
  const textElement = textTemplate.querySelector(selectors.form).cloneNode(true);

  textElement.querySelector(selectors.trash).addEventListener('click', () => {textElement.remove(); });
  return textElement;
}

function addLargeTitle(node) {
  const largeTitle = createLargeTitle();
  node.before(largeTitle);
}

function addText(node) {
  const textElement = createText();
  node.before(textElement);
}

// MAIN LOGIC

menuButton.addEventListener('click', openPopup);

buttonAddLargeTitle.addEventListener('click', function() {
  addLargeTitle(elementCreate);
})

buttonAddText.addEventListener('click', function() {
  addText(elementCreate);
})





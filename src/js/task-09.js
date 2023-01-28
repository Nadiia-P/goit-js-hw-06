function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorRefs = {
  button: document.querySelector('.change-color'),
  span: document.querySelector('.color'),
  body: document.querySelector('body'),
}

changeColorRefs.button.addEventListener('click', changeColor)

function changeColor () {
  changeColorRefs.body.style.backgroundColor = getRandomHexColor();
  changeColorRefs.span.textContent = getRandomHexColor();
}
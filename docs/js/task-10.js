function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const refs = {
  container: document.querySelector('#boxes'),
  createBtn: document.querySelector('#controls [data-create]'),
  destroyBtn: document.querySelector('#controls [data-destroy]'),
  amountInpt: document.querySelector('#controls input'),
};

function createBoxes(amount) {
  let HTMLElements = '';
  for (let i = 0; i < amount; i++) {
    HTMLElements += `<div style = "display: inline-block; background-color: ${getRandomHexColor()}; width: ${
      30 + i * 10
    }px; height: ${30 + i * 10}px; margin: 5px; border-radius: 50%"></div>`;
  }
  refs.container.innerHTML =
    `<p style = "font-size: 30px; font-weight: 900;">\n${refs.amountInpt.value} beautifully colored circles created🙃</p>` +
    HTMLElements;
}

refs.createBtn.addEventListener('click', () => {
  if (+refs.amountInpt.value >= 1 && +refs.amountInpt.value <= 100) {
    createBoxes(+refs.amountInpt.value);
    refs.amountInpt.setAttribute('disabled', true);
    refs.createBtn.setAttribute('disabled', true);
  } else alert(`Put the number from 1 to 100`);

  refs.amountInpt.value = '';
});

refs.destroyBtn.addEventListener('click', () => {
  if (refs.container.childElementCount > 1) {
    refs.container.innerHTML = `<p style = "font-size: 30px; font-weight: 900;">Circles destroyed. Try again😎</p>`;
    refs.amountInpt.toggleAttribute('disabled');
    refs.createBtn.toggleAttribute('disabled');
  } else alert(`Nothing to destroy!\nCreate some circles🧐`);
});

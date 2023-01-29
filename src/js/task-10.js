function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const refs = {
  container: document.querySelector('#boxes'),
  createBtn: document.querySelector('#controls [data-create]'),
  destroyBtn: document.querySelector('#controls [data-destroy]'),
  amountInpt: document.querySelector('#controls input'),
}

function createBoxes(amount) {
  if (refs.amountInpt.value !== '') {
    let HTMLElements = "";
    for (let i = 0; i < amount; i++ ) {
    HTMLElements += `<div style = "display: inline-block; background-color: ${getRandomHexColor()}; width: ${30 + i * 10}px; height: ${30 + i * 10}px; margin: 5px; border-radius: 50%"></div>`;
    }
  refs.container.innerHTML = HTMLElements;
  console.clear();
  console.log(`\n${refs.amountInpt.value} beautifly colored circles created🙃`)
  }  
}

refs.createBtn.addEventListener('click', () => {
  createBoxes(+refs.amountInpt.value); 
  if (refs.amountInpt.value !== '') {
      refs.amountInpt.toggleAttribute('disabled');
      refs.destroyBtn.toggleAttribute('disabled'); 
  }
  refs.amountInpt.value = ''; 
});


refs.destroyBtn.addEventListener('click', () => {
  refs.amountInpt.toggleAttribute('disabled');
  refs.destroyBtn.toggleAttribute('disabled');
  refs.container.innerHTML = ''; 
  console.clear();
  console.log(`\nCircles destroyed😮\nTry again`)
})



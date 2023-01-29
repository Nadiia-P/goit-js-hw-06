function getRandomHexColor() {
  // return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const arrayOfColorFunctions = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
  let randomColorString = '#';
  for (let i = 0; i < 6; i++){
    let index = Math.floor(Math.random() * 16)
    let value = arrayOfColorFunctions[index]
    randomColorString += value;
  }
  return randomColorString
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
  }  
}

refs.createBtn.addEventListener('click', () => {
  createBoxes(+refs.amountInpt.value);
  refs.amountInpt.value = null; 
});


refs.destroyBtn.addEventListener('click', () => {
  refs.container.innerHTML = null; 
})


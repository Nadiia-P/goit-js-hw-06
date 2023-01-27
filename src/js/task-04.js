const counterContainer = document.querySelector('#value');
const incrButton = document.querySelector('[data-action="increment"]');
const decrButton = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

incrButton.addEventListener('click', () => {
counterValue += 1;
counterContainer.textContent = counterValue;
})

decrButton.addEventListener('click', () => {
counterValue -= 1;
counterContainer.textContent = counterValue;
})


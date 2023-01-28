const counterContainer = document.querySelector('#value');
const incrButton = document.querySelector('[data-action="increment"]');
const decrButton = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

incrButton.addEventListener('click', increaseValue);
decrButton.addEventListener('click', decreaseValue);

function increaseValue() {
    counterValue += 1;
    counterContainer.textContent = counterValue + 1;
}
function decreaseValue() {
    counterValue -= 1;
    counterContainer.textContent = counterValue;
}
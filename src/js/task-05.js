
const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
}

refs.nameInput.addEventListener('input', addName);

function addName(event) {
    refs.nameOutput.textContent = event.currentTarget.value || "Anonymous";
}
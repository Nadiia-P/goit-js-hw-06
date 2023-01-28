const refs = {
    inputRange: document.querySelector('#font-size-control'),
    textSpan: document.querySelector('#text'),
}

refs.inputRange.addEventListener('input', changeFontSize);

function changeFontSize (event) {
    refs.textSpan.style.fontSize = `${event.currentTarget.value}px`;
}
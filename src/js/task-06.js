
const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", checkLength);

function checkLength() {     
    textInput.classList.add("invalid"); 
    if (textInput.value.length === +textInput.dataset.length) {
        textInput.classList.replace("invalid", 'valid' );   
    }    
}
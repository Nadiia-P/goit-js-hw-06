
const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {     
    textInput.classList.add("invalid"); 
    if (textInput.value.length === +textInput.dataset.length) {
        textInput.classList.replace("invalid", 'valid' );   
    }    
});
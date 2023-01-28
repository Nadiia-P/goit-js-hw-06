const form = document.querySelector('.login-form');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    
    const {elements: {email, password}} = event.currentTarget;

    if(email.value === '' || password.value === '') {
        alert('Please, fill in all the form fields!'); 
        event.currentTarget.reset(); 
        return  
    }

    let userData = {};
   
    userData.email = email.value; 
    userData.password = password.value;
    event.currentTarget.reset(); 
}
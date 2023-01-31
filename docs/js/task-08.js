const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    event.currentTarget.reset();
    alert('Please, fill in all the form fields!');
    return;
  }

  let userData = {};

  userData.email = email.value;
  userData.password = password.value;
  console.log('User data:', userData);
  event.currentTarget.reset();
}

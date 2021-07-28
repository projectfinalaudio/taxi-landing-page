const log = console.log;

const submitButton = document.querySelector('.submit');
const formContainer = document.querySelector('.form_container');
const username = document.getElementsByTagName('username');
const container = document.querySelector('.container');

// log(username);





submitButton.addEventListener('click', submitForm);

function submitForm(e)
{

    username.value = '';

    alert('Enjoy your FREE Trial'+ username.value + '!');

    formContainer.style.display = 'none';
    container.innerText = "Enjoy Your Free Trial...Please refresh the Page in order to continue...";


    container.style.fontSize = '38px';




    e.preventDefault();
}
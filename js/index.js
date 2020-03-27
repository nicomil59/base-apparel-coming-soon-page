// console.log('ok');

const submit = document.querySelector('form label input');
const input = document.querySelector('form input');
const errorIcon = document.querySelector('.error-icon');
const errorMessage = document.querySelector('.error-message');
console.dir(errorIcon);
console.dir(errorMessage);

submit.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(input.value);
    if (emailIsValid(input.value)) {
        console.log('adresse ok');
        errorIcon.style.display = 'none';
        errorMessage.style.display = 'none';
    } else {
        console.log('adresse errur');
        errorIcon.style.display = 'block';
        errorMessage.style.display = 'block';
    };
})

function emailIsValid (email) {
    return /\S+@\S+\.\S+/.test(email)
}
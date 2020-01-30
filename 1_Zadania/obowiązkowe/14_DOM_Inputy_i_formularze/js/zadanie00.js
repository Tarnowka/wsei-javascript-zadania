  
var DOM_checkButton = document.querySelector(".btn-primary");
DOM_checkButton.addEventListener("submit", formValidate);
function formValidate(){
    let email = document.getElementById("email");
    let name = document.getElementById("name");
    let surname = document.getElementById("surname");
    let pass1 = document.getElementById("pass1");
    let pass2 = document.getElementById("pass2");
    let checkbox = document.querySelector('#agree');
    let error = document.querySelector('.error-message');
        if (!email.value.includes('@')) {
            error.innerHTML = "Email musi posiadać znak @"
            event.preventDefault()
        }
    
        if (name.value.length < 6) {
            error.innerHTML = "Twoje imię jest za krótkie"
            event.preventDefault()
        }
    
        if (surname.value.length < 6) {
            error.innerHTML = "Twoje nazwisko jest za krótkie"
            event.preventDefault()
        }
    
        if (!(pass1.value && pass2.value === pass2.value)) {
            error.innerHTML = "Hasła nie są takie same lub puste"
            event.preventDefault()
        }
    
        if (!checkbox.checked) {
            error.innerHTML = "Musisz zaakceptować warunki"
            event.preventDefault()
        }
}
document.addEventListener("DOMContentLoaded", function () {

    const menu = document.querySelector('.menu');
    const button = document.querySelector('.button');

    button.addEventListener('click', function(){
        let counter = menu.children.length;
        let x = document.createElement('li');
        x.innerHTML = "dodane elementy " + counter;
        menu.appendChild(x);
    })

});
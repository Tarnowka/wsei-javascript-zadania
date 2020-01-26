document.addEventListener("DOMContentLoaded", function () {

    const button = Array.from( document.getElementsByClassName('deleteBtn'));

    button.forEach(b => b.addEventListener('click', function(){
        const trSelector = this.parentElement.parentElement;
        trSelector.remove();
    }));

});
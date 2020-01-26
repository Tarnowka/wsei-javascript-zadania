document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector('.form-control');
    const img = document.querySelector('img');
    const btn = document.querySelector('.btn');
    
    const windows = document.querySelector('[alt="Windows"]');
    const apple = document.querySelector('[alt="Apple"]');
    const ubuntu = document.querySelector('[alt="Ubuntu"]');
    
    btn.addEventListener('click', function(event){
        event.preventDefault();
        switch(form.value){
            case "Windows": windows.style.display = "block";
                            apple.style.display = "none";
                            ubuntu.style.display = "none";
                            break;
            case "Os X":    windows.style.display = "none";
                            apple.style.display = "block";
                            ubuntu.style.display = "none";
                            break;
            case "Ubuntu": windows.style.display = "none";
                            apple.style.display = "none";
                            ubuntu.style.display = "block";
                            break;
        }
    })
    
    });
document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

    ///zad0

    var foo = document.querySelector(".title");
    function getDataAnimation(element){
        let x = element.dataset.animation;
        return x;
    }
    getDataAnimation(foo);

    ///zad1

    var DOM_home = document.getElementById("home");
    console.log(DOM_home);
    var DOM_anotherHome = document.querySelector("#home");
    console.log(DOM_anotherHome);
    var DOM_dataDirection = document.querySelector("[data-direction]");
    console.log(DOM_dataDirection);
    var DOM_block = document.querySelector(".block");
    console.log(DOM_block);

    ///zad2

    var DOM_listInNav = document.querySelectorAll("nav li");
    console.log(DOM_listInNav);
    console.log("Quantity: " + DOM_listInNav.length);
    var DOM_paragraphsInDiv = document.querySelectorAll("div p");
    console.log(DOM_paragraphsInDiv);
    console.log("Quantity: " + DOM_paragraphsInDiv.length);
    var DOM_divsInArticle = document.querySelectorAll("article div");
    console.log(DOM_divsInArticle);
    console.log("Quantity: " + DOM_divsInArticle.length);

    ///zad3
    
    var DOM_firstArticle = document.getElementsByClassName("first");
    console.log(DOM_firstArticle);
    console.log("Quantity of articles with class first: " + DOM_firstArticle.length);
    var DOM_headersInFirstArticle = document.querySelectorAll("article.first h1");
    console.log("Quantity of h1 headers in first article: " + DOM_headersInFirstArticle.length);

});

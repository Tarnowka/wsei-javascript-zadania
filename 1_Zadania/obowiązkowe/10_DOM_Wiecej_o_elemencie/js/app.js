document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    const listEls = document.querySelectorAll(".ex5 ul li");

    for (let i = 0; i < listEls.length; i++) {
        
        if (i%2==0) {
            listEls[i].style.backgroundColor = 'green';
        }
        

    }

    ////////////2

    document.getElementById("name").innerHTML = "Mateusz";
    ////////////3

    ////////////4

    let list = document.querySelectorAll(".ex4 ul li");
    for (let i = 0; i < list.length; i++) {
        list[i].dataset.id = i+1;
        
    }


    //////////////9.0


    function getDatasInfo(links) {
        var retArray = [];
        for(let i =0; i<links.length; i++){
            retArray.push(links[i].getAttribute("data-color"));
        }
        return retArray;
    }

    console.log(getDatasInfo(document.querySelectorAll(".ex5 ul li")));

    ///////////////9.3

    var element = document.getElementById("mainFooter");
    function getid(element) {

        return element.getAttribute("id");
        
    }

    console.log(getid(element));

    //////////////

    //////////////9.5

    

    function getClassInfo(element) {
        let classes = [];
        for(let i=0; i<element.length; i++){
            classes.push(element[i].classList);
        }
        return classes;
    }
    var element = document.getElementsByClassName("banner");
    console.log(getClassInfo(element));

    //////////////9.6

    
    function setDataDirection(elements) {

        for (let i = 0; i < elements.length; i++) {
            console.log(elements[i].dataset.direction);
            if(!elements[i].dataset.direction !== "top")
            elements[i].dataset.direction = "top"; 
        }
    }
    const el = document.getElementsByTagName("nav ul li");
    setDataDirection(el);
});
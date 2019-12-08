/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//Twoj komentarz ...
//pierwsza funkcja
function jeden() {

    //Twoj komentarz ...
    //pierwsza zmienna
    var zmienna1 = 1;

    //Twoj komentarz ...
    //druga funkcja w pierwaszej funkcji
    function dwa() {

        //Twoj komentarz ...
        //wyświetlenie pierwszej zmiennej
        console.log(zmienna1);

        //Twoj komentarz ...
        //druga zmienna w drugiej funkcji
        var zmienna2 = 3;
    }

    //Twoj komentarz ...
    //wywołanie drugiej funkcji
    dwa();

    //Twoj komentarz ...
    //wyświetlenie drugiej zmiennej, lecz nie wyświetli dlatego że, zmienna2 jest w drugiej funkcji 
    console.log(zmienna2)
}

//Twoj komentarz ...
//wywołanie pierwszej funkcji
jeden()
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//Definicja funkcji jeden
function jeden() {

    //Definicja zmiennej zmienna1
    var zmienna1 = 1;

    //Funkcja dwa
    function dwa() {

        //Wywołanie wartości przypisanej do zmiennej zmienna1
        console.log(zmienna1);

        //definicja i przypisanie wartosci do kolejnej zmiennej
        var zmienna2 = 3;
    }

    //wywołanie funkcji dwa
    dwa();

    //Wywołanie wartości przypisanej do zmiennej zmienna2, zwróci Uncaught Reference Error, ponieważ zmienna ta została zdefioniowana wewn atrz funkcji dwa i nie jest dostępna poza nią 
    console.log(zmienna2)
}

//Wywołanie funkcji jeden
jeden()
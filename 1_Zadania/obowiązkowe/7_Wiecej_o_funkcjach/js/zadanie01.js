
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//Twoj komentarz ...
//funkcja sortArray
function sortArray() {

    //Twoj komentarz ...
    //tablica points
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Twoj komentarz ...
    //funkcja sortująca tablicę
    points.sort(function (a, b) {
        //Twoj komentarz ...
        //zwraca mniejszy element tablicy
        return a - b;
    });

    //Twoj komentarz ...
    //zwraca element tablicy
    return points;
}

//Twoj komentarz ...
//wywołujemy funkcję sortArray
sortArray();

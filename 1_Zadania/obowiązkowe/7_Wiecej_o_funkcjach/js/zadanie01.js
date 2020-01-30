
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//Definicja funkcji sortArray
function sortArray() {

    //Definicja nowej zmiennej typu tablicowego i przypisanie do niej wartości
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Wywołanie metody sortującej elementy tablicy 'sort' z opcjonalnym argumentem w postaci funkcji
    points.sort(function (a, b) {
        //Metoda zwraca ujemną, zerową lub dodatnią wartość odejmowania sąsiednich argumentów, a później, na podstawie zwróconych wartości sortuje tablicę
        return a - b;
    });

    //Zwrócenie posortowanej tablicy points
    return points;
}

//Wywołanie funkcji sortArray
sortArray();

Hello();
function Hello(){
    console.log("Cześć");
}
Hello();

x();
var x = function Hi(){
    console.log("Witaj");
}
x(); 
//W przypadku wyrażenia funkcyjnego, miejsce wywołania wyrażenia ma znaczenie, ponieważ gdy wywołanie jest przeprowadzone przed definicją wyrażenia, to wtedy otrzymamy TypeError: x is not a function
//Taki efekt jest powodem tego, że funkcje są przetwarzane w pierwszym przebiegu parsera, a wyrażenia funkcyjne w drugim przebiegu
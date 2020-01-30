//zad1

book = {title:"tyt",autor:"aut",numberOfPages:"number"};

console.log(book.title);
console.log(book.autor);
console.log(book.numberOfPages);

//zad2

person = {name:"aut",age:23,sayHello(){console.log("hello")}};

console.log(person.name);
console.log(person.age);
console.log(person.sayHello());

//zad3

przepis = {title:"tyt",serving:2,ingredients:[]}

przepis.ingredients[0] = 567

console.log(przepis.title);
console.log(przepis.serving);
console.log(przepis.ingredients);

//zad6

var spoon = {isExist: true}
var fork = spoon;
fork.isExist  = false;
console.log(spoon.isExist);
//łyżka nie istnieje
  
//zad0

function distFromAvarage(numberArray){
    var avarage=0;
    numberArray.forEach(element => {
        avarage+=element;
    });

    avarage=avarage/numberArray.length;
    console.log(avarage);
    var returnArray=[];
    numberArray.forEach(element => {
        returnArray.push(element-avarage);
    });

    console.log(returnArray);
    return returnArray;
}

distFromAvarage([1,2,3,4,5,6,7]);

//zad1

let fruits = ['apple', 'orange', 'banana', 'peach', 'pear'];
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);
for(let count=0;count<fruits.length;count++){
    console.log(fruits[count]);
}

//zad3

function printTable(array){

    for(let i=0; i< array.length;i++ ){
        console.log(array[i]);
    }
}
//zad4

function multiply(array){
    var temp = 1;
    for(let i=0; i<array.length; i++){
        temp*=array[i]
    }
    console.log(temp);
}

//zad5

function getEvenAvarage(array){
    var arg=0;
    var licz=0;

    array.forEach(element=>{
        if(element%2==0){
            arg+=element;
            licz++
        }
    })
    
    if(arg==0){
        console.log("null");
    }
    else{
        console.log(arg/licz);
    }
}

getEvenAvarage([1,2,3,4,5,6,7]);
getEvenAvarage([1,1,1,1])
getEvenAvarage([2,8,3,7,4])

//zad6

function sortArray(array){
    for (var i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
          var a = array[i];
          var b = array[i + 1];
          array[i] = b;
          array[i + 1] = a;
        }
      }
      console.log(array.sort(function(a, b){return a-b}));
}

sortArray([145,11,3,64,4,6,10])

//zad7

function addArrays(array1,array2){
    var longerArray;
    var shorterArray;
    var finalArray=[];
    if(array1.length>array2.length){
        longerArray=array1;
        shorterArray=array2;
    }
    else{
        longerArray=array2;
        shorterArray=array1;
    }
    for (var i = 0; i < longerArray.length; i++) {
        if(typeof shorterArray[i] === 'undefined'){
            finalArray[i]=longerArray[i];
        }
        else{
            finalArray[i]=longerArray[i]+shorterArray[i];
        }
    }
    return finalArray;
    }

addArrays([2,3,1,5,3,5], [3,1,76,1])
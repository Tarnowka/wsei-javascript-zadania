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

////////////////////////////////////

let fruits = ['apple', 'orange', 'banana', 'peach', 'pear'];
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);
for(let count=0;count<fruits.length;count++){
    console.log(fruits[count]);
}

///////////////////////////////////////////////////////////////

function printTable(array){

    for(let i=0; i< array.length;i++ ){
        console.log(array[i]);
    }
}

///////////////////////////////////

function multiply(array){
    var temp = 1;
    for(let i=0; i<array.length; i++){
        temp*=array[i]
    }
    console.log(temp);
}

///////////////////////////////////

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

//////////////////////////////////

function sortArray(array){


    sortArray(array){
        console.log(array.sortArray)
    }

    array.forEach(element=>{
        console.log(array[element])
    })
}

sortArray([145,11,3,64,4,6,10])

//////////////////////////////////

function addArrays(array1,array2){
    var dlugosc=0;
    var array3=[];
    if(array1>=array2) 
    {
        dlugosc=array1.length;
        dlugosc2=array2.length;
    }


    for(let i=0; i<dlugosc; i++){
        var first = array1[i]!=null ? array1[i] : 0;
        var second = array2[i]!=null ? array2[i] : 0;

        array3[i]=first+second;
        console.log(array3[i]);
    }

}

addArrays([2,3,1,5,3,5], [3,1,76,1])
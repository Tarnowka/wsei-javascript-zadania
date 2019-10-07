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
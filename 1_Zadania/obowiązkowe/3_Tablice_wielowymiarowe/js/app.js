
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

// zad0

function checkArray(arr){
    var foo=[];
    for (let index = 0; index < arr.length; index++) {
        foo[index] = true;
        for (let x = 0; x < arr[index].length; x++) {
            if(arr[index][x] %2!=0){
                foo[index]= false;
            };
        } 
    }
    //console.log(foo);
    return foo;
}

// zad1

console.log(task1Array[3][2]);
console.log(task1Array[2].length);
console.log(task1Array[4][2]);

// zad2

console.log(task2Array[0][0]);
console.log(task2Array[1].length);

for (let i = 0; i < task2Array.length; i++) {
    for (let j = 0; j < task2Array[i].length; j++) {
        console.log(task2Array[i][j]);
    }
}

// zad3 zad4
var foo=[[6,7],[4,2],[5,3]];
function print2DArray(arr){
    for (let index = 0; index < arr.length; index++) {
        for (let x = 0; x < arr[index].length; x++) {
            console.log(arr[index][x]);
        } 
    }
}
//print2DArray(foo);

// zad5
function create2DArray(rows, columns){
    var foo= [];    
    var counter = 1;
    for (let index = 0; index < rows; index++) {
        var temp=[];
        for (let x = 0; x < columns; x++) {
            temp.push(counter);
            counter++;
        } 
        foo.push(temp);
    }
    //console.log(foo);
    return foo;
}
create2DArray(4,4);
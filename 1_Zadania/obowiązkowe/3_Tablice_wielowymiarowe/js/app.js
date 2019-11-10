
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

//

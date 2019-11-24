var car = {
    brand:"Mercedes",
    color:"czarny",
    numberOfKilometers:0,
    printCarinfo(){
    console.log(this.color+" "+this.brand+", "+this.numberOfKilometers);
    },
    drive: function(ile){
        this.numberOfKilometers=ile;
    }
};

console.log(car.printCarinfo());
car.drive(20);
console.log(car.printCarinfo());

///////////////////////

var car = {
    brand:"Mercedes",
    color:"czarny",
    numberOfKilometers:0,
    printCarinfo(){
    console.log(this.color+" "+this.brand+", "+this.numberOfKilometers);
    },
    drive: function(ile){
        this.numberOfKilometers=ile;
    },
    tablica:[],
};

function tablica(wpis){
    car.tablica
};

console.log(car.printCarinfo());
car.drive(20);
console.log(car.printCarinfo());

//////////////////////////////

var stairs = {
    step:0,
    up:function(){
        this.step+=1;
    },
    down:function(){
        this.step-=1;
    },
    printStep: function(){
        console.log(this.step);
    },
}

stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
stairs.printStep();
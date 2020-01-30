//zad0

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

//zad1

let foo = ["2016-01-01","2017-02-02","2018-03-03","2019-04-04"];
car.reviews = foo;
car.addReview = function (date){
    this.reviews.push(date);
}
car.showReviews = function(){
    for (const element in this.reviews){
        console.log(this.reviews[element]);
    }
}

//zad3

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
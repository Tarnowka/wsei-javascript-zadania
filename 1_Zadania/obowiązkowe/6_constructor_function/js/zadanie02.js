function Calculator(){
    this.operations = [];
    return this;
}
Calculator.prototype.add = function(num1, num2){
    let result = num1 + num2;
    this.operations.push("added " + num1 + " to " + num2 + " got result " + result);
}
Calculator.prototype.multiply = function(num1, num2){
    let result = num1 * num2;
    this.operations.push("multiplied " + num1 + " to " + num2 + " got result " + result);
}
Calculator.prototype.subtract = function(num1, num2){
    let result = num1 - num2;
    this.operations.push("subtracted " + num1 + " to " + num2 + " got result " + result);
}
Calculator.prototype.divide = function(num1, num2){
    let result = num1 / num2;
    this.operations.push("divided " + num1 + " to " + num2 + " got result " + result);
}
Calculator.prototype.printOperations = function(){
    for(const element in this.operations){
        console.log(this.operations[element]);
    }
}
Calculator.prototype.clearOperations = function(){
    this.operations = [];
}
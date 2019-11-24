function Basket(){
    this.products=[];
    this.sum;
    this.addProduct=function(product,liczba){
        this.products=product;
        this.sum=this.sum+liczba;
    }
    function showBasket(){
        console.log(this.products+" "+this.sum);
    }
}

var aliceBasket = new Basket();
aliceBasket.addProduct("pomidor",10);
aliceBasket.addProduct("arbuz",40);
aliceBasket.showBasket();
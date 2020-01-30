//zad1

function countHello(number){
    var count=0;
    var intervalid=setInterval(()=>{
        count++;
        console.log('Hello', count);
        if(count===number){
            clearInterval(intervalid);
        }
    },500);
}
countHello(5);
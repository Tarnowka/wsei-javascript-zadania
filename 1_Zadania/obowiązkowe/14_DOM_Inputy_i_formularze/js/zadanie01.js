document.addEventListener("DOMContentLoaded", function () {

    var invoice = document.getElementById('invoice');
    var invoiceData = document.querySelector('#invoiceData');
    invoiceData.style.display = "none"
    invoice.addEventListener('change', function(){
        if(invoice.checked){
            invoiceData.style.display = "";
        }else{
            invoiceData.style.display = "none";
        }
    })
    
    });
let respuestaSubtotal = JSON.parse(localStorage.getItem("subtotal")); 
let respuestaTotal = JSON.parse(localStorage.getItem("total"));  
let respuestaEnvio = localStorage.getItem("envio");  

// localStorage.removeItem(" "); 

let subtoCheckJs = document.querySelector(".subtoCheckJs"); 
let envioCheJs = document.querySelector(".envioCheJs"); 
let totalCheckJs = document.querySelector(".totalCheckJs"); 

subtoCheckJs.innerText = respuestaSubtotal; 
totalCheckJs.innerText = respuestaTotal; 
envioCheJs.innerText = respuestaEnvio; 

let titular = document.querySelector("#titular"); 
let numeroTarjeta = document.querySelector("#NúmeroTarjeta"); 
let fechaCaducidad = document.querySelector("#FechaCaducidad"); 
let cvc = document.querySelector("#CVC"); 
let tarjetaDebito = document.querySelector("#tarjetaDebito"); 

tarjetaDebito.addEventListener("click", event => { 
    event.preventDefault(); 
    let metodoPago = document.createElement("p"); 

    metodoPago.innerText = "Nombre del titular: " + titular.value  
        + "\n Número de la tarjeta: " +numeroTarjeta.value 
        + "\n Fecha de caducidad: " +fechaCaducidad.value 
        + "\n CVC: " +cvc.value; 

    localStorage.setItem("metodoPago", JSON.stringify(metodoPago.innerHTML)); 
    console.log(metodoPago); 
    
}); 




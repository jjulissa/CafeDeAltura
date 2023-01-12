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




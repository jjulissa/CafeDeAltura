let respuestaSubtotal = JSON.parse(localStorage.getItem("subtotal")); 
let respuestaTotal = JSON.parse(localStorage.getItem("total"));  
let respuestaEnvio = localStorage.getItem("envio");  

// localStorage.removeItem(" "); 

let subToSuccesJs = document.querySelector(".subToSuccesJs"); 
let envioSuccesJs = document.querySelector(".envioSuccesJs"); 
let totalSuccesJs = document.querySelector(".totalSuccesJs"); 

subToSuccesJs.innerText = respuestaSubtotal; 
totalSuccesJs.innerText = respuestaTotal; 
envioSuccesJs.innerText = respuestaEnvio; 

let respuestaSavecesta = JSON.parse(localStorage.getItem("Savecesta")); 

// console.log(respuestaSavecesta);  










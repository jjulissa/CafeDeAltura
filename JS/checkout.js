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
    metodoPago.classList.add("metodoPago"); 

    metodoPago.innerText = "Nombre del titular: " + titular.value  
        + "\n Número de la tarjeta: " +numeroTarjeta.value 
        + "\n Fecha de caducidad: " +fechaCaducidad.value 
        + "\n CVC: " +cvc.value; 

    localStorage.setItem("metodoPago", JSON.stringify(metodoPago.innerHTML)); 
    console.log(metodoPago); 
    
}); 

let nombre = document.querySelector("#name"); 
let apellido = document.querySelector("#apellidos"); 
let telefono = document.querySelector("#teléfono"); 
let email = document.querySelector("#email"); 
let pais = document.querySelector("#país"); 
let poblacion = document.querySelector("#población"); 
let cp = document.querySelector("#cp"); 
let calle = document.querySelector("#calle"); 
let numeroCalle = document.querySelector("#nº"); 
let piso = document.querySelector("#piso"); 
let puerta = document.querySelector("#puerta"); 
let btnPagarPedido = document.querySelector(".btnPagarCheckout"); 


btnPagarPedido.addEventListener("submit", (event) => { 
    event.preventDefault(); 
    let direccionEnvio = document.createElement("p"); 
    console.log();
    direccionEnvio.innerText = "Nombre: " + nombre.value 
        + "\n Apellido: " + apellido.value 
        + "\n Telefono: " +telefono.value 
        + "\n Email: " +email.value 
        + "\n País: " +pais.value 
        + "\n Población: " +poblacion.value 
        + "\n CP: " +cp.value 
        + "\n Calle: " +calle.value 
        + "\n Nº: " +numeroCalle.value 
        + "\n Piso: " +piso.value 
        + "\n Puerta: " +puerta.value 
    
    console.log(direccionEnvio);
localStorage.setItem("direccionEnvio", JSON.stringify(direccionEnvio.innerText)); 

}); 



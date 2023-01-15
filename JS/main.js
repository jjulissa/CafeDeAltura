// Index Novedades 
// localStorage.clear(); 

let btnAnadir = document.querySelectorAll(".btnAddJs"); 

let carrito = [];
btnAnadir.forEach( (el, i) =>  { 
	el.addEventListener("click", (event) => { 
        console.log(event.target.previousElementSibling.innerText); 
const caja = { 
    image: event.target.previousElementSibling.previousElementSibling.src, 
    title: event.target.previousElementSibling.children[0].innerText, 
    price: event.target.previousElementSibling.children[1].innerText,
} 
    carrito.push(caja); 
    localStorage.setItem("caja", JSON.stringify(carrito)); 	
	} ) 
}); 


// Preguntas frecuentes  Home 

let iconoJs = document.querySelectorAll(".iconoJs"); 
let parafoJs = document.querySelectorAll(".parafoJs"); 
let hrJs = document.querySelectorAll(".hrJs");  

iconoJs.forEach( (el, i) =>  { 
	el.addEventListener("click", (event) => { 
        parafoJs[i].classList.toggle("parafoJs"); 
        hrJs[i].classList.toggle("hrJs"); 
        iconoJs[i].classList.toggle("rotate");
    }) 
});


// Entra en contacto con nosotros  
let nombreCompleto = document.querySelector("#name"); 
let email = document.querySelector("#email"); 
let telefono = document.querySelector("#telefono"); 
let quejas = document.querySelector("#quejas"); 
let formContactoJs = document.querySelector(".formContactoJs"); 
let mensajeGraciasJs = document.querySelector(".mensajeGraciasJs"); 

// console.log(formContactoJs); 

formContactoJs.addEventListener("submit", (event) => {
    event.preventDefault(); 
    // Muchas Gracias por escribirnos; 
    // Thanks For Writing To US... 
    let parafoMensaje = document.createElement("p"); 
    
    parafoMensaje.innerText = "Nombre Completo: " + nombreCompleto.value + 
        ", "+ " Email: " +email.value + ", " + 
        "Telefono: " + telefono.value + ", " + 
        "Comentario: " +quejas.value;  
    
localStorage.setItem("quejas", JSON.stringify(parafoMensaje.innerText)); 
    console.log(parafoMensaje); 

    let imgGracias = document.createElement("img"); 
    imgGracias.classList.add("imgGracias"); 
    imgGracias.src = "https://i.pinimg.com/originals/a1/14/02/a114022d5e19ea466d87db4ff3973822.gif"; 
    // imgGracias.src = "https://i.pinimg.com/564x/6c/40/d5/6c40d55515fed7b9f5b141d6d9fe4cfe.jpg"; 

    let parafoGracias = document.createElement("h1"); 
    parafoGracias.classList.add("parafoGracias")
    parafoGracias.innerText = "Muchas Gracias por escribirnos..."; 

    formContactoJs.remove(); 

    mensajeGraciasJs.append(imgGracias, parafoGracias); 


})



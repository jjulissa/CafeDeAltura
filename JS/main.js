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

iconoJs.forEach( (el, i) =>  { 
	el.addEventListener("click", (event) => { 
        parafoJs[i].classList.toggle("parafoJs"); 
        iconoJs[i].classList.toggle("rotate");
    }) 
});






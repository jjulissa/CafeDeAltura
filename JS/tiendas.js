let btnAnadir = document.querySelectorAll(".btnAddJs"); 
let iconTienda = document.querySelector(".prueb"); 



let carrito = [];
btnAnadir.forEach( (el, i) =>  { 
	el.addEventListener("click", (event) => {   
        // console.log(btnAnadir[i]); 
        if(btnAnadir[i]) { 

        } else { 
        iconTienda.innerHTML++; 
        console.log(event.target.previousElementSibling.innerText); 
        const caja = { 
            image: event.target.previousElementSibling.previousElementSibling.src, 
            title: event.target.previousElementSibling.children[0].innerText, 
            price: event.target.previousElementSibling.children[1].innerText,
        } 
        carrito.push(caja);  
        
        localStorage.setItem("caja", JSON.stringify(carrito));	
        localStorage.setItem("iconTienda", JSON.stringify(iconTienda)); 
    }
    
	} ) 
}); 



// localStorage.clear();  
let cesta = JSON.parse(localStorage.getItem("caja")); 

// console.log(cesta); 

let prixJs = document.querySelector("#prixJs"); 
let totalJs = document.querySelector("#totalJs"); 
let icon2Tienda = document.querySelector(".icon2Tienda"); 
let cantCestaJs = document.querySelector(".cantCestaJs"); 

if (cesta) {

cesta.forEach((element, i) =>  { 
 
    icon2Tienda.innerText++; 
    cantCestaJs.innerText++;
    let cestaTres = document.querySelector(".cestaTres");  
    let CadaCesta = document.createElement("div"); 
    CadaCesta.classList.add("CadaCesta"); 
    
    let masoMenosxs = document.createElement("div"); 
    masoMenosxs.classList.add("masoMenosxs"); 

    let menos = document.createElement("img"); 
    menos.src = "../asset/icono/men.png"; 
    menos.classList.add("menos"); 

    let cantidad = document.createElement("p"); 
    cantidad.innerText = 1; 
    cantidad.classList.add("parafoCantidad")

    let mas = document.createElement("img"); 
    mas.src = "../asset/icono/mass.png"; 
    mas.classList.add("mas");
    
    let img = document.createElement("img"); 
    img.classList.add("fotoCafe")
    let titulo = document.createElement("h4"); 
    let descripcion = document.createElement("p"); 
    descripcion.innerText = "Paquete de café, 250 gr"; 
    let precio = document.createElement("p"); 
    precio.classList.add("precioCasita");
    
    img.src = element.image; 
    titulo.innerText = element.title; 
    precio.innerText = element.price; 
    
    let titCesta = document.createElement("section"); 
    titCesta.classList.add("titCesta")
    
    let hrmedio = document.createElement("div"); 
    hrmedio.classList.add("hrmedio"); 

    CadaCesta.append(masoMenosxs, img, titCesta,  precio); 
    masoMenosxs.append(menos, cantidad, mas); 
    titCesta.append(titulo, descripcion); 
    cestaTres.append(CadaCesta, hrmedio); 
    
    prixJs.innerText = (parseInt(prixJs.innerText) + parseInt(precio.innerText)) + "€";   
    totalJs.innerText = parseInt(prixJs.innerText) + "€"; 

    menos.addEventListener("click", () => {   
        console.log("Hola");
        if(cantidad.innerText > 1) { 
            console.log("Dios");
            const prix = cesta[i].price.match(/\d/g).join('') / 100; 
            precio.innerText = parseInt(precio.innerText) - prix;
            cantidad.innerText--;  
            prixJs.innerText =  (parseInt(prixJs.innerText) -  prix) + " €"; 
            totalJs.innerText = parseInt(prixJs.innerText) + " €";  
            localStorage.setItem("cantidadMenos", JSON.stringify(cantidad.innerText));  

        } 
        else { 
        CadaCesta.remove(); 
        hrmedio.remove(); 
        }
    });  

    mas.addEventListener("click", () => {  
        icon2Tienda.innerText++; 
        cantCestaJs.innerText++;
        const prix = cesta[i].price.match(/\d/g).join('') / 100; 
        precio.innerText = parseInt(precio.innerText) + prix + " €";
        // precio.innerText = parseInt(precio.innerText) + 9  + " €" ; 
        cantidad.innerText++; 
        prixJs.innerText =  (parseInt(prixJs.innerText) +  prix) + " €"
        // prixJs.innerText =  (parseInt(totalJs.innerText) + parseInt(precio.innerText)) + "€";
        let porcentaje = ((4 * parseInt(prixJs.innerText) / 100)); 
        // totalJs.innerText  = parseInt(prixJs.innerText) + " €"; 
        totalJs.innerText  = (parseInt(prixJs.innerText) - porcentaje + " €")
        localStorage.setItem("subtotal", JSON.stringify(prixJs.innerText));  
        localStorage.setItem("total", JSON.stringify(totalJs.innerText));  
        localStorage.setItem("cantidadMas", JSON.stringify(cantidad.innerText));  
 
    }); 
    

    
        // Save 
    localStorage.setItem("subtotal", JSON.stringify(prixJs.innerText)); 
    localStorage.setItem("total", JSON.stringify(totalJs.innerText)); 

    // localStorage.setItem("foto", JSON.stringify(img.src));  
    // localStorage.setItem("titre", JSON.stringify(titulo.innerText)); 
    // localStorage.setItem("souTit", JSON.stringify(descripcion.innerText)); 
    // localStorage.setItem("precioUnico", JSON.stringify(precio.innerText)); 
    // console.log(totalJs);    
    

}); 

}; 
// localStorage.setItem("cafe", JSON.stringify(arrayCesta)); 

localStorage.setItem("Savecesta", JSON.stringify(cesta));

let lab = document.querySelectorAll(".lab"); 
// console.log(lab);
let price = document.querySelector(".price"); 
let gratisJs = document.querySelector(".gratisJs"); 
let priceJs = document.querySelector(".priceJs"); 
let labOneJs = document.querySelector(".labOneJs"); 
let labTwoJs = document.querySelector(".labTwoJs"); 


// lab.forEach( (element, i) =>  { 
//     element.addEventListener("click", (event) => {  
//         console.log(lab[i]);
//         if(lab[1]) { 
//             gratisJs.innerText = 9 + " €"; 
//             totalJs.innerText = parseInt(totalJs.innerText) + parseInt(gratisJs.innerText) + " €"; 
//         }
//         else if (lab[0]) { 
//             gratisJs.innerText = "GRATIS";
//             totalJs.innerText + " €"; 
//         }
//     }) 
// }); 

labOneJs.addEventListener("click", () => {
    gratisJs.innerText = "GRATIS";
    totalJs.innerText = prixJs.innerText + " "; 
    localStorage.setItem("envio", gratisJs.innerText); 

}); 

labTwoJs.addEventListener("click", () => {
    gratisJs.innerText = 9 + " €"; 
    totalJs.innerText = parseInt(totalJs.innerText) + parseInt(gratisJs.innerText) + " €"; 
    localStorage.setItem("total", JSON.stringify(totalJs.innerText)); 
    localStorage.setItem("envio", gratisJs.innerText); 
}); 




let respuestaCantMenos = JSON.parse(localStorage.getItem("cantidadMenos")); 
let respuestaCantMas = JSON.parse(localStorage.getItem("cantidadMas")); 





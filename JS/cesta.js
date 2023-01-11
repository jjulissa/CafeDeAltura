// localStorage.clear();  
let cesta = JSON.parse(localStorage.getItem("caja")); 
// console.log(cesta); 

let prixJs = document.querySelector("#prixJs"); 
let totalJs = document.querySelector("#totalJs"); 

cesta.forEach(element => { 
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
    cantidad.classList.add("cantidad")

    let mas = document.createElement("img"); 
    mas.src = "../asset/icono/mass.png"; 
    mas.classList.add("mas");
    
    let img = document.createElement("img"); 
    img.classList.add("fotoCafe")
    let titulo = document.createElement("h4"); 
    let descripcion = document.createElement("p"); 
    descripcion.innerText = "Paquete de café, 250 gr"; 
    let precio = document.createElement("p"); 
    
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

  


        // Suma 

prixJs.innerText = (parseInt(prixJs.innerText) + parseInt(element.price)) + "€";   

totalJs.innerText = parseInt(prixJs.innerText) + "€"; 


}); 






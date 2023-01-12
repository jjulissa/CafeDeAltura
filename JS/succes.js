let respuestaFoto = JSON.parse(localStorage.getItem("foto")); 
let respuestaTitre = JSON.parse(localStorage.getItem("titre")); 
let respuestaSousTitre = JSON.parse(localStorage.getItem("souTit")); 
let respuestaSubtotal = JSON.parse(localStorage.getItem("subtotal")); 
let respuestaTotal = JSON.parse(localStorage.getItem("total"));  
let respuestaEnvio = localStorage.getItem("envio");  
let respuestacesta = JSON.parse(localStorage.getItem("cesta")); 
let respuestaPrecioUnico = JSON.parse(localStorage.getItem("precioUnico")); 


// CadaPedido.append(losNaranjos); 

CadaPedido.append(respuestacesta); 
losNaranjos.append(imgColombCoffe, parafoPrecio); 
imgColombCoffe.append(imgSucces, succesDetail); 
succesDetail.append(parafoTitulo, parafoSubTitulo); 

let subToSuccesJs = document.querySelector(".subToSuccesJs");  
let  totalSuccesJs = document.querySelector(".totalSuccesJs");  

subToSuccesJs.innerText = respuestaSubtotal; 
totalSuccesJs.innerText = respuestaTotal;  









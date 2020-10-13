import datos from "./modules/formulario.js";
import formulario from "./modules/datos.js";

var caja = document.getElementById("caja");

window.aceptar = formulario.aceptar;

document.getElementById("formulario").addEventListener("click",()=>{
    caja.innerHTML = formulario.data;
})
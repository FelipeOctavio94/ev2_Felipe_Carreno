import datos from "./modules/datos.js";
import formulario from "./modules/formulario.js";

var caja = document.getElementById("caja");

window.aceptar = formulario.aceptar;
window.cargar = datos.cargar;

document.getElementById("formulario").addEventListener("click",()=>{
    caja.innerHTML = formulario.data;
    formulario.limpiar();
})

document.getElementById("datos").addEventListener("click",()=>{
    caja.innerHTML = datos.data;
    datos.cargar();
})
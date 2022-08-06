import abrirCerrarLoti from "./lotimax.js";
//import abrirComunicadoFinal from "./comunicadoFinAño.js";
import comunicados from "./comunicados.js";


const d=document;

d.addEventListener('DOMContentLoaded', (e)=>{
    abrirCerrarLoti(".sorteos",".descripcion",".salir");
    /*Comentar funcion para desactivar comunicados de fin de año */
    //abrirComunicadoFinal();
    comunicados();
});

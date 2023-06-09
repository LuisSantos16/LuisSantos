//menu bar

function llamar(){
    let menudespegable=document.getElementById("listaid");
        menudespegable.classList.toggle("lista-open")
    let listabar=document.getElementById("lista-bar");
    listabar.querySelector("lista-bar .listabar").classList.toggle;
}

//scroll

window.addEventListener("scroll",Scroll);
function Scroll(){
    let header=document.getElementById("header");
    let posy=window.pageYOffset;
    if (posy>100){
        header.style.background="rgb(34, 39, 61)";
        header.style.transition="0.5s"
    }
    else{
        header.style.background="rgba(0, 0, 0, 0.397)";
        header.style.transition="0.5s"
    }
}

//Boton Subir
window.addEventListener('scroll', Subir);
    function Subir(){
var subir=document.getElementById("subir");
var npos=window.pageYOffset;
        if (npos>300){
            subir.style.display="block";
            subir.style.transition="0.5s";
        }
        else{
            subir.style.display="none";
            subir.style.transition="0.5s";
        }
    }

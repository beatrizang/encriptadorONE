//escribe lo que se va ingresando en el bloque blanco
const input = document.getElementById('ingreso');
const textoIngresado = document.getElementById('textoIngresado');


input.addEventListener('input', actualizarTexto);

function actualizarTexto(e) {
  textoIngresado.textContent = e.srcElement.value;
}

//comprueba si el string esta vacio
function isEmpty(str) {
    return (!str || str.length === 0 );
}

//oculta el muñeco y la informacion si se escribe en el input, si no hay caaracteres los vuelve a mostrar
function escribir(){
    if(isEmpty(input.value)){
        document.getElementById("munieco").style.display = "block";
        document.getElementById("info").style.display = "block";
        document.getElementById("textoIngresado").style.display = "none";
        document.getElementById("copiar").style.display = "none";
    }else{
        document.getElementById("munieco").style.display = "none";
        document.getElementById("info").style.display = "none";
        document.getElementById("textoIngresado").style.display = "block";
        document.getElementById("copiar").style.display = "block";
    }

}

//copia el mensaje del cuadro blanco
function copiar(){
    textoIngresado.disabled = false;
    textoIngresado.select();
    document.execCommand('copy');
    textoIngresado.disabled = true;
    alert("¡Texto Copiado!");
}

//remueve cualquier acento
function remueveAcentos (str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 


//encripta el mensaje
function encriptar(){
    var textoAEncriptar = remueveAcentos(input.value.toLowerCase());
    var textoEncriptado = textoAEncriptar.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    textoIngresado.textContent = textoEncriptado; 

}

//desencripta el mensaje
function desencriptar(){
    var textoADesencriptar =  remueveAcentos(input.value.toLowerCase());
    var textoDesencriptado = textoADesencriptar.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    textoIngresado.textContent = textoDesencriptado;
}

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Nombres
let nombre;
let listaNombres =[];
// sorteo
let numeroSorteado;
let listaNumerosUsados =[];
let multiplicador1=10;
// Modificación de textos
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
//seccion de agregar información
function agregarAmigo() {
    nombre = document.getElementById("amigo").value.trim(); // siempre lleba el .value sin importar si es texto o numero
    // se valida que el nombre no este vacio
    if (nombre === "") {
        alert("Introduce un nombre válido.");
        return;
    }
    // se registra el nombre en la lista
    listaNombres.push(nombre);
    const li = document.createElement("li");  // crea elemento <li> antes de agregarlo a la lista, lo que permite que se muestre en lista
    li.textContent = `${listaNombres.length}. ${nombre}`; // asigna el nombre al contenido del elemento <li>
    document.getElementById("listaAmigos").appendChild(li); // agrega el elemento <li> a la lista con el id "listaAmigos" que es <ul> la cual solo se imprime horizontalmente
    // se limpia el campo de entrada
    document.getElementById("amigo").value = ""; // limpia el campo de entrada      
    return;
}
// seleccion sortear 
function sortearAmigo() {
    // en caso de exceder los valores de la lista el inicial 10 se incrementara en 10 veces 
    while (multiplicador1 < listaNombres.length){ 
        multiplicador();
        break;
    }
    // generar numero aleatorio
     numeroSorteado = Math.floor(Math.random()*multiplicador1);
     
     // se agrega para evitar un bucle infinito de iteraciones cuando se terminan los numeros
        if (listaNumerosUsados.length == multiplicador1) {
            asignarTextoElemento("ul", "Sorteo de amigos secretos finalizado " );
            document.getElementById("sortear").disabled = true; // deshabilita el boton sortear no se ve visualmente pero detiene el evento onclick
            }
    //si el numero ya fue usado, se sortea de nuevo
            else if (listaNumerosUsados.includes(numeroSorteado)){ 
                return sortearAmigo();
                }else {
                    // si el numero no habia sido usado se almacena
                    listaNumerosUsados.push(numeroSorteado);
                    // se determina si hay ganador mediante
                    // si se detecta que es menor o igual al los datos introducidos,
                    // se imprime el ganador
                    if (numeroSorteado < listaNombres.length){ 
                        asignarTextoElemento("ul", "amigo secreto: " + `${listaNombres[numeroSorteado]}`);                  
                        } else {
                        sortearAmigo();     
                    }
                }                    
}
// cambio de multiplicador en caso de ser mas valores al maximo
function multiplicador(){
multiplicador1 *=10;
return multiplicador1;
}

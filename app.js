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

    nombre = document.getElementById("amigo").value; // siempre lleba el .value sin importar si es texto o numero
    listaNombres.push(nombre);
   
    console.log(multiplicador1);
    console.log("dato introducido " + nombre);
    console.log("lista " + listaNombres);
    console.log("datos en lista " + listaNombres.length);
    console.log("fin ciclo")
     
    return;
}


// seleccion sortear 
function sortearAmigo() {
    console.log("multiplicador inicial: " + multiplicador1);
// en caso de exceder los valores de la lista el inicial 10 se incrementara en 10 veces 
    while (multiplicador1 < listaNombres.length){ 
        multiplicador();
        console.log("nuevo valor " + multiplicador1);
        break;
    }
    // generar numero aleatorio
     numeroSorteado = Math.floor(Math.random()*multiplicador1);
     console.log("iniciando")
     console.log("numero seleccionado: " + numeroSorteado);
     console.log("cantidad de datos: " + listaNombres.length)
    // se agrega para evitar un bucle infinito de iteraciones cuando se terminan los numeros
        if (listaNumerosUsados.length == multiplicador1) {
         console.log("SORTEO TERMINADO, NO ES POSIBLE TENER MAS GANADORES")
         console.log(listaNumerosUsados);
    // SE DEBE DESHABILITAR EL VOTON "SORTEO"
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
                    console.log("hay ganador" );
                    console.log("numero ganador: " +listaNombres[numeroSorteado]);
                    } else {
                        // si el numero es mayor se almacena
                        console.log("valor fuera del rango");
                        console.log(listaNumerosUsados);
                        // se regrsa a la seccion sortear
                        sortearAmigo();     
                    }
                }
                        
}



// cambio de multiplicador en caso de ser mas valores al maximo

function multiplicador(){
multiplicador1 *=10;
return multiplicador1;

}



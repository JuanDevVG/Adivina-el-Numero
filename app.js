let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();

//EJERCICIOS LOGICA DE PROGRAMACION - ARRAYS
let numeroElemento = 0;
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];

lenguajesDeProgramacion.push('Java');
lenguajesDeProgramacion.push('Ruby');
lenguajesDeProgramacion.push('Golang');

let numeroElementoInverso = lenguajesDeProgramacion.length-1;

function mostrarElementosLista() {
    
    if (numeroElemento <= lenguajesDeProgramacion.length) {
        console.log(lenguajesDeProgramacion[numeroElemento]);
        numeroElemento++;
        mostrarElementosLista();
    } else {
        console.log("Se mostraron todos los datos del array");
    }
    
}

function mostrarElementosListaOrdenInverso() {
    
    if (numeroElementoInverso >= 0) {
        console.log(lenguajesDeProgramacion[numeroElementoInverso]);
        numeroElementoInverso--;
        mostrarElementosListaOrdenInverso();
    } else {
        console.log("Se mostraron todos los datos del array");
    }
}

let arrayNumeros  = [5,5,4,9,2,7,4,11,5,5];
let elemento = 20;

function calcularPromedioEnArray() {
    let sumaElementos = 0;
    let cantidadElementos = arrayNumeros.length;

    for (let i = 0; i<arrayNumeros.length; i++) {
        sumaElementos += arrayNumeros[i];
    }

    return sumaElementos/cantidadElementos;
}

function mostrarNumeroMayorYMenor() {
    let numeroMin = arrayNumeros[0];
    let numeroMax = arrayNumeros[0];

    for (let i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] > numeroMax) {
            numeroMax = arrayNumeros[i];
        }
        if (arrayNumeros[i] < numeroMin) {
            numeroMin = arrayNumeros[i];
        }
    }
    console.log(`El numero menor es: ${numeroMin}`);
    console.log(`El numero mayor es: ${numeroMax}`);
}

function obtenerPosicionElemento(elemento) {

    for (let i=0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] == elemento) {
            return i;
        }
    }

    return -1;
}

//Funcion que suma cada elemento de una lista con el de otra lista
let lista1 = [1,2,2,2,3,3,4];
let lista2 = [1,5,6,6,3,2,4]

function sumaElementosDeDosListas(lista1, lista2) {
    let nuevaLista = [];
    for (let i = 0; i < lista1.length; i++) {
        nuevaLista[i] = lista1[i]+lista2[i];
    }
    return nuevaLista;
}

//Funcion que recibe una lista de numeros y devuelve una nueva con el cuadrado de cada numero.
let listaNumerica = [1,2,3,4,5,6,7,8,9];

function listaNumericaConCuadradoPorNumero(listaNumerica) {
    let nuevaLista = [];
    for (let i = 0; i < listaNumerica.length; i++) {
        nuevaLista[i] = listaNumerica[i]*listaNumerica[i];
    }
    return nuevaLista;
}

mostrarElementosLista();
mostrarElementosListaOrdenInverso();
console.log(calcularPromedioEnArray());
mostrarNumeroMayorYMenor();
console.log(`la posicion del elemento ${elemento} es ${obtenerPosicionElemento(elemento)}`);
console.log(sumaElementosDeDosListas(lista1, lista2));
console.log(listaNumericaConCuadradoPorNumero(listaNumerica));
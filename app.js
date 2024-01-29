// Inicialización de variables para el juego
let numeroSecreto = 0; // Número secreto que debe adivinar el usuario
let intentos = 1; // Número de intentos realizados
let listaNumerosSorteados= []; 
let numeroMáximo = 10; 
console.log('Los numeros que fueron sorteados:', listaNumerosSorteados);

// Imprimir en la consola el número secreto (solo para propósitos de depuración)
console.log('el numero secreto es', numeroSecreto);

// Función para asignar texto a un elemento HTML
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Función para verificar el intento del usuario
function verificarIntento(){
    // Obtener el número ingresado por el usuario y convertirlo a un número entero
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    // Imprimir en la consola el número secreto y el número de intentos (para depuración)
    console.log(numeroSecreto);
    console.log(intentos);

    // Verificar si el número ingresado es igual al número secreto
    if (numeroDeUsuario == numeroSecreto){
        // El usuario adivinó el número secreto
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ?'vez' : 'veces'}`);
        // Habilitar el botón de reinicio
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no adivinó el número
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        // Incrementar el número de intentosl
        intentos++;
        // Limpiar la caja de entrada
        limpiarCaja();
    }
} 

// Función para limpiar la caja de entrada
function limpiarCaja(){
    valorCaja = document.querySelector('#valorUsuario').value = '';
}

// Función para generar un número secreto aleatorio entre 1 y 10
function generarNumeroSecreto(){
     let numeroGenerado = Math.floor(Math.random() * 10) + 1;

     //Si ya sorteamos todos los numeros

     if(listaNumerosSorteados.length == numeroMáximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles'); 
     }else 

        //Sí el numero generado está en la lista/*
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
}

// Función para establecer las condiciones iniciales del juego
function condicionesIniciales(){
    // Asignar textos iniciales
    asignarTextoElemento('h1','Juego Del Número Secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMáximo}`);
    // Generar un nuevo número secreto
    numeroSecreto = generarNumeroSecreto();
    // Inicializar el número de intentos
    intentos = 1;
}

// Función para reiniciar el juego
function reiniciarJuego(){
    // Limpiar la caja de entrada
    limpiarCaja();
    // Restablecer condiciones iniciales del juego
    condicionesIniciales();
    // Deshabilitar el botón de reinicio
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

// Llamar a la función de condiciones iniciales al cargar la página
condicionesIniciales();

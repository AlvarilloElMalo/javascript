
import { aleatorio, esCapicua, factorial } from "./ejercicios03.mjs";
/**
 * Prueba al ejercicio 9
 * Genera 1000 números aleatorios, los almacena en un arreglo, luego ordena  todos ellos para
 * verificar que estan entre 501 y 600.
 */



let arreglo = [];

for (let i = 0; i <= 1000; i++) {
    arreglo.push(aleatorio());
}

arreglo.sort();

console.log('Los aleatorios estan entre 501 y 600: ', arreglo[0], arreglo[arreglo.length - 1]);

/**
 * Prueba al ejercicio 10.
 */

let capi = esCapicua(2002);
const mensaje = capi ? 'Capicua correcto' : ` Error. El capicua indico: ${capi}`;

console.log(mensaje);

/**
 * Prueba del ejercicio 11.
 */

let factorial0 = factorial(0);
let factorial1 = factorial(1);
let factorial5 = factorial(5);

let mensaje0 = factorial0 === 1 ? 'Correcto factorial[0]' : 'Incorrecto factorial[0]';
let mensaje1 = factorial1 === 1 ? 'Correcto factorial[1]' : 'Incorrecto factorial[1]';
let mensaje5 = factorial5 === 120 ? 'Correcto factorial[5]' : 'Incorrecto factorial[5]';

console.log('Resultados: ', mensaje0, mensaje1, mensaje5);

try {

    let factorialM4 = factorial(-4);
    console.error("Fallo el factorial de -4");
} catch (e) {
    console.log('Correcto factorial de -4');
}


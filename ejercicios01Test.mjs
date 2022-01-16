
import { cuentaCaracteres, separa, recortaTexto, repite } from "./ejercicios01.mjs";

console.log("*************************************************");
console.log("*****  Ejercicio 1 ");
/**
 * Validación del ejercicio 1
 */
try {

    // invocación incorrecta
    cuentaCaracteres();

} catch (e) {
    console.error("Correcto se esperaba una falla al invocar a cuenaCaracteres", e);
}


const longitud = cuentaCaracteres('Hola Mundo');
const mensaje = longitud === 10 ? `Correcto  ejercicio 1 longitud dio ${longitud}` : 'La longitud debio ser 10';
console.log(mensaje);

/**
 * Pruebas al ejercicio 2.
 */
console.log("*************************************************");
console.log("*****  Ejercicio 2 ");
try {
    // invocación incorrecta
    recortaTexto();

} catch (e) {
    console.error("Correcto. Se esperaba fallo por no proporcionar los parametros necesarios", e);
}

try {
    // invocación incorrecta
    recortaTexto('hola');
} catch (e) {
    console.error("Correcto. Se esperaba fallo por no proporcionar los parametros necesarios", e);
}

const recorte = recortaTexto("Hola Mundo", 4);
const mensajeEj2 = recorte === 'Hola' ? `Corecto ejercicio 2 la salida fue ${recorte}` : 'El recorte debio dar Hola';
console.log(mensajeEj2);

/**
 * Pruebas al ejercicio 3.
 */
console.log("*************************************************");
console.log("*****  Ejercicio 3 ");
try {
    // invocación incorrecta
    separa();
} catch (e) {
    console.error("Correcto. Se esperaba fallo por no proporcionar los parametros necesarios", e);
}

try {
    // invocación incorrecta
    separa('hola');
} catch (e) {
    console.error("Correcto. Se esperaba fallo por no proporcionar los parametros necesarios", e);
}


const esperado = ['hola', 'que', 'tal'];
const resultante = separa('hola que tal', ' ');
const mensajeEj3 = esperado.length === resultante.length && esperado.every((value, index) => value === resultante[index]) ?
    `Correcto. Ejercicio 3 con resultado ${resultante}` : `El arreglo resultante debio ser ${esperado} pero fue ${resultante}`;


console.log(mensajeEj3);

/**
 * Pruebas al ejercicio 4
 */
console.log("*************************************************");
console.log("*****  Ejercicio 4 ");
try {
    // invocación incorrecta
    repite('Hola Mundo');
} catch (e) {
    console.error("Correcto. Se esperaba fallo por no proporcionar los parametros necesarios", e);
}

try {
    // invocación incorrecta
    repite();
} catch (e) {
    console.error("Correcto. Se esperaba fallo por no proporcionar los parametros necesarios", e);
}

const esperadoEjercicio4 = 'Hola Mundo Hola Mundo Hola Mundo '
let resultadoEj4 = repite('Hola Mundo', 3);
const mensajeEj4 = esperadoEjercicio4 === resultadoEj4 ? `Correcto ejercicio 4 con resultado ${resultadoEj4}` : `Se esperaba "${esperadoEjercicio4}" pero fue "${resultadoEj4}"`;
console.log(mensajeEj4);


import { cuenta, esPalindromo, invierte, eliminaPatron } from "./ejercicios02.mjs";

/**
 * Prueba al ejercicio 5.
 */
let invertido = invierte('Hola Mundo');

const mensaje = "odnuM aloH" === invertido ? "Correcta la inversión" : `La inversión fallo, dio como resultado ${invertido}`;
console.log(mensaje);

/**
 * Prueba al ejercicio 6.
 */
const buscado = 'mundo';
const resultado6 = cuenta( 'hola mundo adios mundo', buscado);

const mensaje6 = 2 === resultado6 ? "Correcto ejercicio 6": `Se encontro ${buscado} ${resultado6} en lugar de 2`;

console.log( mensaje6 );


/**
 * Pruebas al ejercicio 7
 */

 console.log( "Palindromo  salas ", esPalindromo('salas'));
 console.log( "Palindromo  Salas ", esPalindromo('Salas'));
 console.log( "Palindromo  maam ", esPalindromo('maam'));
 
 console.log( "Palindromo  las ", esPalindromo('las'));
 console.log( "Palindromo  as ", esPalindromo('as'));
 console.log( "Palindromo  anitalavalatina ", esPalindromo('anitalavalatina'));

 /**
  * Pruebas al ejercicio 8
  */

  console.log( 'Eliminando el patron', eliminaPatron('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xyz') );
 

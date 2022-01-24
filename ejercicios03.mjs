
/**
 * Ejercicio 09
 * Programa una función que obtenga un numero aleatorio entre 501 y 600.
 * @returns Devuelve un número aleatorio entre 501 y 600.
 */

const aleatorio = () => {
    return 501 + Math.round(99 * Math.random());
}

/**
 * Indica si un numero es capicua.
 * @param {number} numero Numero entero
 * @returns true si el número es capicua, false en otro caso.
 */
const esCapicua = (numero) => {
    if (numero === undefined || typeof (numero) !== 'number' || !Number.isInteger(numero)) {
        throw Error("Debe proporcionar un numero entero");
    }
    let cadena = numero + "";

    let i = 0;
    let f = cadena.length - 1;

    while (i <= f && cadena.charAt(i).toLowerCase() === cadena.charAt(f).toLowerCase()) {

        i++;
        f--;
    }

    return i > f;

}

const factorial = (numero) => {

    if( numero === undefined || typeof(numero) !== 'number' || !Number.isInteger(numero)){
        throw Error("Debe proporcionar un número entero");
    }

    if( numero < 0 ){
        throw Error( "No existe el factorial de un número negativo");
    }


    if( numero === 0){
        return 1;
    }

    if( numero > 0 ){
        return factorial(numero-1)*numero;
    }


}

export { aleatorio, esCapicua, factorial };
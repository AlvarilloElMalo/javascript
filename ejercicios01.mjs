


/**
 * Ejercicio 1.
 * Programa una función que cuente el número de caracteres de una cadena de texto
 * @param {string} cadena Cadena sobre la que se realizará el conteo.
 * @returns Un número entero con los caracteres
 */
function cuentaCaracteres(cadena) {
	if (cadena === undefined) {
		throw Error("Es necesario proporcionar la cadena a la cual se le calculará su longitud");
	}

	return cadena.length;

}


/**
 * Ejercicio 2
 * Programa una función que te devuelva el texto recortado según el número de caracteres indicados.
 * @param {string} cadena Cadena sobre la que se realizará el recorte
 * @param {number} recorte Numero entero con el cual se realizará el recorte.
 * @returns El texto recortado por la funcion.
 */
function recortaTexto(cadena, recorte) {
	if (cadena === undefined || recorte === undefined) {
		throw Error("Es necesario proporcionar una cadena de texto y el número al cual se recortará");
	}

	return cadena.substring(0, recorte);
}

/**
 * Ejericio 3
 * Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter
 * @param {string} cadena Cadena sobre la que se ejecutará la separación.
 * @param {string} separador Cadena que se usará como separador.
 * @returns Un array con los valores separados del arreglo.
 */

function separa(cadena, separador) {
	if (cadena === undefined || separador === undefined) {
		throw Error('Debe proporcionarse una cadena para separar y un separador para realizar las divisiones');
	}

	let resultado = [];
	let indiceInicial = 0;
	let indice = cadena.indexOf(separador);
	while (indice >= 0) {

		let agregar = cadena.substring(indiceInicial, indice);
		console.log('indiceInicial', indiceInicial,
			'indice', indice,
			'agregar', agregar);
		resultado.push(agregar);
		indiceInicial = indice + separador.length;

		indice = cadena.indexOf(separador, indiceInicial);
	}


	let agregar = cadena.substring(indiceInicial);

	resultado.push(agregar);
	return resultado;
}



/**
 * Ejercicio 4
 * Programa una función que repita un texto X veces
 * @param {string} cadena Cadena que se ha de repetir.
 * @param {number} x Cantidad de veces que se repetira el texto.
 * @returns Una cadena repetida x veces.
 */
function repite(cadena, x) {

	if (cadena === undefined || x === undefined) {
		throw Error('Es necesario proporcionar la cadena y su número de repeticiones');
	}

	let resultado = '';
	for (let i = 1; i <= x; i++) {
		resultado += cadena + ' ';
	}
	return resultado;
}


export { cuentaCaracteres, recortaTexto, separa, repite }

/**
 * Programa una función que invierta las palabras de una cadena de texto.
 * @param {string} cadena a invertir.
 * @returns La cadena invertida.
 */
const invierte = (cadena)=>{
    if( cadena === undefined || typeof(cadena) !== 'string' ) {
		throw Error('Es necesario proporcionar una cadena de caracteres');
	}

	let resultado = '';
	for( let i = cadena.length-1 ; i>= 0 ; i--){
		resultado+=cadena[i];

	}

	return resultado;

}

/**
 * Programa una función para contar el número de veces que se repite una palabra en un texto largo
 * @param {string} cadena Cadena sobre la que se busca.
 * @param {string} buscado Cadena que se busca.
 * @returns numero total de veces que se muestra la cadena en un texto largo.
 */
const cuenta = ( cadena, buscado)=>{
	if( cadena === undefined || typeof(cadena) !== 'string' || buscado === undefined || typeof(buscado) !== 'string'){
		throw Error("es necesario proporcionar dos cadenas. Una para buscar y otra con el valor buscado.");
	}

	let indice = cadena.indexOf( buscado);
	let total = 0;
	while( indice >= 0){
		total++;
		indice = cadena.indexOf( buscado, indice+buscado.length);

	}

	return total;

}

/**
 * Verifica si una cadena es un palindromo.
 * @param {string} cadena sobre la cual se verificará si esta es un palindromo.
 * @returns  true si la cadena es palindromo, false en otro caso.
 */
const esPalindromo = ( cadena ) => {
	if( cadena === undefined || typeof(cadena) !== 'string' ) {
		throw Error('Es necesario proporcionar una cadena que nos indique si esta es un palindromo');
	}


	let i = 0;
	let f = cadena.length-1;

	while( i <= f && cadena.charAt(i).toLowerCase() === cadena.charAt(f).toLowerCase() ){

		i++;
		f--;
	}

	return i>f;
}

/**
 * Elimna la cadena que venga en el parametro 'eliminar' de la cadena 'cadena'
 * @param {string} cadena Cadena donde se hará la eliminación.
 * @param {string} eliminar cadena que se eliminará
 * @returns Una cadena con el resultado de la eliminación.
 */
const eliminaPatron = ( cadena , eliminar) => {
	if( cadena === undefined || typeof(cadena) !== 'string' || eliminar === undefined || typeof(eliminar) !== 'string'){
		throw Error("es necesario proporcionar dos cadenas. Una donde se eliminará y otra con el valor a eliminar.");
	}


	let resultado = '';
	let indice = cadena.indexOf( eliminar );
	let indiceInicial = 0;

	while( indice >= 0 ){

		let agregar = cadena.substr( indiceInicial, indice-indiceInicial);

		indiceInicial = indice+eliminar.length;
				resultado+= agregar;
		indice = cadena.indexOf( eliminar, indiceInicial);
	}
	
	let agregar = cadena.substr( indiceInicial);
	resultado+=agregar;
	return resultado;	
}






export {invierte, cuenta, esPalindromo, eliminaPatron};


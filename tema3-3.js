/*
    Ejercicio 3. Contar vocales en una cadena:
        Crea una función llamada contarVocales que tome una cadena como argumento y devuelva el número de vocales
        que contiene. Para resolverlo utiliza de referencia la siguiente constante:
            const vocales = "aeiouAEIOU";
*/

// Typeof variable is string

/**
 * Cuenta el número de vocales en una cadena.
 * 
 * @param {string} str - La cadena.
 * @return {number} - El número de vocales que contiene la cadena.
 */

function countVocales (str) {
    const vocales = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vocales.includes(str[i])) {
            count++;
            console.log(`La letra ${str[i]} es una vocal y el contador es: ${count}`);
        }
    }
    return console.log(`El numero de vocales que contiene la palabra ${str} es: ${count}`);
}

countVocales("Hola Mundo"); // El numero de vocales que contiene la palabra Hola Mundo es: 4;
/*
    Ejercicio 2. Escribe una o varias funciones para que, dado un string, devuelva un array que contenga la posición
    que ocupa cada carácter en el abecedario. Para que sea más sencillo, elimina los espacios y tildes (reutilizando las
    funciones de ejercicios anteriores).
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
*/
// Typeof variable is string

/**
 * Función que elimina las tildes de una cadena de texto.
 * @param {*} text 
 * @returns 
 */
function removeAccents(text) {
    const mapAccents = {
        "á": "a",
        "é": "e",
        "í": "i",
        "ó": "o",
        "ú": "u"
    };
    let textWithoutAccents = "";
    for (let i = 0; i < text.length; i++) {
        const character = text[i];
        textWithoutAccents += mapAccents[character] || character;
    }
    return textWithoutAccents;
}

/**
 * 
 * @param {string} str - The string to be converted to an array of positions in the alphabet.
 * @return {number[]} - The array of positions in the alphabet.
 */

function stringToAlphabetPosition(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'; // The alphabet
    const positionCharacters = []; // The array of positions in the alphabet
    str = str.toLowerCase(); // Convert the string to lowercase
    // Remove spaces
    while (str.includes(" ")) {
        str = str.replace(" ", "");
    }
    // Remove accents
    str = removeAccents(str);
    // Get the position of each character in the alphabet
    for (let i = 0; i < str.length; i++) {
        const character = str[i];
        const position = alphabet.indexOf(character) + 1;
        positionCharacters.push(position);
    }
return positionCharacters;
}

console.log(stringToAlphabetPosition("Hola, mundo!")); // [8, 15, 12, 1, 13, 21, 14, 4, 15]
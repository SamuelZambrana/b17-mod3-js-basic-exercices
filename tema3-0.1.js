/*
    Ejercicio. Escribe tu versión de la función que calcula si una cadena de texto es un palíndromo usando los pasos
    que puedes ver a continuación. Ejemplo de palíndromo: "Dábale arroz a la zorra el abad".
        ● Primer paso sería dejar la cadena de texto con un formato para poder comparar sus partes:
        ○ Todo el texto en minúsculas.
        ○ Eliminar los espacios.
        ○ Eliminar las tildes.
        ● Si la longitud del texto es impar, eliminar el character central.
        ● Dividir la cadena en dos partes de igual longitud.
        ● Darle la vuelta a una de las 2 partes de la cadena.
        ● Devolver el resultado de comparar las dos partes de la cadena.
*/

//typeof variable is string

/*
Palindromo es aquella palabra o frase que leyendolo de izquierda a derecha 
o de derecha a izquierda se lee igual.
*/

/**
 * Verifica si una cadena de texto es un palíndromo.
 * 
 * @param {string} text - La cadena de texto a verificar.
 * @return {boolean} - True si la cadena es un palíndromo, false en caso contrario.
 */
function isPalindrome(text) {
    /* 
    Paso 1:Convertimos el texto en minuscula con el metodo toLowerCase(Para cuando te lo introducen en mayusculas)
        eliminamos los espacios con el metodo includes y replace en un bucle while 
        y eliminamos las tildes creando un objeto con cada vocal con tilde como clave y su valor la vocal sin tilde.
        Creamos una funcion removeAccents que recibe el texto y recorre cada caracter del texto y si el caracter
        tiene tilde te lo devuelve sin tilde ya formateado, si no tiene tilde te lo devuelve igual.   
    */
    text = text.toLowerCase()
    while (text.includes(" ")) {
        text = text.replace(" ", "");
    }
    text = removeAccents(text);
    /* 
    Paso 2: Creamos una funcion removeCharacterCenter que recibe el texto y si la longitud del texto es impar
            calcula el indice del caracter central y elimina el caracter central de la cadena de texto.
    */
    text = removeCharacterCenter(text);
    // Paso 3: Dividir la cadena en dos partes de igual longitud.
    let firstHalf = text.slice(0, text.length / 2);
    let secondHalf = text.slice(text.length / 2);
    // Paso 4: Le damos la vuelva a la segunda parte de la cadena.
    secondHalf = secondHalf.split("").reverse().join("");
    // Paso 5: Decolvemos el resultado de comparar las dos partes de la cadena.
    return firstHalf === secondHalf;
}

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
 * Función que elimina el carácter central de una cadena de texto.
 * @param {*} text 
 * @returns 
 */
function removeCharacterCenter(text) {
    // Verifica si la longitud del texto es impar
    if (text.length % 2 !== 0) {
        // Calcula el índice del carácter central y lo redondeamos hacia abajo
        const centralIndex = Math.floor(text.length / 2);
        // Elimina el carácter central de la cadena de texto
        text = text.slice(0, centralIndex) + text.slice(centralIndex + 1);
    }
    return text;
}

console.log(isPalindrome("Dábale arroz a la zorra el abad")) // true
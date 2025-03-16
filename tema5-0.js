//Ejercicio.Escribe una función que cambie las claves (keys) de un objeto de snake_case a camelCase.

// Object with the information of a movie
const movie = {
    first_name: "Christopher",
    last_name: "Nolan",
    favorite_movie: "The Dark Knight",
}

/**
 * Convert the keys of the object to camelCase using the forEach method
 * @param {*} obj 
 * @returns 
 */
function camelCaseObjects(obj) {
    const newObj = {};
    Object.keys(obj).forEach(key => {
        const camelCaseKey = replaceHyphenAndCapitalize(key);
        newObj[camelCaseKey] = obj[key];
    });
    return newObj;
}

/**
 * Function that replaces the hyphens of a key with underscores and capitalizes the next character.
 * @param {} key - The key with hyphens.
 * @returns {} - The key with the hyphens replaced by underscores.
 */
function replaceHyphenAndCapitalize(key) {
    let newKey = '';
    let nextUppercase = false;
    
    for (let i = 0; i < key.length; i++) {
        if (key[i] === '_') {
            nextUppercase = true;
        } else {
            newKey += nextUppercase ? key[i].toUpperCase() : key[i];
            nextUppercase = false;
        }
    }
    return newKey;
}

console.log(replaceHyphenAndCapitalize("first_name")); // firstName
console.log(camelCaseObjects(movie)); // {firstName: "Christopher", lastName: "Nolan", favoriteMovie: "The Dark Knight"}
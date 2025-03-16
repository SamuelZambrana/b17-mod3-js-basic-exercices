/*
    Ejercicio 4. Agregar una nueva propiedad:
    Agrega una nueva propiedad llamada ciudad al objeto persona e 
    imprime el objeto por consola de nuevo.
*/

// TypeOf is Object

// Creación de un objeto person con tres propiedades.
const person = {
    name: "Samuel",
    age: 30,
    profession: "developer"
}

/**
 * Funcion para crear y cambiar la ciudad de una persona
 * @param {*} person  - Objeto persona
 * @returns   - Objeto persona con la ciudad cambiada
 */
const setCity = person => {
    person.city = "Malaga";
    return person;
}

console.log(setCity(person)); // { name: 'Samuel', age: 30, profession: 'developer', city:Malaga }
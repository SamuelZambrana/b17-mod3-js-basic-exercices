/*
    Ejercicio 3. Modificación de propiedades:
    Cambia la propiedad edad del objeto persona a 35. 
    Imprime el objeto modificado en la consola.
*/

// Creación de un objeto person con tres propiedades.
const person = {
    name: "Samuel",
    age: 30,
    profession: "developer"
}

// TypeOf is Object

/**
 * Funcion para cambiar la edad de una persona
 * @param {*} person  - Objeto persona
 * @returns   - Objeto persona con la edad cambiada
 */
const setAge = person => {
    person.age = 31;
    return person;
}

console.log(setAge(person));
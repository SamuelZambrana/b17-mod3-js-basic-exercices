/*
    Ejercicio 2. Acceso a propiedades:
    Accede a la propiedad nombre del objeto persona del ejercicio anterior y guárdala en una variable. Imprime la
    variable en la consola. Ahora trata de obtener constantes de las propiedades edad y profesión usando el
    destructuring. Imprimelas por consola.
*/


// Creación de un objeto person con tres propiedades.
const person = {
    name: "Samuel",
    age: 30,
    profession: "developer"
}

// Guardamos la propiedad name del objeto person en la variable name.
let name = person.name;
console.log(name);

const { age, profession } = person;
console.log(age, profession);
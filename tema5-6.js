/*
    Ejercicio 6. Iterar sobre un array de objetos:
    Utiliza un bucle para iterar sobre el array estudiantes e 
    imprimir en la consola el nombre y la calificación de cadaestudiante.
*/

// TypeOf is Array of Objects

const studients = [
    {
        name: "pepe",
        note: 5
    },
    {
        name: "juan",
        note: 7
    },
    {
        name: "manuel",
        note: 8
    }
]

/**
 * Funcion para recorrer un array de objetos y mostrar el nombre y la nota de cada estudiante
 * @param {*} studients  - Array de objetos
 * @returns   - Muestra en consola el nombre y nota de cada estudiante.
 */
const studient = studients.forEach(studient => {
    console.log(studient)
})

console.log(studient)  // [ { name: 'pepe', note: 5 }, { name: 'juan', note: 7 }, { name: 'manuel', note: 8 } ]
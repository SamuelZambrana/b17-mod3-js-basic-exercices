/*
    Ejercicio 1. 
    Escribe una o varias funciones que generen un array de 10 números aleatorios entre 0 y 100,
    encontrar el número más bajo y el más alto. Finalmente el resultado con estos números deben mostrarse en la
    consola. Recuerda utilizar los principios para escribir código limpio.
*/

// Typeof variable is number

/**
 * Genera un array de 10 números aleatorios entre 0 y 100.
 * 
 * @return {number[]} - El array de 10 números aleatorios.
 */

function generateRandomNumbers() {
    const numbers = [];
    for (let i = 0; i < 10; i++) {
        numbers.push(Math.floor(Math.random() * 101));
        console.log(`El iterador ${i + 1} contiene el numero: ${numbers[i]}, el array contiene: ${numbers}`);
    }
    return console.log(`Estos son los numeros aleatorios guardados en el array: ${numbers}`);
}

generateRandomNumbers(); // Estos son los numeros aleatorios guardados en el array;
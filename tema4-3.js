/*
    Ejercicio 3. Filtrar números pares:
    Crea un array de números. Utiliza el método filter para crear un nuevo array que contenga solo los números
    pares. Imprime por consola el nuevo array.
*/

// Typeof variable is array

/**
 * 
 * @param {number[]} numbers - The array of numbers to filter.
 * @return {number[]} - The array of even numbers.
 */

function filterEvenNumbers(numbers) {
    // Filter the even numbers
    const evenNumbers = numbers.filter(number => number % 2 === 0);
    return evenNumbers;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [2, 4, 6, 8, 10]
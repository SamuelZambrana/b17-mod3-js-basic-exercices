/*
    Ejercicio 6. Extraer una parte del array:
    Crea un array. Utiliza el método slice para crear un nuevo array que contenga una parte del array original.
    Imprime el nuevo array por consola.
*/

// Typeof variable is array

/**
 * 
 * @param {number[]} numbers - The array of numbers to extract a part.
 * @param {number} start - The index to start extracting.
 * @param {number} end - The index to end extracting.
 * @return {number[]} - The array with the extracted part.
 */

function extractPartOfArray(numbers, start, end) { 
    // Extract a part of the array using the slice method. This function returns a new array.
    const partOfArray = numbers.slice(start, end);
    return partOfArray;
}

console.log(extractPartOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 5)); // [3, 4, 5]
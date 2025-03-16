/*
    Ejercicio 5. Encontrar el primer número mayor que 3:
    Crea un array de números. Utiliza el método find para encontrar el primer número que sea mayor que 3. Muestra
    el resultado por consola.
*/

// Typeof variable is array

/**
 * 
 * @param {number[]} numbers - The array of numbers to find the first number greater than 3.
 * @return {number} - The first number greater than 3.
 */

function findFirstNumberGreaterThan3(numbers) {
    // Find the first number greater than 3 use the find method.
    const firstNumberGreaterThan3 = numbers.find(number => number > 3);
    return firstNumberGreaterThan3;
}

console.log(findFirstNumberGreaterThan3([2, 1, 3, 7, 8, 9, 10])) // 7
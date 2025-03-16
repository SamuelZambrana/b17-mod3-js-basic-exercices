/*
    Ejercicio 4. Multiplicar por 2:
    Crea un array de números. Crear un nuevo array donde cada elemento sea el doble del original. Imprime el nuevo
    array en la consola.
*/

// Typeof variable is array

/**
 * 
 * @param {number[]} numbers - The array of numbers to multiply by 2.
 * @return {number[]} - The array of numbers multiplied by 2.
 */

function numberMultiplyBy2(numbers) {
    // Multiply each number by 2 using the map method for transform the numbers.
    const numbersMultipliedBy2 = numbers.map(number => number * 2);
    return numbersMultipliedBy2;
}

console.log(numberMultiplyBy2([1, 2, 3, 4, 5])); // [2, 4, 6, 8, 10]
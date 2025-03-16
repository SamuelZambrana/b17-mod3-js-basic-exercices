/*
    Ejercicio. Escribe usando la recursividad, es decir, una función que se llama a sí misma resolviendo cada vez una
    parte más pequeña del problema, 
    una función que dado un número calcule el número de Fibonacci correspondiente.
    Def. Sucesión de Fibonacci:
    “Es una secuencia infinita de números naturales cuyos dos primeros términos son 1 y 1 y tal que, cualquier otro
    término se obtiene sumando los dos inmediatamente anteriores.”
    fib(1) = 1; fib(2) = 1; fib(n) = fib(n - 2) + fib(n-1);
*/

// Typeof variable is number

/**
 * Calcula el número de Fibonacci correspondiente a un número dado.
 * 
 * @param {number} n - El número para calcular su número de Fibonacci.
 * @return {number} - El número de Fibonacci correspondiente.
 */

function fib(n) {
    if (n === 1 || n === 2) {
        return 1;
    }
    return fib(n - 2) + fib(n - 1);
}

console.log(fib(1)); // 1
/*
    Ejercicio 1. Calculadora simple:
        Crea una función llamada calculadora que tome tres argumentos: dos números y un operador (+, -, *, /). La función
        debe realizar la operación correspondiente y devolver el resultado
*/

// Typeof variable is number

/**
 * Realiza una operación matemática simple entre dos números.
 * 
 * @param {number} num1 - El primer número.
 * @param {number} num2 - El segundo número.
 * @param {string} operator - El operador matemático a utilizar (+, -, *, /).
 * @return {string} - El resultado de la operación o un mensaje de error si el operador no es válido.
 */

function calcSimple (num1, num2, operator) {
    switch (operator) {
        case "+":
            return `The operator entered is ${operator} and its result is : ${num1 + num2}`;
        case "-":
            return `The operator entered is ${operator} and its result is: ${num1 - num2}`;
        case "*":
            return `The operator entered is ${operator} and its result is: ${num1 * num2}`;
        case "/":
            return `The operator entered is ${operator} and its result is: ${num1 / num2}`;
        default:
            return `The operator ${operator} is not valid`;
    }
}

console.log(calcSimple(5, 5, "+"));
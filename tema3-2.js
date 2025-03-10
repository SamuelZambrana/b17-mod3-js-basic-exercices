/*
    Ejercicio 2. Calcular el factorial de un número:
        Crea una función llamada factorial que tome un número entero positivo como argumento 
        y devuelva su factorial.
*/

// Typeof variable is number

//El factorial de un número natural es un número multiplicado por "número menos uno" , luego por "número menos dos" , y así sucesivamente hasta 1 .

/**
 * Realiza el factorial de un número entero positivo.
 * 
 * @param {number} num - El número entero positivo.
 * @return {number} - El factorial del número.
 */

function factorial (num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        console.log(`El iterador es : ${i} y es resultado es: ${result}`)
        result *= i;
    }
    return console.log(`The factorial of ${num} is: ${result}`);
}

factorial(10); // The factorial of 10 is: 120

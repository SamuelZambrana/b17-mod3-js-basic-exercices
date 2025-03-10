/*
    Ejercicio 4. Verificar si un año es bisiesto:
        ● Pide al usuario que ingrese un año.
        ● Utiliza una estructura if...else para determinar si el año es bisiesto.
        ● Un año es bisiesto si es divisible por 4, excepto si es divisible por 100, salvo que sea divisible por 400.
        ● Muestra un mensaje en la consola indicando si el año es bisiesto o no.
*/

// Typeof variable is number

/*
    Es bisiesto si es divisible por 4, excepto si es divisible por 100,
    salvo que sea divisible por 400.
*/

for (let i = 1; 1 < 10; i++) {
    const num = prompt("Enter a year: ");
    if (num % 4 === 0 && num % 100 !== 0 || num % 400 === 0) {
        console.log(`The year ${num} is a leap year`);
    } else {
        console.log(`The year ${num} is not a leap year`);
    }
}
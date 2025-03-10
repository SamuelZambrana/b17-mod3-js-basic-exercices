/*
    Ejercicio 5. Imprimir una tabla de multiplicar:
        ● Pide al usuario que ingrese un número.
        ● Utiliza un bucle for para iterar del 1 al 10.
        ● Dentro del bucle, calcula el producto del número ingresado y el número actual.
        ● Muestra el resultado en la consola en formato de tabla (por ejemplo, "5 x 1 = 5").
*/

// Typeof variable is number

/*
    El producto de un numero se obitine multiplicando el numero ingresado 
    por el numero actual y multiplicando los signos.
*/

for (let i = 1; i < 10; i++) {
    const num = prompt("Enter a number: ");
    console.log(`${num} x ${i} = ${num * i}`);
}
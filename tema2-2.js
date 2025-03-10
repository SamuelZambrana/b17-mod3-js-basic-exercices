/*
    Ejercicio 2. Imprimir los números pares del 1 al 20:
    ● Utiliza un bucle for para iterar del 1 al 20.
    ● Dentro del bucle, utiliza una estructura if para verificar si el número actual es par (utiliza el operador %).
    ● Si el número es par, imprímelo en la consola
*/

// Typeof variable is number

for (let i= 1; i < 20; i++) {
    if (i % 2 === 0) {
      console.log(`El numero: ${i} es par`)
    }
  }
  
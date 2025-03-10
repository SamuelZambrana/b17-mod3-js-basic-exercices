/*
    Ejercicio 3. Calcular la suma de los números del 1 al 10:
    ● Declara una variable suma e inicialízala en 0.
    ● Utiliza un bucle for para iterar del 1 al 10.
    ● Dentro del bucle, suma el número actual a la variable suma.
    ● Después del bucle, muestra el valor de suma en la consola.
*/

// Typeof variable is number

let sum = 0;

for (let i= 1; i < 10; i++) {
  sum += i;
}
console.log(`La suma de los numeros del 0 al 10 es : ${sum}`);
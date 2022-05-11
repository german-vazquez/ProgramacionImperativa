
// function diez (n){
//     for (let i=n+1; i < n+10; i++){
//         console.log(i)
//     }
// }

// diez(4)
// diez(6)

// function deTresEnTres(){
//     for (let i=5; i <= 20; i=i+3){
//         console.log(i)
//     }
// }

// deTresEnTres();

// function delUnoAlCien(){
//     let count = 0;
//     for (let i=0; i <= 100; i++){
//         count += i;
//     }
//     return count;
// }

// console.log(delUnoAlCien())


// function factorial(n){
//     let total = 1;
//     for (let i=n; i > 0; i--){
//         total = total * i;
//     }
//     return total;
// }

// console.log(factorial(4));
// console.log(factorial(6));

function fibonacci (maximo){
    let n1 = 0;
    let n2 = 1;
    let n3 = n1 + n2;
    while(n3 <= maximo){
        console.log(n3);
        n1 = n2;
        n2 = n3;
        n3 = n1 + n2;
    }
}
fibonacci(40);
/*1. Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.*/

/*2. Imprimir los números entre el 5 y el 20, saltando de tres en tres.*/

/*3. Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100*/

/*4. Dado un número entero positivo, mostrar su factorial. El factorial de un número se obtiene multiplicando todos los números enteros positivos que hay entre el 1 y ese número.*/

/*5. Crear una función que muestre todos los números de la secuencia de fibonacci hasta el valor ingresado por parámetro.*/

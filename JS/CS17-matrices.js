// sumando filas y columnas

let array =[];
array[0] = [12,33];
array[1] = [6,21];

console.log(array [0][0]);
console.log(array[1][0]);
console.table(array);

// RECORRIENDO filas y columnas, en este caso con una suma de los elementos de una fila

// let suma=0;
// for(let i=0;i<2;i++){
//     suma+= array[0][i]
// }
// console.log(suma);

// otra forma de expresar
// const fila = 1;
// let suma=0;
// for(let i=0; i<array[fila].length; i++){
//     suma+= array[fila][i]
// }
// console.log(suma);

const columna = 1;
let suma=0;
for(let i=0; i<array.length; i++){
    suma+= array[i][columna]
}
// console.log(suma);

// TABLAENTERA sumando toda la tabla

let arrayDos = [];
arrayDos[0] = [12,89,33];
arrayDos[1] = [6,76,21];

// array.length -> me cuenta la cantidad de elementos del array --> es decir 2
// array[0].length -> me cuenta la cantidad de elementos de la linea 0, es decir 3, es decir la cantidad de columnas.

for(let i=0; i<array[fila].length; i++){
    for(let i=0; i<array.length; i++){}
};


let sumatoria=0;
for(let col=0; col<array.length; col++){
    for(let fil=0;fil<array[col].length;fil++){
        sumatoria+=array[col][fil];
    }
}
console.log(sumatoria);
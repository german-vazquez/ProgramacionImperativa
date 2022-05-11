// realizar una función que determine si una matriz es una matriz unidad (tiene todos los elementos de la diagonal=1 y el resto igual a cero)

// matriz a verificar
let mat= [
    [1,0,0,0,0],
    [0,1,0,0,0],
    [0,0,1,0,0],
    [0,0,0,1,0],
    [0,0,0,0,1],
];
/*
// ALTERNATIVAA 
function verifica(laMatriz){
    // verificar si es una matriz unidad
    // presupongo que es cuadrada y que es matriz unidad
    let estaBien= true;

    for(let i = 0; i < laMatriz.length; i++){
        for(let j = 0; j < laMatriz.length; j++){
            // si es diagonal principal i=j =1
            if(i==j && laMatriz[j][i]!=1){
                estaBien=false;
            }
            // si es otro valor, debe ser 0
            if(i!=j && laMatriz[j][i]!=0){
                estaBien=false;
            }
        }
    }
    return estaBien;
}

console.log(verifica(mat));

*/

// ALTERNATIVAB no dejando terminar el for en caso que no se cumpla la condición
/*
function verifica(laMatriz){
    // verificar si es una matriz unidad
    // presupongo que es cuadrada y que es matriz unidad

    for(let i = 0; i < laMatriz.length; i++){
        for(let j = 0; j < laMatriz.length; j++){
            // si es diagonal principal i=j =1
            if(i==j && laMatriz[j][i]!==1){
                return false;
            }
            if(i!==j && laMatriz[j][i]!==0){
                return false;
            }
        }
    }
    return true;
}
console.log(verifica(mat));

// ALTERNATIVAC usando el booleano en el for
function verifica(laMatriz){
    // verificar si es una matriz unidad
    // presupongo que es cuadrada y que es matriz unidad
    let estaBien = true; 
    for(let i = 0; i < laMatriz.length && estaBien; i++){
        for(let j = 0; j < laMatriz.length && estaBien; j++){
            // si es diagonal principal i=j =1
            if(i==j && laMatriz[j][i]!==1){
                estaBien = false;
            }
            if(i!==j && laMatriz[j][i]!==0){
                estaBien = false;
            }
        }
    }
    return estaBien;
}
console.log(verifica(mat));
*/


// transformar un vector numerico, reemplazando a cada valor con el cuadrado de dicho valor.


let vector[2,4,6,8];

let nuevoVector=[];
function cuadrado(vector){
    for(let i=0; i< vector.length; i++){
        vector[i]=pow(vector[i]);
    }
}

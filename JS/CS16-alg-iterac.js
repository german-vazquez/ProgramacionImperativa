function mayorUno(a,b){
    if (a>b){
        return a;
    } else  {
        return b;
    }
}
// console.log(mayorUno(10,9));

// TERNARIAS ahora con funciones...

function mayorDos (a,b){
    return a>b? a:b;
}
// console.log(mayorDos(10,19));

// MAYORDETRES con tres valores

function mayorTres (a,b,c){
    return mayorDos(mayorDos(a,b),c);
}
// console.log(mayorTres (10,15,2));

// MAYORDECUATRO cuatro valores, dos maneras

function mayorCuatro (a,b,c,d){
    return mayorDos(mayorDos(a,b), mayorDos(c,d));
}
// console.log(mayorCuatro(23,232,55,22));

function mayorCuatroB (a,b,c,d){
    return mayorDos(mayorTres(a,b,c), d);
}
// console.log(mayorCuatroB(34,35,36,37));

// MAYORCONMATH no importa la cantidad de valores a comparar

// console.log(Math.max(15,8,5,4,9,15,1,1,7,5,66,9,99,10));

// MAYORDELARRAY 

const lista=[34,26,56,877,51,563,998];

function elMayor(array){
    let maxi =0;
    for(let i=0; i<array.length; i++){
        if(array[i] > maxi){
            maxi = array[i];
        }
    }
    return maxi;
}
// console.log(elMayor(lista));

//                          --> ahora con negativos

const listaDos=[-34,-26,-56,-877,-51,-563,-998];

function elMayorNegativo(array){
    let maxi = array[0]; /* --> ya no me sirve poner el cero como maxi porque serìa el mayor.*/
    for(let i=1; i<array.length; i++){ /* el let i=1 es porque ya pusimos el [0]como maxi */
        if(array[i] > maxi){
            maxi = array[i];
        }
    }
    return maxi;
}
// console.log(elMayorNegativo(listaDos));

//              --> ahora usamos como maxi las posiciones del array y nos evitamos una variable

function elMayorNegativoDos(array){
    let maxi = 0; /* --> indica el indice del array.*/
    for(let i=1; i<array.length; i++){ /* el let i=1 es porque ya pusimos el [0]como maxi */
        if(array[i] > array[maxi]){
            maxi = i;
        }
    }
    return array[maxi];
}
// console.log(elMayorNegativoDos(listaDos));

// COMBINANDO la función anterior con funciones math para reemplazar el if

function otroMayor(array){
    let maximo = array[0];
    for(let i=1; i<array.length; i++){
        maximo = Math.max(maximo, array[i]);
    }
    return maximo;
}
console.log(otroMayor(listaDos));


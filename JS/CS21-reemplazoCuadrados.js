let numeros=[2,4,6,8];

function reemplazo(numeros){
    for(let i=0; i<numeros.length; i++){
        numeros.splice(i,1,numeros[i]*numeros[i]);
    }
    return numeros
}

console.log(reemplazo(numeros));
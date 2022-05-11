let numeros=[63,65,81,92,24,33,38,87];

for(let c=0; c<numeros.length;c++){
    // recorro el array
    for(let i=0;i<numeros.length-1;i++){
        // pregunto si están en orden de dos en dos
        if(numeros[i]>numeros[i+1]){
            // realizo el intercambio
            let temporario=numeros[i];
            numeros[i]=numeros[i+1];
            numeros[i+1]=temporario;
        }
    }
    for (let x=0; x<numeros.length; x++){
            console.log(numeros[x]);
    }
}

// ENOBJETOLITERAL Mismo algoritmo aplicado a objeto literal

let curso = [
{doc: 2345, nombre: "juan"},
{doc: 4333, nombre: "pedro"},
{doc: 334, nombre: "jacinto"},
{doc: 5343, nombre: "jose"}
];


for(let c=0; c<curso.length;c++){
    // recorro el array
    for(let i=0;i<curso.length-1;i++){
        // pregunto si están en orden de dos en dos
        if(curso[i].nombre>curso[i+1].nombre){
            // realizo el intercambio
            let temporario=curso[i];
            curso[i]=curso[i+1];
            curso[i+1]=temporario;
        }
    }
    for (let x=0; x<curso.length; x++){
            console.log(curso[x]);
    }
}
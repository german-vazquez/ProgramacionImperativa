const alumnos = [
  {
    id: 0,
    nombre: "Leandro",
    apellido: "Borrelli",
    legajo: 20210308,
    notas: [4,6,7,8,5],
    promedio: 6,
  },
  {
    id: 1,
    nombre: "Esteban",
    apellido: "Piazza",
    legajo: 20210211,
    notas: [5,8,4,7,9],
    promedio:6.6,
  },
  {
    id: 2,
    nombre: "Martin",
    apellido: "Cejas",
    legajo: 20210218,
    notas: [5,8,4,1,3],
    promedio:4.2,
  },
  {
    id: 3,
    nombre: "Karina",
    apellido: "Borgna",
    legajo: 20210516,
    notas: [6,7,4,8,5],
    promedio:6,
  },
  {
    id: 5,
    nombre: "Javier",
    apellido: "Riera",
    legajo: 20220125,
    notas: [9,8,7,8,5],
    promedio:7.4,
  },
];

/*
1 - a -> el archivo contiene un dato de tipo array de objetos literales
    b -> las propiedades que tiene son id, nombre, apellido, legajo y notas.
    c -> asignar 5 notas a cada alumno
    */


// 2 - función que ordene la estructura según legajo.


function mostrar(elArray){
    for(let i=0; i<elArray.length; i++){
        console.log(elArray[i]);
    }
}

// mostrar(alumnos);  // muestra el objeto original sin orden

for (let i=0; i<alumnos.length; i++){
    for(let q=0; q<alumnos.length-1; q++){
        if(alumnos[q].legajo>alumnos[q+1].legajo){
            let temporal=alumnos[q];
            alumnos[q]=alumnos[q+1];
            alumnos[q+1]=temporal;
        }
    }
    }
// mostrar(alumnos); // muestra el objeto ordenado por legajo 



// 3 - crear función que ordene las notas de forma ascendente


// for(let c=0; c<alumnos.length;c++){
//     // recorro el array
//     for(let i=0;i<alumnos.length-1;i++){
//         // pregunto si están en orden de dos en dos
//         if(alumnos.notas[i]>alumnos.notas[i+1]){
//             // realizo el intercambio
//             let temporario=alumnos.notas[i];
//             alumnos.notas[i]=alumnos.notas[i+1];
//             alumnos.notas[i+1]=temporario;
//         }
//     }
//     for (let x=0; x<alumnos.length; x++){
//             console.log(alumnos[x]);
//     }
// }
// no logro encontrar el error para ordenar las notas!!!

    
    // 4 - crear un método para cada objeto literal que retorne el promedio de notas

let notasBorelli = [9,8,7,8,5]
// console.log(notasBorelli);

let curso ={
    alumnos : alumnos,
    promedioNotas: function(arrayNotas){    
        let suma=0;
        for (numero of arrayNotas){
            suma+=numero;
        }
        console.log("el promedio es: ");
        return (suma/arrayNotas.length);
    }
}

// console.log(curso.promedioNotas(notasBorelli));

    // 5 - crear una función que retorne un array con todos los estudiantes que tengan promedio menor a 7


    function mostrar(elArray){
        for(let i=0; i<elArray.length; i++){
            console.log(elArray[i]);
        }
    }
    
    
    for (let i=0; i<alumnos.length; i++){
        for(let q=0; q<alumnos.length-1; q++){
            if(alumnos[q].promedio>alumnos[q+1].promedio){
                let temporal=alumnos[q];
                alumnos[q]=alumnos[q+1];
                alumnos[q+1]=temporal;
            }
        }
    }
    
    mostrar(alumnos);  // muestra los alumnos por orden de promedio ascendente




/*Ejercicio 2
*/
let matriz=[
    [1135,2500, 900],
    [1750,1890,1900],
    [1135,2500, 900],
];

console.table(matriz);


//SUMADIAGONAL 

function suma(matriz){
    let suma=0;
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz.length; j++){
            if(i==j){
                suma+=matriz[i][j]
            }
            
        }
    }
    return suma;
}
console.log(suma(matriz));



// SUMATOTAL 
function sumaTotal(){
    let suma=0;
    for(let fila=0; fila<3 ; fila++){
        for(let col=0; col<3; col++){
            suma+=matriz[fila][col];
        }
    }
    return suma;
}
console.log(sumaTotal(matriz));
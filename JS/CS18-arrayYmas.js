// // crear un array de 5x5
// let elArray= [];
// let linea=[0,0,0,0,0];
// for(let i=0; i<5; i++){
//     elArray.push(linea);
// }
// console.table(elArray);

// // crear un array de 20 x 20

// let elArrayXl = [];
// let lineaXl = [];
// for (let j=0; j<20 ; j++){
//     lineaXl.push(0);
// }
// for (let k=0; k<20; k++){
//     elArrayXl.push(lineaXl);
// }
// console.table(elArrayXl);


// DESAFIO 

// Tengo una aplicación para registrar gastos cotideanos, el registro guarda por semana, suponemos que los meses tienen 4 semanas, entonces mis gastos estarán representados de 4 x 7
// dentro de cada día y semana tendré los gastos.
// punto A -> total de gastos en una semana
// punto B -> total de gastos por dias de la semana
// punto C -> total de gasto mensual

let gastoMensual=[
    [1135,2500, 900, 1600, 2800,3650,1100],
    [1750,1890,1900,1300,898,1750,2800],
    [1135,2500, 900, 1600, 2800,3650,1100],
    [1750,1890,1900,1300,898,1750,2800]
];

// GASTOSEMANAL 

// function sumaFila(x){
//     let sumaGasto=0;
//     // recorro fila x sumando elementos;
//     for(let dia=0;dia<7;dia++){
//         sumaGasto+= gastoMensual[x][dia];
//     }
//     return sumaGasto;
// }
// console.log(sumaFila(2));

// GASTODIADELASEMANA 
// sumar columna
function sumaColumna(y){
    let sumaGasto=0;
    // recorro columna y sumando elementos
    for(let semana=0;semana<4;semana++){
        sumaGasto+=gastoMensual[semana][y];
    }
    return sumaGasto;
}
console.log(sumaColumna(1));

// SUMATOTALGASTO 

function sumaTotal(){
    let sumaGastos=0;
    for(let semana=0; semana<4 ; semana++){
        for(let dia=0; dia<7; dia ++){
            sumaGastos+=gastoMensual[semana][dia];
        }
    }
    return sumaGastos;
}

console.log(sumaTotal());
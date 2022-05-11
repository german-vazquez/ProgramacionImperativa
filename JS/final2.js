
let matriz=[
    [1135,2500, 900],
    [1750,1890,1900],
    [1135,2500, 900],
];

console.table(matriz);


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
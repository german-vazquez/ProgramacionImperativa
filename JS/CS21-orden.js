/* Ejercicio 1
En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—. */
let likes = [
    {usuario: 1, likes: Math.floor((Math.random() * 100) + 1)},
    {usuario: 2, likes: Math.floor((Math.random() * 100) + 1)},
    {usuario: 3, likes: Math.floor((Math.random() * 100) + 1)},
    {usuario: 4, likes: Math.floor((Math.random() * 100) + 1)},
    {usuario: 5, likes: Math.floor((Math.random() * 100) + 1)},
    {usuario: 6, likes: Math.floor((Math.random() * 100) + 1)},
    {usuario: 7, likes: Math.floor((Math.random() * 100) + 1)},
    {usuario: 8, likes: Math.floor((Math.random() * 100) + 1)},
    {usuario: 9, likes: Math.floor((Math.random() * 100) + 1)},
    {usuario: 10, likes: Math.floor((Math.random() * 100) + 1)},
    {usuario: 11, likes: Math.floor((Math.random() * 100) + 1)},
    {usuario: 12, likes: Math.floor((Math.random() * 100) + 1)},
    {usuario: 13, likes: Math.floor((Math.random() * 100) + 1)},
    {usuario: 14, likes: Math.floor((Math.random() * 100) + 1)},
    {usuario: 15, likes: Math.floor((Math.random() * 100) + 1)},
];
function mayorCantidad(arr){
    let final = []
    for(let i=0; i<arr.length; i++){
         for(let x =0; x<arr.length-1; x++){
              if(arr[x].likes>arr[x+1].likes){
                   let aux = 0;
                   aux = arr[x];
                   arr[x] = arr[x+1];
                   arr[x+1] = aux;
              }
         }
    }
    final[0] = arr[14]
    final[1] = arr[13]
    final[2] = arr[12]
    final[3] = arr[0]
    return final
}
console.log(mayorCantidad(likes));

/* Ejercicio 2
El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
objeto temperatura donde registra día —valor numérico del día—, mes —valor
numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
día. Las temperaturas —objeto temperatura— están cargados en un array.
a) Ordenar por temperatura mínima de menor a mayor.
b) Ordenar por temperatura máxima de mayor a menor. */
let dias = [
    {dia: 1, mes:4, tempMax:10, tempMin:29},
    {dia: 2, mes:4, tempMax:11, tempMin:28},
    {dia: 3, mes:4, tempMax:12, tempMin:24},
    {dia: 4, mes:4, tempMax:13, tempMin:23},
    {dia: 5, mes:4, tempMax:14, tempMin:24},
];

function tempMin(arr){
    for(let i=0; i<arr.length; i++){
         for(let x =0; x<arr.length-1; x++){
              if(arr[x].tempMin>arr[x+1].tempMin){
                   let aux = 0;
                   aux = arr[x];
                   arr[x] = arr[x+1];
                   arr[x+1] = aux;
              }
         }
    }
    return arr
}
console.log(tempMin(dias));
function tempMax(arr){
    for(let i=0; i<arr.length; i++){
         for(let x =0; x<arr.length-1; x++){
              if(arr[x].tempMax<arr[x+1].tempMax){
                   let aux = 0;
                   aux = arr[x];
                   arr[x] = arr[x+1];
                   arr[x+1] = aux;
              }
         }
    }
    return arr
}
console.log(tempMax(dias));
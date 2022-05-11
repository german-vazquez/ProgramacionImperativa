// Ejercicio: ordenar una colección de personas por una propiedad
// Ordenar por estatura

let personas =[
    {
        nombre: "Dua",
        apellido: "Lipa",
        ocupacion:"cantante",
        estatura:173
    },
    {
        nombre: "Ariana",
        apellido: "Grande",
        ocupacion:"cantante",
        estatura:160
    },
    {
        nombre: "Taylor",
        apellido: "Swift",
        ocupacion:"cantante",
        estatura:180
    },
];
// función para mostrar los elementos del array
function mostrar(elArray){
    for(let i=0; i<elArray.length; i++){
        console.log(elArray[i]);
    }
}

mostrar(personas);

for (let i=0; i<personas.length; i++){
    for(let q=0; q<personas.length-1; q++){
        if(personas[q].estatura>personas[q+1].estatura){
            let temporal=personas[q];
            personas[q]=personas[q+1];
            personas[q+1]=temporal;
        }
    }
}
mostrar(personas);
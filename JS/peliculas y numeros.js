let numbers = [22, 33, 54, 66, 72]
console.log(numbers.length);
console.log(numbers[numbers.length])
// Devuelve undefinde proque busca en la posicion 5 del array

let grupoDeAmigos = [ "Harry", "Ron", "Hermione", "Spiderman", "Hulk", "Ironman","Penélope Glamour", "Pierre Nodoyuna","Patán" ]
console.log(grupoDeAmigos[5]);
// Devuelve ironman porque el primer elemento del array es 0

let str = "un string cualquiera"
let arrayAleatorio = ["Digital", "House", "true", "string", "123","false", "54", str ]
                    // 0          1          2      3        4       5     6     7 
console.log(arrayAleatorio[arrayAleatorio.length - 1]);
// Si a la cantidad de elementos de un array le restamos 1 nos da el ultimo elemento de este

/* 
El tech leader del equipo necesita conocer la estructura de datos del nuevo proyecto.
Para esto, deberás:
1. Crear la estructura adecuada para guardar las siguientes películas:
"star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
Importante: verificá que todo funciona correctamente accediendo a alguna de
las películas una vez creada la estructura correspondiente.
*/

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

/* 
Más tarde, de producción dieron el aviso de que las películas deberían estar
todas en mayúsculas. Para esto solicitan que crees una función que reciba por
parámetro un array y convierta el contenido de cada elemento a mayúsculas.
Pista: revisá qué hace el método de strings .toUpperCase().
*/

const setMayusculas =  (peliculas)=> {
  let nuevasPelis = [];
  for(let i = 0; i < peliculas.length; i++){
    nuevasPelis.push(peliculas[i].toUpperCase())
  }
  return nuevasPelis;
}
// Recorremos el array y le cambiamos a mayuscula cada elemento
let peliculasEnMayusculas = setMayusculas(peliculas);
console.log(peliculasEnMayusculas);

/* 
Mientras trabajabas en el feature anterior, se dio el aviso de que también hay
que crear otra estructura similar a la primera, pero con las siguientes películas
animadas:
"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Por lo tanto, te piden crear una función que reciba dos arrays como
parámetros, para poder agregar los elementos contenidos en el segundo array
dentro del primero, y así retornar un solo array con todas las películas como
sus elementos.

Importante: las películas animadas también deberían convertirse a
mayúsculas. */

let nuevasPeliculas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
//metodo de funcion 
function mezclar(primer, segundo){
  for(let i = 0; i < segundo.length; i++){
    primer.push(segundo[i].toUpperCase())
  }
  console.log(primer)
}

mezclar(peliculasEnMayusculas, nuevasPeliculas)
// metodo desestructurando
let todasLaspeliculas = [...setMayusculas(peliculas), ...setMayusculas(nuevasPeliculas)];
//                 ...peliculas -> "asdasd", "asdsadsad", "sadasdasdasd", "sadasdasdas" 
//console.log(``)

console.log(todasLaspeliculas)



/*Durante el proceso, uno de los desarrolladores advierte que el último elemento
del array de películas animadas es un videojuego. Ahora tenés que editar el
código y modificarlo de manera que puedas eliminar ese último elemento
antes de migrar el contenido al array que contenga todas las películas.
PD: por precaución, guardá el elemento que vas a eliminar en una variable*/


let fortnite = peliculasEnMayusculas.pop();
console.log(peliculasEnMayusculas);

console.log(fortnite);

/* 
Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios
del mundo sobre las películas con el siguiente formato:
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
Te piden crear una función que compare las calificaciones e indique si son
iguales o diferentes. Te confirman que están en el orden adecuado y que solo
traen valores numéricos del 1 al 10.
PD: los elementos de los scores tanto de Asia como de Europa corresponden
en orden al del array resultante de combinar películas con películas animadas.
Es decir, el primer elemento del array de películas general corresponde al
primer elemento de asiaScores y al primer elemento de euroScores, y así
sucesivamente. :)
*/

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
function comparar(peliculas, score1, score2) { 
  for(let i in peliculas){
    if(score1[i] !== score2[i] || score1[i] > 10 || score2[i] > 10) return false
  }
  return true
}

comparar(peliculasEnMayusculas)




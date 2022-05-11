/*
Te contactan desde un teatro donde hace falta determinar el ganador de un concurso de stand up que consta de tres presentaciones por participante. Te piden que armes el programa que determine al ganador y, a continuación, te explican el funcionamiento del consurso para que lo tengas en cuenta a la hora de realizar el programa.
El público, máximo 100 personas, votó quien considera que estuvo mejor al terminar cada etapa. por ejemplo, sube Alicia, se presenta y baja; sube  Bob, se presenta y baja. Terminadas ambas presentaciones, el público vota indicando quién cree que ganó esa tanda. Luego, continúa la siguiente tanda, igual que la primera. Y finalmente, una tercera. ¿Cómo represntarías en una tabal tipo planilla de calculos este problema?
Cómo estos concursos se dan online, ocurren miles cada día. A tu servidor llega la información por cada concurso en formato de arrays, uno por cada participante. Por lo tanto, los recibis así:
alicia=[10,80,75];
bob=[90,20,25];
La tarea consiste en enfrentar estas votaciones comparando a[0] con b[0], a[1] con b[1]...
Los puntos ganados en la comparación de cada bloque son los puntos totales de la persona y no los votos.
Dadas las consignas y cómo funciona el sistema de puntos, deberás calcular y encontrar al ganador utilizando una estructura for que evite tenenr que calcular cada tanda por separado.
Para organizar la información, te pedimos crear el objeto literal Concurso con una propiedad etapas que indicará el resultado parcial por cada etapa. Además, tendrá una propiedad ganador que guardará el ganador (en caso de que exista) con un strign. Te pedimos además que la función encontrarGanador sea un método del ojeto literal Concurso.
Para finalizar, se necesita enviar los resultados a otra aplicación, por lo que deberán crear un JSON con la propiedad etapas para poder compartirlo. Crea un método exportarResultados que haga esta conversión.
*/

let alicia=[10,80,75];
let bob=[90,20,25];
let contador=[0,0];
let elGanador="";

let concurso={
    etapas: contador,
    ganador: elGanador,
    encontrarGanador:function(a,b){
        for(i=0; i<alicia.length;i++){
            if(a[i]<b[i]){
                this.etapas[1]++;
            }if(a[i]>b[i]){
                this.etapas[0]++;
            }
        }
        if(this.etapas[0]>this.etapas[1]){
            return this.ganador="alicia"
        }if(this.etapas[0]<this.etapas[1]){
            return this.ganador="bob"
        }
    },
    exportarResultados:function(){
        return JSON.stringify(this.etapas);
    }
}

console.log(concurso.encontrarGanador(alicia,bob));
console.log(concurso);
console.log(concurso.exportarResultados());


/*
digitalHouse()
creá una funcion digitalHouse que reciba 2 numeros como parámetros. La función deberá imprimir por tantalla los números del 1 al 100, pero teniendo en cuenta los siguientes criterios:
-si el número a imprimir es múltiplo del primer parámetro que se ingresó, deberá mostrar el string "Digital" en lugar del número.
-si el número a imprimir es múltiplo del segundo parámetro ingresado, deberá mostrar el string "House" en su lugar del número.
-si el número a imrpimir es multiplo de ambos parámetros, deberá mostrar el string "Digital House" en lugar del número.
*/
function digitalHouse(x,y){
    for(i=1; i<=100;i++){
        let a=i;
        if(i%x==0){
            a="Digital";
        }if(i%y==0){
            a="House";
        }if(i%x==0 && i%y==0){
            a="Digital House";
        
        };
        
        console.log(a);
    }
}


console.log(digitalHouse(2,3));


/*
sumArray()...Reloaded
Vmos a retomar el ejercicio sumArray() que hicimos clases atrás, pero esta vez lo modificaremos para que pueda recibir un array de números de cualquier cantidad de elementos.
Si no recordás el enunciado original: deberás crear una función sumaArray que acepte un arreglo de números y devuelva la suma de todos ellos.
Ejemplo:
-sumArray[(1,2,3)] //6
sumArray([10,3,10,4]) //27
sumArray([-5,100])//95

Ya que estamos con funciones nuevamente, hagamos lo propio con la función del ejercicio simulacion join(). Deberás modificar la función join() de manera que pueda recibir un array de strings de cualquier cantidad de elementos.
ejemplo:
join(["h","o","l","a"]) debe retornar el string "hola".
*/

function sumaArray(arrayNum){
    let suma=0;
    for(let elemento of arrayNum){
        suma +=  elemento;
    }
    return suma;
}

console.log(sumaArray([34,32,55,12]));

function join(arrayLett){
    let string =
}
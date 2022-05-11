const prompt = require("prompt-sync")({ sigint: true });

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

function menorDeEdad(array){
    let resultado = []
    for(let i = 0; i<array.length;i++){
        array[i]<18 ? resultado.push(array[i]) : '';
    }
    return resultado;
}

//console.log(menorDeEdad(edades));

function mayorDeEdad(array){
    let resultado = []
    for(let i = 0; i<array.length;i++){
        array[i]>=18 ? resultado.push(array[i]) : '';
    }
    return resultado;
}

//console.log(mayorDeEdad(edades));

function igualA18(array){
    let resultado = []
    for(let i = 0; i<array.length;i++){
        array[i]===18 ? resultado.push(array[i]) : '';
    }
    return resultado;
}

//console.log(igualA18(edades));

function menor(array){
    let resultado = [array[0]]
    for(let i = 0; i<array.length;i++){
        array[i]<resultado[0] ? resultado = [array[i]] : '';
    }
    return resultado;
}

//console.log(menor(edades));

function mayor(array){
    let resultado = [array[0]]
    for(let i = 0; i<array.length;i++){
        array[i]>resultado[0] ? resultado = [array[i]] : '';
    }
    return resultado;
}

//console.log(mayor(edades));

function promedio(array){
    let resultado = 0
    for(let i = 0; i<array.length;i++){
        resultado+=array[i];
    }
    return resultado = resultado/array.length;
}

//console.log(promedio(edades));

function incremento(array){
    for(let i = 0; i<array.length;i++){
        array[i]++;
    }
    return array;
}

//console.log(incremento(edades));

const arrayCuentas =
[
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: "$3,253.40",
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: "$3,229.45",
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: "$1,360.19",
      edadTitular: 34,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: false,
      saldo: "$3,627.12",
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Ethel Leon",
      estaHabilitada: true,
      saldo: "$1,616.52",
      edadTitular: 34,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Harding Mitchell",
      estaHabilitada: true,
      saldo: "$1,408.68",
      edadTitular: 25,
      tipoCuenta: "corriente"
    }
]

function edadMenor30(array){
    let resultado = []
    for(let i = 0; i<array.length;i++){
        array[i].edadTitular < 30 ? resultado.push(array[i]) : '';
    }
    return resultado;
}

//console.log(edadMenor30(arrayCuentas));

function edadMayor30(array){
    let resultado = []
    for(let i = 0; i<array.length;i++){
        array[i].edadTitular >= 30 ? resultado.push(array[i]) : '';
    }
    return resultado;
}

//console.log(edadMayor30(arrayCuentas));

function edadIgual30(array){
    let resultado = []
    for(let i = 0; i<array.length;i++){
        array[i].edadTitular === 30 ? resultado.push(array[i]) : '';
    }
    return resultado;
}

//console.log(edadIgual30(arrayCuentas));

function menorCliente(array){
    let resultado = [array[0]]
    for(let i = 0; i<array.length;i++){
        array[i].edadTitular < resultado[0].edadTitular ? resultado = [array[i]] : '';
    }
    return resultado;
}

//console.log(menorCliente(arrayCuentas));

function separaObjetoLiteral(array){
    let resultado = []
    for(let i = 0; i<array.length;i++){
        resultado.push([array[i]]);
    }
    return resultado;
}

//console.log(separaObjetoLiteral(arrayCuentas));

function separaObjetoHabilitado(array){
    let resultado = []
    for(let i = 0; i<array.length;i++){
        array[i].estaHabilitada ? resultado.push(array[i]) : '';
    }
    return resultado;
}

//console.log(separaObjetoHabilitado(arrayCuentas));

function separaObjetoNoHabilitado(array){
    let resultado = []
    for(let i = 0; i<array.length;i++){
        array[i].estaHabilitada ? '' : resultado.push(array[i]);
    }
    return resultado;
}

//console.log(separaObjetoNoHabilitado(arrayCuentas));

function menorSaldo(array){
    let resultado = [array[0]]
    for(let i = 0; i<array.length;i++){
        array[i].saldo < resultado[0].saldo ? resultado = [array[i]] : '';
    }
    return resultado;
}

//console.log(menorSaldo(arrayCuentas));

function mayorSaldo(array){
    let resultado = [array[0]]
    for(let i = 0; i<array.length;i++){
        array[i].saldo > resultado[0].saldo ? resultado = [array[i]] : '';
    }
    return resultado;
}

//console.log(mayorSaldo(arrayCuentas));
/*
Descripción del problema
Desde un banco nos contactan para crear una aplicación que pueda facilitar el manejo de información y las acciones que el mmismo necesita. Nuestro teach leader nos facilita la forma de representar a los usuarios (cuentas bancarias). Cada una de estas cuentas tiene la siguiente información:
-N° de cuenta (solo numeros),
-Tipo de cuenta (cuenta corriente en pesos o caja de ahorro en pesos)
- Saldo en pesos (solo la cantidad)
- Titular de la cuenta (nombre completo)

Teniendo en cuenta esta información, se nos pide que hagamos lo siguiente:
1. Descargar y analizar el siguiente archivo, el cual contiene la lista de clientes (cuentas bancarias).
*/

//la lista de clientes.
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  { 
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];

/*
2. Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una propiedad llamada “clientes” que estará compuesta de la lista de objetos obtenidos en el punto anterior.
3. Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el objeto cliente que corresponda con ese nombre ingresado.
*/

let banco ={
  clientes: arrayCuentas,
  consultarCliente: function(titular){
    for(i=0; i<this.clientes.length;i++){
      let clienteEncontrado = this.clientes[i];
      if(clienteEncontrado.titularCuenta==titular){
        return clienteEncontrado;
      }
    }
  }
}
// console.log(banco.consultarCliente("Jacki Shurmer"));

/*
4. Crear otro método llamado depósito que recibirá dos parámetros: el titular de cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su nuevo saldo es: XXXX”.
5. Crear un último método llamado extracción que recibirá también dos parámetros: el titular de cuenta y el monto a extraer. El método debe obtener la cuenta correspondiente y restar el monto al saldo actual. En caso de que el resultado sea menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”. De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo saldo es: XXXX”.
*/

banco.deposito=function(titular,aDepositar){
  for(i=0; i<this.clientes.length;i++){
    let clienteEncontrado = this.clientes[i];
    if(clienteEncontrado.titularCuenta==titular){
      clienteEncontrado.saldoEnPesos=clienteEncontrado.saldoEnPesos+aDepositar;
      return "Deposito realizado, su saldo es: " + clienteEncontrado.saldoEnPesos;
    }
  }
}

// console.log(banco.deposito("Jacki Shurmer",2000));

banco.extraccion=function(titular,aDebitar){
  for(i=0; i<this.clientes.length;i++){
    let clienteEncontrado=this.clientes[i];
    if(clienteEncontrado.titularCuenta==titular){
      if(clienteEncontrado.saldoEnPesos>=aDebitar){
        clienteEncontrado.saldoEnPesos=clienteEncontrado.saldoEnPesos - aDebitar;
        return "Extracción realizada correctamente, su nuevo saldo es: " + clienteEncontrado.saldoEnPesos;
      }else{
        return "Fondos insuficientes"
      }
    }
  }
}
// console.log(banco.extraccion("Jacki Shurmer", 18789));

/*
Bonus Extra

Propiedad Única
Crear una función llamada propiedadUnica que reciba un arreglo de objetos como parámetro y un string. Esta deberá retornar un nuevo arreglo de objetos, teniendo como parámetro la propiedad que fue pasada como string.

Ejemplo: 
let array= [{nombre:"Lean", edad:27},{nombre:"Eze",edad:49}]
propiedadUnica(array,"edad") debe retornar [{edad:27},{edad:49}]
propiedadUnica(array,"nombre") debe retornar [{nombre:"Lean"},{nombre:"Eze"}]
*/

// let array= [{nombre:"Lean", edad:27},{nombre:"Eze",edad:49}]
// function propiedadUnica(array, "string"){
//   let newArray=[{array.string[0]}];
//   // for(i=1; i<array.length;i++){
//   //   newArray.push(array."string"[i]);
//   // }
// }

// console.log(propiedadUnica(array,"nombre"));
/*
Calculador de notas
Crear un objeto "alumno", el cual va a consistir de las siguientes propiedades básicas:
Nombre
Numero de legajo
Lista de notas
Nos gustaría calcular el promedio del alumno y si el mismo está aprobado, basado en una nota de aprobación que le va a ser dada. Para este ejercicio, vamos a dejar que pienses correctamente de la manera solicitada.
*/
let alumno={
  nombre: "juanito",
  numeroDeLegajo: 1477,
  listaDeNotas:[3, 5, 9, 13, 0], 
  promedio: 0,
  notaAprobacion: 7,
  condicion: "",
  calcularPromedio:function(listaDeNotas){
    let suma=0;
    for(i=0; i<this.listaDeNotas.length; i++){
      suma+=this.listaDeNotas[i];
    }
    let prom=suma/this.listaDeNotas.length
    //seria una función que sume los elementos del array y los divida en length
    return this.promedio=prom;
  },
  calcularCondicion:function(promedio){
    if (this.promedio<this.notaAprobacion){
      this.condicion="Desaprobado";
    }else{
      this.condicion="Aprobado"
    }
  }
}
console.log(alumno.calcularPromedio());
console.log(alumno.calcularCondicion());
console.log(alumno);
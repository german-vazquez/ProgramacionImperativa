function loopDePares(x){
     for(let i = 0; i <= 100; i++){
          let suma = i+x;
          console.log(i);
          if(suma%2==0){
               console.log(`El número ${suma} es par.`);
          }
     }
}

function loopDeImpares(num, pa){
     for(let i = 0; i <= 100; i++){
          let suma = i+num;
          if(suma%2!=0){
               console.log(pa);
          }else{
               console.log(i);
          }
     }
}

function sumatoria(numero){
     let acumulador = 0;
     for(let i = 0; i <= numero; i++){
          acumulador += i;
     }
     return acumulador;
}

function nuevoArreglo(numero){
     let arreglo = [];
     for(let i = 1; i <= numero; i++){
          arreglo[i-1] = i;
     }return arreglo;
}

function unSplit(string){
     let arreglo = [];
     for(let i = 0; i <= string.length-1; i++){
          arreglo[i] = string.slice(i, i+1);
     }return arreglo;
}

function caracterDelMedio(string){
     if(string.length%2!=0){
          return string[Math.trunc(string.length/2)]
     }else{
          return string[(string.length/2)-1]+string[(string.length/2)+1]
     }
}

function moverCeros(arreglo){
     let ArregloII = [];
     let arregloTemporal = [];
     for(let i = 0; i < arreglo.length;){
          if (arreglo[i]==0 && arreglo[i] !== false){
               arregloTemporal.push(arreglo.shift());               
          }else{
               ArregloII.push(arreglo.shift());
          }
     }
     return ArregloII.concat(arregloTemporal);
}
console.log(moverCeros([false,1,'0',1,2,0,1,3,"a"]));
console.log(moverCeros([1,2,0,1,0,1,0,3,0,1]));

function arrayHandler(arreglo1, arreglo2){
     for(let i = 0; i < arreglo1.length; i++){
          console.log(`Soy ${arreglo1[i]} y yo soy ${arreglo2[i]}`);
     }
}
arrayHandler([1,2,3,4], ['h','o','l','a']);

function toCamelCase(string){
     let aux = [];
     let final = string;
     if(string.lastIndexOf("_")==string.length-1){
          final = string.substring(0, string.length-2);
     }
     if(string.lastIndexOf("-")==string.length-1){
          final = string.substring(0, string.length-2);
     }
     
     for (let i=0; i<final.length; i++){
          if(final.charAt(i)=="_"){
               aux.push(i+1);
          }
          if(final.charAt(i)=="-"){
               aux.push(i+1);
          }
     }
     final = string.split("");
     if(final.includes("_")){
          for(let i = 0; i<aux.length; i++){
               final[aux[i]] =  final[aux[i]].toUpperCase();
          }
          final = final.toString();
          final = final.replace(/,/g, "")
          final = final.replace(/_/g, "")
     }
     if(string.includes("-")){
          for(let i = 0; i<aux.length; i++){
               final[aux[i]] =  final[aux[i]].toUpperCase();
          }
          final = final.toString();
          final = final.replace(/,/g, "")
          final = final.replace(/-/g, "")
     }
     return final;
}
console.log(toCamelCase("el-gato-guerrero-silencioso"));
console.log(toCamelCase("El_gato_guerrero_silencioso"));
console.log(toCamelCase("El-gato-con-botas"));
console.log(toCamelCase("El_gato_con_botas"));
console.log(toCamelCase("el-último-moicano-"));
console.log(toCamelCase("El_último_moicano_"));


function palindromo(string){
     let arreglo = string.toLowerCase();
     arreglo = arreglo.split("");
     arreglo.reverse();
     arreglo = arreglo.toString();
     arreglo = arreglo.replace(/,/g, "")
     arreglo = arreglo.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
     return arreglo == string.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}
console.log("Anilina");
console.log(palindromo("Anilina"));
console.log("anilina");
console.log(palindromo("anilina"));
console.log("Ana");
console.log(palindromo("Ana"));
console.log("Enrique");
console.log(palindromo("Enrique"));
console.log("elévele");
console.log(palindromo("elévele"))
console.log("ñoñoñ");
console.log(palindromo("ñoñoñ"));

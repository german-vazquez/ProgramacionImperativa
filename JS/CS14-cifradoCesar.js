const abcd=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let array = elTextoCifrado.split("");
let salida ="";

function descifra(elTextoCifrado){
    let elTextoCifrado = elTextoCifrado.toUpperCase();
    let array = elTextoCifrado.split("");
    for(let i=0; i< array.length; i++){
        let pos = abcd.indexOf(array[i]);
        if (pos == -1){
            salida= salida+" ";
        }else{
            if (pos==0){
                salida = salida + "Z"
            };
        salida=salida + abcd[pos-1]
        }
    }
    return salida
}




console.log(descifra("Rvf mj"));
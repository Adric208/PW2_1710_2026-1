//Funcion declarativa
//Se ejecutan desde el inicio del programa
function numeroAleatorio(min,max){
    return  Math.floor(Math.random()*(max-min)+min);
    
}

console.log(numeroAleatorio(1,11));

//Funcion expresada o anonima
// se ejecutan al ser llamadas
const miNumero = function numeroAleatorio(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}
console.log(miNumero(2, 20));
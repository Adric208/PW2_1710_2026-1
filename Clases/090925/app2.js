const frutas =["Banana"];


frutas.push("sandia");//al fina 
frutas.unshift("mango");//al inici
frutas.push("Melon");
frutas.unshift("Guayaba");
console.log(frutas);


//Completo
for(let fruta of frutas){
console.log(fruta);
 }

 //Eliminar
 console.log("------------------------------")
frutas.pop();//Elimina el ultimo 

 for(let fruta of frutas){
console.log(fruta);
 }
console.log("--------------")
frutas.shift()//Elimina el principio

 for(let fruta of frutas){
console.log(fruta);
 }








/*
const puerto = 3306;
puerto =3308;
console.log(puerto);
*/

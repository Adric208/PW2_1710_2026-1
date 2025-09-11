//Arreglo vacio
let nombre  = [];
function agregarNombre()
{
    let nombre= prompt("Ingresa el nombre")
    if (nombre){
        nombres.push(nombres)
        alert(`Nombre es ${nombre} agregado exitosamente `)
    } else {
        alert(`El nombre esta vacio`)
    }
}
function mostrarNombres(){
    if(nombres.length == 0){
        alter(`Arreglo Vacio`)
    }else{
        let mensaje="Nombres almacenados \n"
        nombres.array.forEach(nombre,index => {
            mensaje += `${index+1}. ${nombre}\n`;
        });
        alert(mensaje)
    }
}
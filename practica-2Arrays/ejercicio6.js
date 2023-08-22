/* Pide al usuario que ingrese cuántos elementos desea agregar al arreglo, utiliza un 
bucle para solicitar al usuario que ingrese cada elemento uno por uno y guárdalos en 
el arreglo, luego mostrarlos en consola.*/

let digitosArray = parseInt(prompt("Digite la cantidad de datos a ingresar"))
let datosArray = []

//Esta dentro de una validacion, para que si no se ingresa un numero valido el programa sabe que hacer
if (isNaN(digitosArray) || digitosArray <= 0){
    console.log("DEBE INGRESAR UN NUMERO MAYOR QUE 1!")
}else{
    for(let i = 0; i < digitosArray; i++){
        let dato = prompt(`Ingrese el dato ${i + 1}`)
        datosArray.push(dato);
        
    }
    console.log(datosArray)
}


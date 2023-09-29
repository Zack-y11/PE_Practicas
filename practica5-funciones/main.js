//  FUNCION SALUDO
const saludo = ()=>{
    console.log('Hola Margarita, gracias por la practica :D')
}
saludo()

//FUNCION SUMAR
const sumar = (a,b)=>{
    return a + b
}
console.log(sumar (5,9))

//FUNCION RESTAR 
const restar = (a,b)=>{
    return a - b
}
console.log(restar (5,9))
//FUNCION MULTIPLICAR
const multiplicar = (a,b)=>{
    return a * b
}
console.log(multiplicar (5,9))
//FUNCION CALCULAR AREA RECTANGULO

function calcularAreaRectangulo (longitud, anchura){
    return longitud * anchura
}
console.log(`El area del rectangulo es ${calcularAreaRectangulo(5,4)}`)

//NUMERO PAR
const esNumeroPar = (num)=>{
    return num % 2 === 0
}
console.log(esNumeroPar(4))
console.log(esNumeroPar(5))

// Crea una función llamada obtenerCalificacion que tome una puntuación
// como parámetro, en un rango del 1 al 10, y devuelva una calificación


const obtenerCalificacion = (puntuacion)=>{
    if (puntuacion >= 9 && puntuacion <= 10){
        return "Excelente"
    }else if(puntuacion >= 8 && puntuacion < 9){
        return "Muy bueno"
    }else if (puntuacion >= 7 && puntuacion < 8){
        return "Bueno, pero puede ser mejor"
    }else if(puntuacion >= 6 && puntuacion < 7){
        return "Regular"
    }else if (puntuacion >= 1 && puntuacion < 6){
        return "Deficiente"
    }
    else{
        return 'No valido'
    }
}
console.log(obtenerCalificacion(8.5))
console.log(obtenerCalificacion(4))
console.log(obtenerCalificacion(9.5))
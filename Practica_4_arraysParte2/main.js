const numbers = [1,2,3,4]
numbers.forEach(function(number){
    console.log(number * 2)
})

const productos = [
    {name: 'camisa', precio: 20},
    {name: 'Jeans', precio: 25},
    {name: 'zapatos', precio: 70},
    {name: 'sombrero', precio: 10}
]

let priceTotal = 0

productos.forEach(function(producto){
    priceTotal += producto.precio;
})

console.log(`El total a pagar es ${priceTotal}`)

//❖ map(): Crea un nuevo array aplicando una función a cada elemento del array original.

const numbers1 = [1,2,3,4]
let newArray = numbers1.map(function(number){
    return number * 2
})
console.log(newArray)
//EJERCICIO 2: CONVERTIR GRADOS CEL A FAH
const gCelcius = [0,15,30,5,10]
const gFarenheit = gCelcius.map(function(celcius){
    return (celcius * 9/5) + 32
})
console.log(gFarenheit)

//filter(): Crea un nuevo array con todos los elementos que pasan una prueba (funciónproporcionada).
//ejercicio 1
const nums = [2,4,5,6,7,9,11]

const nums2 = nums.filter(function(numero){
    return numero > 5
})
console.log(nums2);

const personas = [
    {nombre:'Isaac', edad:21},
    {nombre:'Kevo', edad:20},
    {nombre:'Jonathan', edad:11},
    {nombre:'Itamar', edad: 17},
]
const adultos = personas.filter(function(persona){
    return persona.edad > 18
})
console.log(adultos)
//reduce(): Aplica una función a un acumulador y a cada elemento de un arreglo (de izquierda a derecha) para reducirlo a un solo valor.
let numeritos = [1,2,3,4]
let suma = numeritos.reduce(function(acumulador, valorActual){
    return(acumulador + valorActual)

}, 0)
console.log(suma)

//❖ every(): Comprueba si todos los elementos de un arreglo cumplen una condición dada y devuelve true o false.
let masNumeritos = [1,2,3,4,5]
const mayorCero = masNumeritos.every(function(numerito){
    return numerito > 3
})

console.log(mayorCero)

// some(): Comprueba si al menos un elemento de un arreglo cumple una condición dada y devuelve true o false.
let masMasNumeritos = [1,2,3,4,5]
const numeroPar = masMasNumeritos.some(function(number){
    return number % 2 === 0
})
console.log(numeroPar)
//❖ sort(): Ordena los elementos de un arreglo en orden alfabetico (sin crear un nuevo arreglo).
const names = ['Isaac', 'Kevo', 'Bryan', 'Willy']
names.sort()
console.log(names)

//Actividad 3 ejercicios.

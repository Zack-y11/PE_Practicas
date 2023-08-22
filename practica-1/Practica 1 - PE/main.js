//alert("Mensaje de javascript")

console.log("Estas usando la consola")
//ejemplos consola
console.log(20)
console.log(1.2)
console.log(true)
console.log(false)
//Declaracion de variables.

var x = 10
console.log(x)
x = 20
console.log(x)
var x = 100
console.log(x)

//Usos del let
let y = 5 
console.log(y)
y = 20 // es valido
console.log(y)
//let y = 25 no es valido pq ya se declaro

//constantes
const pi = 3.1415
console.log(pi)

/*pi = 328724
console.log(pi)*/

//nombre y edad 
/*let nombre = prompt("ingresa tu nombre")
let age = Number(prompt("Cual es tu edad"))
console.log(`El nombre y edad ingresado es: ${nombre} ${age}`)
alert(`El nombre y edad ingresado es: ${nombre} ${age}`)*/

const num = Number(prompt("Ingrese un numero para la tabla de multiplicar que desea"))
console.log(`Tabla de multiplicar del numero ${num}`)
for(let i = 1; i <= 10; i++) {
    const resultado = num * i
    console.log(`${num} x ${i} = ${resultado}`)
}


let a = Number(prompt("Ingresa un numero, y el programa te dira si es positivo o negativo"))
if (a > 0) {
    console.log(`El numero ${a} es positivo`)
}else if (a < 0) {
    console.log(`El numero ingresado es ${a}, es negativo`)
}else {
    console.log("El numero ingresado es neutro")
}

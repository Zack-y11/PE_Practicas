//Metodos de manipulacion de arrays

//1 push(): Agrega uno o más elementos al final del array
let numbers = [1, 2, 3]
numbers.push(4, 5) //[1, 2, 3, 4]
console.log('Push', numbers);

// 2 pop(): Elimina y devuelve el último elemento del array.

let frutas = ['mangos','peras', 'uvas']
let ultimaFruta = frutas.pop()
console.log(ultimaFruta)
console.log(frutas)

//3 ❖ unshift(): Agrega uno o más elementos al inicio del array.
const colores = ["rojo", "verde", "azul"] 
colores.unshift('amarrilo', 'naranaja')
console.log(colores)

//4 shift(): Elimina y devuelve el primer elemento del array
const paises =["Mexico","Colombia","Argentina"];
paises.shift('Guatemala');
console.log(paises)

//5 concat(): Combina dos o más arrays para crear un nuevo array.
const numeros = [0 ,6];
const numeros1 = [2 , 4]
const newArray = numeros.concat(numeros1)
console.log(newArray)

//6 ❖ slice(): Crea una copia superficial (shallow copy) del array con los elementos seleccionados.
const arrayOriginal = [2,4,5,6]
console.log(arrayOriginal)
const copyArray = arrayOriginal.slice(1,4)
console.log(copyArray)

//7 splice(): Cambia el contenido de un array eliminando, reemplazando o agregando elementos.
const animals =['Perro', 'Gato', 'Buho'];
const removerAnimals = animals.splice(1,2, 'pollito')
console.log(removerAnimals)


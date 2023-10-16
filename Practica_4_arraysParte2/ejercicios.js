//USANDO EL METODO SORT
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
const ordFruits = fruits.sort((a, b) => b.localeCompare(a));  
console.log(ordFruits); 

//USANDO REDUCE
const prices = [1.5, 2.75, 3.99, 5.85];
const total = prices.reduce((acc, price) => acc + price, 0);
console.log(total); 

//USANDO MAP Y SORT
const colores = ['azul', 'cafe', 'verde', 'rojo']
const coloresOrden = colores.sort().map(function(color){
    return color 
})
console.log(coloresOrden)
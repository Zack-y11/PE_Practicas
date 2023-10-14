// BURBLE SORT
//Ejercicio 1
const bubbleSort = (arr)=>{
    let len = arr.length //tamaño del array
    for (let i = 0; i < len; i++){
        for (let j = 0; j < len - 1; j++){
            if(arr[j]> arr[j + 1]){ //compara los valores
                let temp = arr[j]; //variable temporal
                arr [j] = arr[j + 1]; //reemplaza el valor actual por el valor siguiente
                arr [j + 1] = temp //reemplaza el valor siguiente por el valor actual
            }
        }
    }
    return arr;
}

const arr = [64,34,25,12,22,11,90]
//console.log(bubbleSort(arr))
// Ejercicio Intermedio 2: Array de objetos

const bubbleSortObjects = (arr, prop)=>{
    let len = arr.length
    for (let i = 0; i < len; i++){
        for (let j = 0; j < len - 1; j++){
            if(arr[j][prop] > arr[j + 1][prop]){
                let temp = arr[j];
                arr [j] = arr[j + 1]
                arr [j + 1] = temp
            }
        }
    }
    return arr
}
const arrObjs = [
    {name:'Juan', age : '27'},
    {name:"Maria", age :"30"},
    {name:"Pedro", age :"20"} ,
]
//console.log(bubbleSortObjects(arrObjs, "age"))

//SELECTION SORT (Ordenamiento por seleccion)
//ejercicio basico: ordenar un array de numeros
const selectionSort = (arr)=>{
    let len = arr.length
    for(let i = 0; i < len - 1; i++){
        let minimo = i;
        for(let j = i + 1; j < len; j++){
            if(arr[j] < arr[minimo]){
                minimo = j
            }
        }
        if (minimo !== i){
            let tempSort = arr[i]
            arr[i] = arr[minimo]
            arr[minimo] = tempSort
        }
    }
    return arr
}
//console.log(selectionSort(arr))

//EJERCICIO INTERMEDIO: SELECTION SORT ORDENAR ARRA DE OBJETOS CON UNA PROPIEDAD
const selectionSortObjects = (arr, prop) =>{
    let len = arr.length
    for(let i=0 ; i<len-1; i++) {
        var minimo = i
        for (var j = i + 1; j < len; j++){
            if(arr[j][prop] < arr[minimo][prop]){
                minimo = j
            }
        }
        if(minimo !== i){
            let temp = arr[i]
            arr[i]=arr[minimo]
            arr[minimo]=temp
        }
    }
    return arr
}
//console.log(selectionSortObjects(arrObjs,'age'))
//INSERTION SORT (Ordenamiento con insercion)
//Ejercicio Basico: orden ascendente
const insertionSort = (arr) => {
    let len = arr.length
    for(let i = 1; i < len; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr [j + 1] = arr[j]
            j = j - 1
        }
        arr [j + 1] = key
    }
    return arr
}
//console.log(insertionSort(arr))

//Ejercicio Intermedio: Ordenamiento de objetos
const insertionSortObject = (arr, prop)=>{
    let len = arr.length
    for(let i = 1; i < len; i++){
        let key = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j][prop] > key[prop]){
            arr[j + 1] = arr[j];
            j = j - 1
        }
        arr [j + 1] = key
    }
    return arr
}

console.log(insertionSortObject(arrObjs, 'age'))
//DEFINIMOS LA CLASE NODO
class Nodo{
    constructor(valor){
        this.valor = valor;
        this.izquierda = null
        this.derecha = null
    }
}

//Definir clase arbol binario
class arbolBinario {
    constructor(){
        this.raiz = null
    }
    //METODO INSERTAR
    insertar(valor){
        const nuevoNodo = new Nodo(valor)
        if (!this.raiz){
            this.raiz = nuevoNodo;
        }else{
            this.insertarNodo(this.raiz, nuevoNodo);
        }
    }
    //  Metodo Insertar nodo
    insertarNodo (nodo , nuevoNodo ){
        if(nuevoNodo.valor < nodo.valor){
            if(!nodo.izquierda){
                nodo.izquierda = nuevoNodo;
            }else{
                this.insertarNodo(nodo.izquierda, nuevoNodo)
            }
        }else{
            if(!nodo.derecha){
                nodo.derecha = nuevoNodo;
            }else{
                this.insertarNodo(nodo.derecha, nuevoNodo )
            }
        }
    }

    //METODO DE VALIDACION 
    esArbolBinarioBusqueda(){
        return this.validarABB(this.raiz, -Infinity, Infinity)
    }
    
    validarABB(nodo, min, max){
        if(!nodo){
            return true
        }
        if (nodo.valor < min || nodo.valor > max){
            return false
        }
        return(
            this.validarABB(nodo.izquierda,min, nodo.valor-1) && //debe ser menor que el valor actual
            this.validarABB(nodo.derecha, nodo.valor+1,max) //y los del derecho deben ser mayor al valor actual
        )
    }

    //METODO PARA EL CONTEO DE NODOS.
    contarNodos(){
        return this.contarNodosEnSubarbol(this.raiz)
    }
    contarNodosEnSubarbol(nodo){
        if (!nodo){
            return  0
        }
        return (1 + this.contarNodosEnSubarbol(nodo.izquierda) +
                    this.contarNodosEnSubarbol(nodo.derecha)
            )       
    }

    //METODO PARA UN VALOR ESPECIFICO
    buscarValor(valor){
        return this.buscarEnSubarbol(this.raiz, valor)
    }

    buscarEnSubarbol(nodo, valor){
        if(!nodo){
            return false
        }
        if(nodo.valor === valor){
            return true
        }
        return (this.buscarEnSubarbol(nodo.izquierda, valor)||
                this.buscarEnSubarbol(nodo.derecha, valor)
        );
    }

    //METODO PARA ELEIMINAR NODOS.
    eliminarValor(valor){
        this.raiz = this.eliminarEnSubarbol(this.raiz, valor)
    }
    //ELIMINACION EN SUBARBOL   
    eliminarEnSubarbol(nodo, valor){
        if (!nodo){
            return null
        }
        if (valor < nodo.valor){
            nodo.izquierda = this.eliminarEnSubarbol(nodo.izquierda, valor)
        }else if (valor > nodo.valor){
            nodo.derecha = this.eliminarEnSubarbol(nodo.derecha, valor)
        }else{
            if (!nodo.izquierda){
                return nodo.derecha;
            }else if (!nodo.derecha){
                return nodo.izquierda;
            }
            nodo.valor = this.encontrarMinimoValor(nodo.derecha);
            nodo.derecha = this.eliminarEnSubarbol(nodo.derecha, nodo.valor)
        }
        return nodo
    }
    encontrarMinimoValor(nodo){
        while(nodo.izquierda){
            nodo = nodo.izquierda
        }
        return nodo.valor
    }

    //recorrido amplitud
    recorridoAmplitud(){
        const resultado = []
        const cola = []

        if(!this.raiz){
            return resultado
        }
        cola.push(this.raiz)
        
        while(cola.length > 0){
            const nodoActual = cola.shift()
            resultado.push(nodoActual.valor)

            if(nodoActual.izquierda){
                cola.push(nodoActual.izquierda)
            }
            if(nodoActual.derecha){
                cola.push(nodoActual.derecha)
            }
        }
        return resultado
    }

    //recorrido en profundidad preorden

    recorridoPreorden(){
        return this.recorridoPreordenNodo(this.raiz, []);
    }

    recorridoPreordenNodo(nodo, resultado){
        if (nodo){
            resultado.push(nodo.valor)
            this.recorridoPreordenNodo(nodo.izquierda, resultado)
            this.recorridoPreordenNodo(nodo.derecha, resultado)
        }
        return resultado
    
    }
    //recorrido en profundidad orden central
    recorridoOrdenCentral(){
        return this.recorridoOrdenCentralNodo(this.raiz,[])
    }

    recorridoOrdenCentralNodo(nodo, resultado){
        if (nodo){
            this.recorridoOrdenCentralNodo(nodo.izquierda, resultado)
            resultado.push(nodo.valor)
            this.recorridoOrdenCentralNodo(nodo.derecha, resultado)
        }
        return resultado
    }

    //recorrido en profundidad postorden
    recorridoPostorden(){
        return this.recorridoPostordenNodo(this.raiz,[])
    }
    recorridoPostordenNodo(nodo, resultado){
        if (nodo){
            this.recorridoPostordenNodo(nodo.izquierda, resultado)
            this.recorridoPostordenNodo(nodo.derecha, resultado)
            resultado.push(nodo.valor)
        }
        return resultado
    }
}

//Crear Arbol
const arbol = new arbolBinario();
arbol.insertar(10);
arbol.insertar(5);
arbol.insertar(15);
arbol.insertar(3);
arbol.insertar(7);
arbol.insertar(12);
arbol.insertar(18);

console.log("Recorrido en amplitud", arbol.recorridoAmplitud())
console.log("Recorrido en profunidad Preorden: ", arbol.recorridoPreorden())
console.log('Recorrido en profundidad Orden Central', arbol.recorridoOrdenCentral());
console.log('Recorrido en Profundidad Postorden:', arbol.recorridoPostorden());

console.log("Es un arbol binario de busqueda", arbol.esArbolBinarioBusqueda())
console.log("Numero de nodos en el arbol: ", arbol.contarNodos())
const valorBuscado = 2
console.log(`El valor ${valorBuscado} se encuentre en el arbol?`, arbol.buscarValor(valorBuscado));

arbol.eliminarValor(10)
console.log("Recorrido en amplitud", arbol.recorridoAmplitud())
console.log("Recorrido en profunidad Preorden: ", arbol.recorridoPreorden())
console.log('Recorrido en profundidad Orden Central', arbol.recorridoOrdenCentral());
console.log('Recorrido en Profundidad Postorden:', arbol.recorridoPostorden());
console.log("Arbol despues de eliminar el valor 10: ", arbol.recorridoOrdenCentral())



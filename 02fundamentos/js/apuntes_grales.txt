//var se usa cuando el valor es reasignable; tiene alcance de función (function scope) y con hoisting (se declara antes de que el código se ejecute)
//let se usa cuando el valor es reasignable; tiene alcance de bloque (block scope)
//const se usa para valores no reasignables; sí puede mutar si es un objeto o array

//++ --> sumar 1 a un mismo elemento
//-- --> restar 1 a un mismo elemento
// == --> para evaluar igualdad de elementos, no estricto (=== evalúa tipo de dato y contenido)
// != --> para evaluar si elementos son distintos, no estricto (!== evalúa tipo de dato y contenido)
//+= o -= --> se emplean cuando se hace referencia a elemento = elemento +(-) número
// && --> se usa para representar un "y" (estricto, deben darse todas las condiciones)
// || --> se usa para representar un "o" (puede darse al menos 1 de las condiciones)

`Este método de sintaxis sirve para concatenar ${variables} sin necesidad de usar + ni comillas dobles`


//Sintaxis base arrays
var x = [elemento, elemento, n]
x[indiceElemento] //para acceder a un elemento específico dentro del array. Los índices SIEMPRE parten en 0
x[indiceElemento] = nuevoValor // para actualizar el valor de un elemento específico
x.length //indica longitud del array (cantidad de elementos)
x.push(elemento) //añade elemento(s) al final del array
x.pop() //elimina el último elemento del array
x.unshift(elemento) // añade elemento(s) al comienzo de la lista
x.shift() // elimina el primer elemento del array
x.splice (índiceDesdeDondeQuieroAgregar, cuantosElVoyAEliminar, "elemento(s)") //afecta array original; tercer parámetro es opcional


//Sintaxis base objetos
var x = {
    key: value,
    key: value,
    n: [value, value]
}

//Sintaxis base condicionales
if (condición) {
    //bloque de código que se ejecuta si la condición se cumple
} else if (2da condición) { //pueden haber 0 a n de éstos
    //bloque de código que se ejecuta si la 2da condición se cumple
} else {
    //bloque de código que se ejecuta si ninguna condición declarada antes se cumple
}

//Sintaxis base ciclo for --> se usa con un num específico de veces a repetir
for (condInicio; condTérmino; condActualización){  //gral% se usa "i" o "j" como var
////bloque de código que se ejecuta
}
//También existe for...of (arrays) y for...in (objetos)
for (let valor of array) {
   // recorrer arrays
}

for (let clave in objeto) {
   // recorrer propiedades de un objeto
}

//Sintaxis base ciclo while
while (condición){
////bloque de código que se ejecuta mientras la condición se cumpla
}//Sale del bucle cuando la condición deja de cumplirse


<tagElemento onclick = "nombreFunc()"></tagElemento> //se usa para ejecutar una función al hacer click en un elemento
<tagElemento onchange = "nombreFunc()"></tagElemento> //se usa para ejecutar una función al haber un cambio en relación a un elemento
<tagElemento onmouseover = "nombreFunc()"></tagElemento> //se usa para ejecutar una función cuando el puntero entra en un elemento
<tagElemento hover = "nombreFunc()"></tagElemento> //se usa para ejecutar una función cuando

//Sintaxis base para modificar atributos de elemento(s)
<tagElemento evento = nombreFunc(this)></tagElemento>;

function nombreFx(element) {
    let elemento = document.querySelector (#nombreId,.nombreClase, nombreTag); //selecciona el PRIMER elemento que coincida
    //o const elemento = document.querySelectorAll/.getElementById("id")/.getElementsByClassName("clase")/.getElementsByTagName("tagName")
    return elemento; //permite ver en consola el elemento declarado, el que NO existe fuera de las llaves
}

alert("Mensaje que aparecerá en ventana tipo pop-up con botón Aceptar")
confirm("Mensaje que aparecerá en ventana tipo pop-up con botones Aceptar/Cancelar")
prompt("Ventana tipo pop-up con opción de ingresar algo, el mensaje/instrucción se  pone aquí")

elemento.remove (); //usado para eliminar un elemento del código
elemento.value //hace referencia al valor del elemento, aplica principalmente a inputs, selects, textareas
elemento.innerText //hace referencia al contenido del elemento, muestra el texto visible
elemento.src //hace referencia al source del elemento
console.dir(elemento) //imprime atributos del elemento en una lista, como si fuera OBJ
elemento.style.atributoCss = "nuevoValor" //permite modificar-actualizar atributo CSS de un elemento
elemento.style.display = "none" //usado para "hacer transparente" un elemento del código (oculta el elemento, pero sigue en el DOM)
elemento.classList.add("clase") //para añadir una clase CSS a un elemento del DOM, sin borrar las clases que ya tenga
Number(elemento.value) //usado para tranformar un string en número
elemento.value = "" //usado para limpiar el elemento
elemento.parentElement //usado para referenciar al padre inmediato en el DOM

<script src="script.js"></script>; //para linkear un archivo .js al HTML
<link rel="stylesheet" href="style.css">; //para linkear un archivo .css al HTML
<strong></strong>; //permite poner en negrita un texto sin necesidad de declarar un p
function miEdad() {

    console.log("Tengo: "+ 25 +" años");

}
// Inicialmente, pensé que console.log mostraría "undefined" porque la función no tiene una variable asignada. Después de hacer un poco de lectura sobre qué hace console.log, creí que imprimiría tal cuál la información dentro de los paréntesis. Sin embargo, y después de otro poco de lectura más una conversación con ChatGPT, entendí que en este caso los signos + no están funcionando de manera textual ni como operador matemático, sino que está concatenando las cadenas dentro del paréntesis de console.log. Así, finalmente lo que si mostraría console.log es "Tengo: 25 años".



function miEdad(edad) {

    console.log("Tengo: "+ edad +" años");

}
//En este caso, y luego de asignar el valor 25 a la variable, console.log mostraría el texto "Tengo: 25 años". Cabe hacer notar que, ya que 25 está asignado mediante variable, al modificar el valor de la variable, lo que imprima console.log también se verá modificado.


function restar(primerNumero, segundoNumero) {

console.log("¡Restemos los números!");

console.log("primerNumero es:" + primerNumero)

console.log("segundoNumero es:" + segundoNumero);

var resultado = primerNumero - segundoNumero;

console.log(resultado);

}
//Finalmente, siendo primerNumero=50 y segundoNumero=27, console.log mostraría: 
// ¡Restemos los números! 
// primerNumero es:50
// segundoNumero es:27
// 23

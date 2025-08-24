//1) Crea una función flecha que convierta temperaturas de grados Celsius a Fahrenheit.
//La fórmula para convertir Celsius a Fahrenheit es: Fahreneit = (Celsius * 9 / 5) + 32

/*function convertTemp(celsius) {
    let fahrenheit = ((celsius*(9/5))+32);
    console.log(fahrenheit)
}*/

const convertCToF = celsius => (celsius*9/5)+32;

console.log (convertCToF(20))

//2) Implementa una función flecha que tome un nombre y una edad como argumentos y devuelva un mensaje en formato de cadena,
// por ejemplo: "Hola Juan, tienes 30 años de edad."

/*function sayHi(name, age) {
    console.log(`Hola ${name}, tienes ${age} años de edad`)
}*/

const sayHi = (name, age) => console.log(`Hola ${name}, tienes ${age} años de edad`);

sayHi("Pepito", 25)


//3) Crea una función flecha que convierta millas a kilómetros. Considera que: 1 milla = 1.60934 km

/*function convertMeassures (miles) {
    let kilometers = ((miles*1.60934)/1);
    console.log(kilometers)
}*/

const convertMiToKm = miles => (miles*1.60934)/1;

console.log(convertMiToKm(10))


/*4) Crea una función flecha que, según el clima ingresado como argumento, retorne un consejo adecuado.
Por ejemplo:
    Si el clima es “lluvioso”, debe sugerir llevar un paraguas.
    Si el clima es “soleado”, debe sugerir llevar un sombrero.
Utiliza el operador ternario para simplificar la evaluación condicional en este ejercicio.*/

/*function weatherAdvice (weather){
    if (weather == "Lluvioso"){
        console.log("Te convendría llevar paraguas☔")
    } else if (weather == "Soleado") {
        console.log ("Te convendría llevar sombrero👒")
    }
    else {
        console.log("Aunque no sé que aconsejarte, espero tengas un buen día! :)")
    }
}*/

const weatherAdvice = weather =>
    weather == "Lluvioso" ? "Te convendría llevar paraguas☔" :
    weather == "Soleado" ? "Te convendría llevar sombrero👒" :
    "Aunque no sé que aconsejarte, espero tengas un buen día! :)";

console.log(weatherAdvice("Soleado"))
//Ver con condicionales si --> es mayor de 13 y tiene dinero suficiente (300USD)
// o Si es VIP
//console.log (La persona puede entrar)

let edad = 12;
let dinero = 600;
let esVip = false;

if ((edad > 13 && dinero >= 300) || esVip == true) {
    console.log ("La persona puede entrar");
}
else {
    console.log ("La persona no puede entrar");
}
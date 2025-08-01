//Recorrer array e indicar dónde hay trampa (trampa = 1)
var cofres = ["tesoro", "vacío", "trampa", "tesoro", "vacío", "tesoro", "trampa", "vacío", "tesoro", "vacío"];
var mapa = [];

for (var i = 0; i < cofres.length; i++) {
    if (cofres[i] == "trampa") {
        mapa.push(1);
    }
    else if (cofres[i] == "tesoro") {
        mapa.push(2);
    }
    else {
        mapa.push(0);
    }
}

console.log(mapa);

console.log("Hay x tesoros, x vacíos");
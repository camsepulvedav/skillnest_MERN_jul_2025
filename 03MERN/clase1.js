var usuario2 = {
    nombre: "Carla",
    edad: 28,
    ciudad: "Lima",
    redes: {
        twitter: "@carla",
        instagram: "@carlagram"
    },
    gustos: ["leer", "viajar", "correr"]
};
var nuevoUsuario = {
    ...usuario2, //copia usuario2 y le actualiza/agrega:
    edad: 30,
    profesion: "Diseñadora"
};
var {
    nombre, //capturo nombre
    redes: { twitter }, //capturo el user de Twitter
    ...restoDatos //junta todos los otros datos en una variable
} = nuevoUsuario;
var [primerGusto, ...otrosGustos] = nuevoUsuario.gustos;

console.log(nombre); // Carla
console.log(twitter); // @carla
console.log(restoDatos); // {Edad:30, ciudad, instagram, gustos, profesion}
console.log(primerGusto); // Leer
console.log(otrosGustos); // [Viajar, Correr]
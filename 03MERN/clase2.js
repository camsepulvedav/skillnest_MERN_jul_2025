//1) Crear arrow function que reciba el array, encuentre el listado 
// de personas mayores a 25 y devolver ese listado
//2) Crear un método que ejecute una función interna

const personas = [
    { nombre: "Ana", edad: 20 },
    { nombre: "Luis", edad: 25 },
    { nombre: "Pedro", edad: 30 }
];

const ageCheck = newArray => newArray.filter(persona => persona.edad > 25)
ageCheck(personas);


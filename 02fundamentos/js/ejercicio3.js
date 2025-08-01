var pociones = [
  { nombre: "Poción de fuerza", precio: 50, poder: 80 }, //indice 0
  { nombre: "Poción de curación", precio: 30, poder: 40 },
  { nombre: "Poción de invisibilidad", precio: 100, poder: 90 },
  { nombre: "Poción débil", precio: 10, poder: 10 },
];

//Generar console.log de poción que cueste más de 35 y su poder sea mayor a 50

for (var i = 0; i < pociones.length; i++) {
    if (pociones[i].precio > 35 && pociones[i].poder > 50) {
    console.log (`La ${pociones[i].nombre} tiene poder mayor a 50 y cuesta más de 35$`);
    }
}
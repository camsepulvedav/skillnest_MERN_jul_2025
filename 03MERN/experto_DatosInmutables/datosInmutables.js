const videojuegos = Object.freeze([
        { "id": 1, "nombre": "The Legend of Zelda: Breath of the Wild", "genero": "aventura", "plataforma": "Nintendo Switch" },
        { "id": 2, "nombre": "Super Mario Odyssey", "genero": "plataformas", "plataforma": "Nintendo Switch" },
        { "id": 3, "nombre": "Red Dead Redemption 2", "genero": "acción-aventura", "plataforma": "PlayStation 4" },
        { "id": 4, "nombre": "The Witcher 3: Wild Hunt", "genero": "RPG", "plataforma": "PC" },
        { "id": 5, "nombre": "Fortnite", "genero": "battle royale", "plataforma": "multiplataforma" },
        { "id": 6, "nombre": "Minecraft", "genero": "sandbox", "plataforma": "multiplataforma" },
        { "id": 7, "nombre": "Overwatch", "genero": "shooter", "plataforma": "multiplataforma" },
        { "id": 8, "nombre": "FIFA 20", "genero": "deportes", "plataforma": "multiplataforma" },
        { "id": 9, "nombre": "Super Smash Bros. Ultimate", "genero": "lucha", "plataforma": "Nintendo Switch" },
        { "id": 10, "nombre": "League of Legends", "genero": "MOBA", "plataforma": "PC" },
        { "id": 11, "nombre": "God of War", "genero": "acción-aventura", "plataforma": "PlayStation 4" },
        { "id": 12, "nombre": "Animal Crossing: New Horizons", "genero": "simulación", "plataforma": "Nintendo Switch" },
        { "id": 13, "nombre": "Call of Duty: Warzone", "genero": "shooter", "plataforma": "multiplataforma" },
        { "id": 14, "nombre": "Cyberpunk 2077", "genero": "acción-RPG", "plataforma": "multiplataforma" },
        { "id": 15, "nombre": "Assassin's Creed Valhalla", "genero": "acción-aventura", "plataforma": "multiplataforma" },
        { "id": 16, "nombre": "Among Us", "genero": "party", "plataforma": "multiplataforma" },
        { "id": 17, "nombre": "Pokémon Sword and Shield", "genero": "RPG", "plataforma": "Nintendo Switch" },
        { "id": 18, "nombre": "Genshin Impact", "genero": "acción-RPG", "plataforma": "multiplataforma" },
        { "id": 19, "nombre": "Valorant", "genero": "shooter táctico", "plataforma": "PC" },
        { "id": 20, "nombre": "Death Stranding", "genero": "acción-aventura", "plataforma": "PlayStation 4" },
        { "id": 21, "nombre": "Spider-Man: Miles Morales", "genero": "acción-aventura", "plataforma": "PlayStation 5" },
        { "id": 22, "nombre": "Hades", "genero": "roguelike", "plataforma": "PC" },
        { "id": 23, "nombre": "Overcooked! 2", "genero": "cooperativo", "plataforma": "multiplataforma" },
        { "id": 24, "nombre": "Sekiro: Shadows Die Twice", "genero": "acción-aventura", "plataforma": "multiplataforma" },
        { "id": 25, "nombre": "Rainbow Six Siege", "genero": "shooter táctico", "plataforma": "multiplataforma" },
        { "id": 26, "nombre": "Grand Theft Auto V", "genero": "acción-aventura", "plataforma": "multiplataforma" }
    ]);

// Filtrar juegos de aventura o acción-aventura
const juegosAventura = videojuegos.filter(juego => juego.genero === "aventura" || juego.genero === "acción-aventura");

// Obtener los nombres de los juegos
const nombresJuegos = videojuegos.map(juego => juego.nombre);

console.log(juegosAventura);
console.log(nombresJuegos);


/*Observaciones:
 - "videojuegos" es el nombre del array original.
 - Cada obj del array está compuesto por un id, un nombre, género(s) y plataforma.
 - Usa siempre funciones flecha (() => {}) para las devoluciones de llamada.
 - Utiliza métodos funcionales como .map(), .filter() y .forEach() para crear nuevos arreglos.

Considerando lo anterior, encontrar/crear:*/


//1) Un conjunto de videojuegos cuyo número de identificación es divisible uniformemente por 3.
const idDivisible = videojuegos.filter ((game) => {game.id/3 % 0});
console.log("1:", idDivisible)

//2) Un conjunto de videojuegos que pertenecen al género “acción-RPG”.
const AccionAndRPG = videojuegos.filter ((game) => {game.genero === "acción-RPG"});
console.log("2:", AccionAndRPG)

//3) Un conjunto de videojuegos que tienen más de un género.
const TwoOrMoreGenres = videojuegos.filter ((game) => {game.genero.length >= 2});
console.log("3:", TwoOrMoreGenres)

//4) Una lista con los nombres de los videojuegos.
videojuegos.forEach((game) => console.log(game.nombre));

//5) Una lista con los nombres de los videojuegos con un número de identificación superior a 19.
const idMoreThan19 = videojuegos.filter ((game) => {game.id > 19});
console.log("5:", idMoreThan19)

//6) Una lista con los nombres de los videojuegos cuyo único género es “shooter”.
const shooters = videojuegos.filter ((game) => {game.genero === "shooter"});
console.log("6:", shooters)

//7) Una lista que contenga solo el primer género de todos los videojuegos cuyo segundo género es “aventura”.
if (game.genero[1] === "aventura") {
    console.log(game.genero[0])
}

//8) Un conteo del número de videojuegos que son del género “party”.
if (game.genero === "party") {
    let counter = 0;
    counter++;
    return counter
}

//9) Una lista con todos los videojuegos excepto aquellos cuyo número de identificación sea múltiplo de 5.
const multipleOf5 = videojuegos.filter ((game) => {!game.id/5 % 0});
console.log(multipleOf5)

//10) Una lista con todos los videojuegos y para el videojuego con el número de identificación 5, se cambia su género por “otro”.
videojuegos.forEach((game) => console.log(game));
game.id === 5



videojuegos.forEach((element) => console.log(element)); //Devuelve cada videojuego del array
const vjSizes = videojuegos.map((videojuegos) => videojuegos.length); //Devuelve el n° de caracteres de cada elemento del array
const filteredVJ = videojuegos.filter ((videojuegos) => videojuegos.startsWith ("P")) //Devuelve videojuegos que parten con P
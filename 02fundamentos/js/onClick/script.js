function logIn() {
    //capturar innerText. hacer click, cambiar a "Cerrar Sesión"
    let logStatus = document.getElementById("btnSesion")
    logStatus.innerText = "Cerrar Sesión"
    }

function disappear() {
    //hacer click al botón "Agregar definición", este debe desaparecer
    let addDefinition = document.getElementById("btnAddDefinition")
    addDefinition.style.display = "none"
    }

//hacer click a “Me gusta” en una de las defs, aparecer ventana indicando que te gustó la def + el título de la misma
//con cada click al botón "like" de la definición, debe aumentar el conteo en su respectiva definición
function likeGato() {
    alert("Gato Atrigado was liked")
    const likeGato = document.getElementById("gatoA")
    let contadorGato = Number(gatoA.innerText)
    contadorGato++
    gatoA.innerText = contadorGato
    }

function likeGolden() {
    alert("Golden Retriever was liked")
    const likeGolden = document.getElementById("goldenR")
    let contadorGolden = Number(goldenR.innerText)
    contadorGolden++
    goldenR.innerText = contadorGolden
    }
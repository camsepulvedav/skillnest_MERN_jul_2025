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

function like() {
    //hacer click a “Me gusta” en una de las defs, aparecer ventana indicando que te gustó la def + el título de la misma
    //con cada click al botón "like" de la definición, debe aumentar el conteo en su respectiva definición
    alert("Definición was liked")
    }
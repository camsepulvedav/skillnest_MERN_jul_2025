alert("Cargando información");

function removeBanner() {
    let bannerEl = document.getElementsByClassName("banner");
    bannerEl.remove();
}

//Cambiar inner text de p id="Cel" (°C) a °F según el value asociado en el select
function celsiusToFarenheit() {
    let tempEl = document.getElementById("tempUnit");
    let tempsEl = document.querySelectorAll("celsius");
    for (var i = 0; i < tempsEl.length; i++){
        tempsEl[i].innerText = tempEl.value; 
    }
}
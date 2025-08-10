//Imagina que estás desarrollando una aplicación que en base a la edad de un usuario determina si este es lo suficientemente mayor como para obtener una licencia de conducir. Tu tarea es crear la función que mostrará el mensaje adecuado al usuario.

var edadUsuario = 12;

function puedeObtenerLicencia(){ 

    if (edadUsuario > 17) {
        console.log ("¡Listo para obtener la licencia de conducir!");
    } else {
        console.log ("Disculpa, debes esperar más años para conseguir tu licencia.");
    }
}

puedeObtenerLicencia();
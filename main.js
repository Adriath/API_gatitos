// API KEY = live_hB4W84fpTXoR3PUYoG9jOySGMAId0cOe01b4Ilu5OjKOKKjaIlZGHenmbD5YkSfJ

let appid = "live_hB4W84fpTXoR3PUYoG9jOySGMAId0cOe01b4Ilu5OjKOKKjaIlZGHenmbD5YkSfJ" ; // La clave de la API
let urlGatitos =`https://api.thecatapi.com/v1/images/search`; // La URL (devuelve un gato aleatorio)

document.getElementById("botonGatos").addEventListener("click", cargaGatos) ;

/**
 * Función que envía la petición al servidor para recibir la imagen de gatitos.
 */
function cargaGatos() {

    let xhr = new XMLHttpRequest() ; // Objeto XMLHttpRequest

    xhr.responseType = 'json' ; // Transformación del objeto en JSON

    xhr.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200) {
                   
            cargarJSON(this.response) ; // Si la petición es correcta ejecuta la función
            console.log("todo bien") ;
        }
        else{
            console.log("todo mal") ;
        }
    } ;

    xhr.open("GET", urlGatitos, true) ;
    xhr.send() ;
}

/**
 * Función que carga los datos del JSON y modifica en el documento HTML los atributos de la imagen para mostrarla.
 * 
 * @param {*} json Documento JSON.
 */
function cargarJSON(json) {

    let imagen = document.getElementById("imagen") ; // Imagen

    let rutaImagen = json[0].url ; // Ruta de la imagen
    let width = json[0].width ; // Ancho de la imagen
    let height = json[0].height ; // Altura de la imagen

    imagen.setAttribute("src", rutaImagen) ; // Modifica el atributo src de la imagen
    imagen.setAttribute("width", width) ; // Modifica el atributo width de la imagen
    imagen.setAttribute("height", height) ; // Modifica el atributo height de la imagen
}
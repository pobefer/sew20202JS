var reader;
function init(visualizar) {
    reader = new Reader();
}
class Reader {
    constructor() {
        this.nombre = document.getElementById("nombreArchivo");
        this.tamaño = document.getElementById("tamañoArchivo");
        this.tipo = document.getElementById("tipoArchivo");
        this.ultima = document.getElementById("ultimaModificacion");
        this.contenido = document.getElementById("contenidoArchivo");
        this.areaVisualizacion = document.getElementById("areaTexto");
        this.errorArchivo = document.getElementById("errorLectura");
    }
    cargar(files) {
        this.archivo = files[0];
        this.errorArchivo.innerText = "";
        this.nombre.innerText = "Nombre del archivo: " + this.archivo.name;
        this.tamaño.innerText = "Tamaño del archivo: " + this.archivo.size + " bytes";
        this.tipo.innerText = "Tipo del archivo: " + this.archivo.type;
        this.ultima.innerText = "Fecha de la última modificación: " + this.archivo.lastModifiedDate;
        this.contenido.innerText = "Contenido del archivo de texto:"
        var tipoTexto = /text.*/;
        var tipoJson = /json.*/;
        var tipoXml  = /xml.*/;
        if (this.archivo.type.match(tipoTexto) || this.archivo.type.match(tipoJson) || this.archivo.type.match(tipoXml)) {
            this.lector = new FileReader();
            var parent = this;
            this.lector.onload = function (evento) {
                parent.areaVisualizacion.innerText = parent.lector.result;
            }
            this.lector.readAsText(this.archivo);
        }
        else {
            this.errorArchivo.innerText = "Error : ¡¡¡ Archivo no válido !!!";
        }
    }

}
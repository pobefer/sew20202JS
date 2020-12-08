var calculadora;
function init() {
    calculadora = new CalculadoraCoordenadas();
}

class Coordenadas{
    constructor(longitud,latitud) {
        this.latitud = latitud;
        this.longitud = longitud;
      }
}

class CalculadoraCoordenadas {
    XYControl = 111.30;
    MillesControl = 1.609;
    calcular(){
        var longitud1 = document.getElementById("lon1").value;
        var longitud2 = document.getElementById("lon2").value;
        var latitud1 = document.getElementById("lat1").value;
        var latitud2 = document.getElementById("lat2").value;
        this.cordenadasOrigen = new Coordenadas(longitud1, latitud1);
        this.cordenadasDestino = new Coordenadas(longitud2, latitud2);
        this.obtenerDistancia();
        this.mostrarDistancias();
    }

    obtenerDistancia(){
        var distanciaY =  Math.pow((this.cordenadasDestino.latitud-this.cordenadasOrigen.latitud)*this.XYControl, 2);
        var distanciaX =  Math.pow((this.cordenadasDestino.longitud-this.cordenadasOrigen.longitud)*this.XYControl, 2);
        this.distancia = Math.sqrt(distanciaX+distanciaY);
    }

    mostrarDistancias(){
        document.getElementById("kms").value = this.trunc(this.distancia,2);
        document.getElementById("millas").value = this.trunc((this.distancia / this.MillesControl),2); 
    }

    trunc (x, posiciones = 0) {
        var s = x.toString()
        var l = s.length
        var decimalLength = s.indexOf('.') + 1
        var numStr = s.substr(0, decimalLength + posiciones)
        return Number(numStr)
      }

}
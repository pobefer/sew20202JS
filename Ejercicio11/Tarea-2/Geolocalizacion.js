var miPosicion;
function init(visualizar) {
    miPosicion = new Geolocalización(visualizar);
}
"use strict";
class Geolocalización {
    constructor(visualizar) {
        var parent = this;
        var posicion = visualizar;
        navigator.geolocation.getCurrentPosition(success, error, options);
        function success(position) {
            parent.longitud = position.coords.longitude;
            parent.latitud = position.coords.latitude;
            parent.precision = position.coords.accuracy;
            parent.altitud = position.coords.altitude;
            parent.precisionAltitud = position.coords.altitudeAccuracy;
            parent.rumbo = position.coords.heading;
            parent.velocidad = position.coords.speed;
            parent.verTodo(posicion, false);
        }

        function error(err) {
            parent.verTodo(posicion, true, err);
        };
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          };
    }

    verTodo(dondeVerlo, error, err = null) {
        var ubicacion = document.getElementById(dondeVerlo);
        var datos = '';
        if (error) {
            datos += '<p>ERROR(' + err.code + '): ' + err.message + '</p>';
        }
        else {
            datos += '<p>Longitud: ' + this.longitud + ' grados</p>';
            datos += '<p>Latitud: ' + this.latitud + ' grados</p>';
            datos += '<p>Precisión de la latitud y longitud: ' + this.precision + ' metros</p>';
            datos += '<p>Altitud: ' + this.altitude + ' metros</p>';
            datos += '<p>Precisión de la altitud: ' + this.precisionAltitud + ' metros</p>';
            datos += '<p>Rumbo: ' + this.rumbo + ' grados</p>';
            datos += '<p>Velocidad: ' + this.velocidad + ' metros/segundo</p>';
            
        }
        ubicacion.innerHTML = datos;
    }


}


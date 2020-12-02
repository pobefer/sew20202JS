var miPosicion;
function init(visualizar) {
  miPosicion = new Geolocalización(visualizar);
}
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
      parent.getMapaEstaticoGoogle(posicion, false);
    }

    function error(err) {
      var mensaje;
      switch (error.code) {
        case error.PERMISSION_DENIED:
          mensaje = "El usuario no permite la petición de geolocalización"
          break;
        case error.POSITION_UNAVAILABLE:
          mensaje = "Información de geolocalización no disponible"
          break;
        case error.TIMEOUT:
          mensaje = "La petición de geolocalización ha caducado"
          break;
        case error.UNKNOWN_ERROR:
          mensaje = "Se ha producido un error desconocido"
          break;
      }
      parent.getMapaEstaticoGoogle(posicion, true, mensaje);
    };
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
  }



  getMapaEstaticoGoogle(dondeVerlo, error, err = null) {

    var ubicacion = document.getElementById(dondeVerlo);
    if (error) {
      ubicacion.innerHTML = '<p>' + err + '</p>';
    }

    else {
      var apiKey = "&key=AIzaSyDrTtZa5q81OrxubQF7iMcfmBFXnVq6MrY";
      var url = "https://maps.googleapis.com/maps/api/staticmap?";
      var centro = "center=" + this.latitud + "," + this.longitud;
      var zoom = "&zoom=15";
      var tamaño = "&size=800x600";
      var marcador = "&markers=color:red%7Clabel:S%7C" + this.latitud + "," + this.longitud;
      var sensor = "&sensor=false";
      this.imagenMapa = url + centro + zoom + tamaño + marcador + sensor + apiKey;
      ubicacion.innerHTML = "<img src='" + this.imagenMapa + "' alt='Mapa de Google no encontrado'/>";
    }

   
  }

}




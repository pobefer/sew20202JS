var miPosicion;
function init(visualizar) {
  miPosicion = new Geolocalización();
}
"use strict";
class Geolocalización {
  constructor(visualizar) {
    var parent = this;
    navigator.geolocation.getCurrentPosition(success, error, options);
    function success(position) {
      parent.longitud = position.coords.longitude;
      parent.latitud = position.coords.latitude;
      parent.initMap()
    };

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
      parent.verError(mensaje);
    };
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
  }
  verError(error) {
    var ubicacion = document.getElementById('map');
    ubicacion.innerHTML = '<p>' + error + '</p>';
  }

  initMap() {
    const myLatLng = { lat: this.latitud, lng: this.longitud };

    const map = new google.maps.Map(
      document.getElementById("map"),
      {
        zoom: 4,
        center: myLatLng,
      }
    );

    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
    });
  }
}


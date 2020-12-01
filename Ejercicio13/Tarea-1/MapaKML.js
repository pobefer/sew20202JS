var miPosicion;
function init() {
    miPosicion = new Geolocalización();
    miPosicion.initMap();
}
"use strict";
class Geolocalización {
    myFile = new MyFile();
    /*
    initMap() {
        this.map = new google.maps.Map(document.getElementById("map"), {
            center: new google.maps.LatLng(-19.257753, 146.823688),
            zoom: 8,
        });

    }

    cargarKML() {
        this.myFile.leerArchivo()
        this.archivos = this.myFile.archivos;
        var kmlLayer = new google.maps.KmlLayer(this.archivos[0], {
            suppressInfoWindows: true,
            preserveViewport: false,
            map: this.map
          });
        kmlLayer.setMap(this.map);
    }
    */

   initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: { lat: 43.876, lng: -5.624 },
    });
    const ctaLayer = new google.maps.KmlLayer({
      src: "ruta.kml",
      map: map,
    });
  }
  
  
}

class MyFile {
    leerArchivo() {
        this.archivos = document.getElementById("subirArchivos").files;
    }
}


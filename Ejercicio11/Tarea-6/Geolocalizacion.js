

var mapa;
function initMap() {
  mapa = new Geolocalización();
  mapa.initMap();

}
"use strict";
class Geolocalización {
  initMap() {
    var parent = this;
    navigator.geolocation.getCurrentPosition(function (pos) {

      parent.lat = pos.coords.latitude;
      parent.lon = pos.coords.longitude;

      parent.myLatlng = new google.maps.LatLng(parent.lat, parent.lon);

      var mapOptions = {
        center: parent.myLatlng,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.SATELLITE
      };

      parent.map = new google.maps.Map(document.getElementById("mapa"), mapOptions);

      parent.infowindow = new google.maps.InfoWindow();

      var request = {
        location: parent.myLatlng,
        radius: 5000,
        types: ['cafe']
      };

      parent.service = new google.maps.places.PlacesService(parent.map);

      parent.service.nearbySearch(request, function (results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            parent.crearMarcador(results[i]);
          }
        }
      });
    });
  }

  crearMarcador(place) {
    var marker = new google.maps.Marker({
      map: this.map,
      position: place.geometry.location
    });
    var parent = this;
    google.maps.event.addListener(marker, 'click', function () {
      parent.infowindow.setContent(place.name);
      parent.infowindow.open(this.map, this);
    });
  }
}
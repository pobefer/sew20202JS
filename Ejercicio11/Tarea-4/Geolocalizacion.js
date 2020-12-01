var init;
function init(){
  init = new Geolocalización();
}
class Geolocalización {
   constructor(){
     this.initMap();
   }

    initMap() {
        const myLatLng = { lat: 43, lng: -5 };
      
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
          title: "Centro!",
        });
      }
}


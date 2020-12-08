
var a;
function init() {
    a = new MapaGoogle();
}
class MapaGoogle {
    coordenadas = [];
    coordenadasMapa = [];
    initMap() {
       
        for(const item of this.coordenadas[0]){
            this.coordenadasMapa.push({ lat: parseFloat(item.split(",")[1]), lng: parseFloat(item.split(",")[0])});
        }

        this.map = new google.maps.Map(document.getElementById("map"), {
            zoom: 10,
            center: this.coordenadasMapa[0],
            mapTypeId: "terrain",
        });

        this.lineas = new google.maps.Polyline({
            path: this.coordenadasMapa,
            geodesic: true,
            strokeColor: "#FF0000",
            strokeOpacity: 1.0,
            strokeWeight: 2,
        });
        this.lineas.setMap(this.map);
    }


    cargarKML(files) {
        this.file = files[0];
        this.parseDocument(this.file);
       
        
    }
    parseDocument(file) {
        let fileReader = new FileReader();
        fileReader.onload =  (e) => {
            this.extractGoogleCoords(e.target.result);
            this.initMap();
            if(this.coordenadas.length > 0){
                document.getElementById("subirArchivos").disabled = true;
            }
        };
        fileReader.readAsText(file)
    }

    /*
    *Ante la imposibilidad de cargar el elemento kml con el KmlLayer desde 
    *   la maquina del cliente se implementa un parser manual y se a;aden como
    *   polilineas las coordenadas al mapa
    */
    extractGoogleCoords(plainText) {
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(plainText, "text/xml");

        if (xmlDoc.documentElement.nodeName == "kml") {

            for (const item of xmlDoc.getElementsByTagName('coordinates')) {
                var coords = item.innerHTML.trim();
                var elementos = coords.split("\n");
                var elemento = [];
                for (const c of elementos) {
                    elemento.push(c);
                }
                this.coordenadas.push(elemento);
            }
        } else {
            throw "error while parsing";
        }

    }
}
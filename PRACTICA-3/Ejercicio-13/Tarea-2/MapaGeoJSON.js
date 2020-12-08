
var a;
function init() {
    a = new MapaGoogle();
}
class MapaGoogle {
    initMap() {
        var a = 2;
        this.map = new google.maps.Map(document.getElementById("map"), {
            zoom: 10,
            center: { lat: parseFloat(this.rutas[0].coordenadas.lat), lng: parseFloat(this.rutas[0].coordenadas.lon) },
            mapTypeId: "terrain",
        });

        this.infowindow = new google.maps.InfoWindow();
        this.marker = [];
        for (const ruta of this.rutas) {
            console.log(parseFloat(ruta.coordenadas.lat));
            this.marker.push({
                marcador: new google.maps.Marker({
                    map: this.map,
                    position: { lat: parseFloat(ruta.coordenadas.lat), lng: parseFloat(ruta.coordenadas.lon) }
                }), nombre: ruta.name
            });
            for (const hito of ruta.hitos) {
                this.marker.push({
                    marcador: new google.maps.Marker({
                        map: this.map,
                        position: { lat: parseFloat(hito.coordenadas.lat), lng: parseFloat(hito.coordenadas.lon) }
                    }), nombre: hito.name
                });
            }
        }
        for (const m of this.marker) {
            var parent = this;
            google.maps.event.addListener(m.marcador, 'click', function () {
                parent.infowindow.setContent(m.nombre);
                parent.infowindow.open(this.map, this);
            });
        }


    }
    cargarGeoJSON(files) {
        this.file = files[0];
        this.parseDocument(this.file);
    }

    
    parseDocument(file) {
        let fileReader = new FileReader();

        fileReader.onload = (e) => {
            try {
                var myData = JSON.parse(e.target.result);
                this.extractGoogleCoords(myData);
                this.initMap();
                if (this.rutas.length > 0) {
                    document.getElementById("subirArchivos").disabled = true;
                }
            } catch (e) {
                if (e instanceof SyntaxError) {
                    this.printError(e, true);
                } else {
                    this.printError(e, false);
                }
            }

        };
        fileReader.readAsText(file)
    }

    printError = function (error, explicit) {
        document.getElementById("map").innerHTML = '<p>' + explicit ? 'EXPLICIT '
            + error.name + error.message
            : 'INEXPLICIT ' + error.name + error.message + '</p>';
    }

    extractGoogleCoords(myData) {
        this.rutas = []
        var a = myData.rutas
        var b = a[0]
        for (const item of myData.rutas) {
            var name = item.name;
            var coordenadasInicio = new Coordenadas(item.coordenadas.lat, item.coordenadas.lon);
            var hitos = [];
            for (const h of item.hitos) {
                var nameHito = h.name;
                var coordenadasHito = new Coordenadas(h.coordenadas.lat, h.coordenadas.lon);
                hitos.push(new Hito(nameHito, coordenadasHito));
            }
            this.rutas.push(new Ruta(name, coordenadasInicio, hitos));
        }

    }
}

class Ruta {
    constructor(name, coordenadas, hitos) {
        this.name = name;
        this.coordenadas = coordenadas;
        this.hitos = hitos;
    }
}


class Coordenadas {
    constructor(lat, lon) {
        this.lat = lat;
        this.lon = lon;
    }
}

class Hito {
    constructor(name, coordenadas) {
        this.name = name;
        this.coordenadas = coordenadas;
    }
}
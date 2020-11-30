var meteo;
function init() {
    meteo = new Meteo();
    meteo.cargarDatos();
}

class Meteo {
    apikey = "47b790fd0fc41878c80c57c9846132cb";
    ciudad = ["Oviedo", "Langreo", "Santander"];
    unidades = "&units=metric";
    idioma = "&lang=es";
    tipo = "&mode=xml";
    urlInicial = "https://api.openweathermap.org/data/2.5/weather?q=";
    urlFinal = this.tipo +this.unidades + this.idioma + "&APPID=" + this.apikey;
    error = "<h2>¡problemas! No puedo obtener información de <a href='https://openweathermap.org'>OpenWeatherMap</a></h2>";
    cargarMeteo(i) {
        $.ajax({
            dataType: "xml",
            url: this.urlInicial + this.ciudad[i] + this.urlFinal,
            method: 'GET',
            success: function (datos) {
                $("#ciudad" + (i+1)).append($('city',datos).attr("name"));
                $("#icon" + (i+1)).attr("src", "https://openweathermap.org/img/w/" + $('weather',datos).attr("icon") + ".png");
                $("#temperatura" + (i+1)).append($('temperature',datos).attr("value")+$('temperature',datos).attr("unit"));
                $("#maxT" + (i+1)).append($('temperature',datos).attr("min")+$('temperature',datos).attr("unit"));
                $("#minT" + (i+1)).append($('temperature',datos).attr("max")+$('temperature',datos).attr("unit"));
                $("#presion" + (i+1)).append($('pressure',datos).attr("value")+$('pressure',datos).attr("unit"));
                $("#humedad" + (i+1)).append($('humidity',datos).attr("value")+$('humidity',datos).attr("unit"));
            },
            error: function () {
                document.write(this.error);
            }
        });
    }
    cargarDatos() {
        for (var i = 0; i < this.ciudad.length; i++) {
            this.cargarMeteo(i);
        }
    }



}
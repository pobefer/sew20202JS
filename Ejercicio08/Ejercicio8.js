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
    urlInicial = "http://api.openweathermap.org/data/2.5/weather?q=";
    urlFinal = this.unidades + this.idioma + "&APPID=" + this.apikey;
    error = "<h2>¡problemas! No puedo obtener información de <a href='http://openweathermap.org'>OpenWeatherMap</a></h2>";
    cargarMeteo(i) {
        $.ajax({
            dataType: "json",
            url: this.urlInicial + this.ciudad[i] + this.urlFinal,
            method: 'GET',
            success: function (data) {
                $("#ciudad" + (i+1)).append(data.name);
                $("#icon" + (i+1)).attr("src", "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
                $("#temperatura" + (i+1)).append(data.main.temp);
                $("#maxT" + (i+1)).append(data.main.temp_max);
                $("#minT" + (i+1)).append(data.main.temp_min);
                $("#presion" + (i+1)).append(data.main.pressure);
                $("#humedad" + (i+1)).append(data.main.humidity);
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


    rellenarCampos(i, data) {
        $("#ciudad" + i).append(this.datos.name);
        $("#icon" + i).attr("src", "https://openweathermap.org/img/w/" + this.datos.weather.icon + ".png");
        $("#temperatura" + i).append(data.main.temp);
        $("#maxT" + i).append(data.main.temp_max);
        $("#minT" + i).append(data.main.temp_min);
        $("#presion" + i).append(data.main.pressure);
        $("#humedad" + i).append(data.main.humidity);
    }
}
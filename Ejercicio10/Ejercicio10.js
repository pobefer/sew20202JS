var cotizaciones;
function init() {
  cotizaciones = new Cotizaciones();
  cotizaciones.load();
  //cotizaciones.tenon.comprobar();

}

class Cotizaciones {
 constructor(){
  //this.tenon = new Tenon();
 }
  load() {
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary?region=US",
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "37ae8490c2mshb30f4931f70e872p163836jsn310fb764c9eb",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
      }
    };
    $.ajax(settings).done(function (response) {
      var respuesta = response.marketSummaryResponse.result;
      for (var i = 0; i < respuesta.length; i++) {
        $("#tabla").append("<tr><td id='exchange" + (i + 1) + "'></td><td id='TimeZone" + (i + 1) + "'></td><td id='Market" + (i + 1) + "'></td><td id='MarketChange" + (i + 1) + "'></td><td id='MarketChangePercentaje" + (i + 1) + "'></td><td id='ClosedAt" + (i + 1) + "'></td><td id='Price" + (i + 1) + "'></td><td id='Time" + (i + 1) + "'></td></tr>");

      }
      for (var i = 0; i < respuesta.length; i++) {
        $("#exchange" + (i + 1)).append(respuesta[i].fullExchangeName);
        $("#TimeZone" + (i + 1)).append(respuesta[i].exchangeTimezoneShortName);
        $("#Market" + (i + 1)).append(respuesta[i].market);
        $("#MarketChange" + (i + 1)).append(respuesta[i].regularMarketChange.fmt);
        $("#MarketChangePercentaje" + (i + 1)).append(respuesta[i].regularMarketChangePercent.fmt);
        $("#ClosedAt" + (i + 1)).append(respuesta[i].regularMarketPreviousClose.fmt);
        $("#Price" + (i + 1)).append(respuesta[i].regularMarketPrice.fmt);
        $("#Time" + (i + 1)).append(respuesta[i].regularMarketTime.fmt);
      }
    });
  }
}
/*
class Tenon {
  comprobar() {
    var data = {
      url: "https://pobefer.github.io/sew20202JS/Ejercicio10/Ejercicio10.html",
      key: "25d701923c38b5f7f0bcdd2cb525ac97"
    };

    const options = {
      host: 'tenon.io',
      port: 443,
      path: '/api/index.php',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': data.byteLength
      }
    };

    $.ajax(options).done(function (response) {
      console.log('body: ' + response);

    });
  }
}
*/

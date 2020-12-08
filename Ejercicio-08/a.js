
function init() {
    urlInicial = "https://cf.biwenger.com/api/v2/competitions/la-liga/data?lang=en&score=1";
    $.ajax({
        crossDomain: true,
        dataType: 'jsonp',
        url: urlInicial,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function (data) {
            console.log(data);
            movidas(data.data);
        },
        error: function () {
            document.write(this.error);
        }
    });
}

function movidas(data){
    jQuery.each(data.teams, function(i, item) {
        $("body").append("<section><h2>"+item.name+"</h2><table id='"+item.id+"'><tr><th>Nombre</th><th>Precio</th><th>Jugado En casa</th><th>Jugado Fuera</th><th>Balance</th><th>Puntos</th><th>Puntos en casa</th><th>Puntos fuera</th></tr></table></section>");
            cargarJugadores(data , item.id);
      });
      /*
    for (var item of data.teams){
        console.log(item);
        $("body").append("<section>"+
            +"<h2>"+item.name+"</h2>"+
            +"<table id='"+item.id+"'>"+
            +"<tr>"+
            +"<th>Nombre</th>"+
            +"<th>Precio</th>"+
            +"<th>Jugado En casa</th>"+
            +"<th>Jugado Fuera</th>"+
            +"<th>Balance</th>"+
            +"<th>Puntos</th>"+
            +"<th>Puntos en casa</th>"+
            +"<th>Puntos fuera</th>"+
            +"</tr>"+
            +"</table>"+
            +"</section>");
            a+=1;
            cargarJugadores(data , item.id);
           
    }
    */
    
    
}

function cargarJugadores(data, id){
    jQuery.each(data.players, function(i, item) {
        if(item.teamID == id){
            $("#"+id+"").append("<tr><td>"+item.name+"</td><td>"+item.price+"</td><td>"+item.playedHome+"</td><td>"+item.playedAway+"</td><td>"+item.priceIncrement+"</td><td>"+item.points+"</td><td>"+item.pointsHome+"</td><td>"+item.pointsAway+"</td></tr>");
        }
      });
      /*
    for (var item of data.players){
        if(item.teamID == id){
            $("#"+id+"").append(""+
            +"<tr>"+
            +"<td>"+item.name+"</td>"+
            +"<td>"+item.price+"</td>"+
            +"<td>"+item.playedHome+"</td>"+
            +"<td>"+item.playedAway+"</td>"+
            +"<td>"+item.priceIncrement+"</td>"+
            +"<td>"+item.points+"</td>"+
            +"<td>"+item.pointsHome+"</td>"+
            +"<td>"+item.pointsAway+"</td>"+
            +"</tr>");
        }
    }
    */
}




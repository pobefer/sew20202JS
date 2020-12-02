var opciones;
function init(){
    opciones = new Opciones();
}
class Opciones{
    constructor(){
        $("#binaryP").hide();
        $("#SecuencialP").show();
    }

    ocultar(){
        $("#SecuencialP").hide();
        $("#binaryP").show();
        $("#TipoBusquedaH").text("Busqueda Binaria");
        $("#TipoBusquedaP").text("Codigo Binaria");
    }

    mostrar(){
        $("#SecuencialP").show();
        $("#binaryP").hide();
        $("#TipoBusquedaH").text("Busqueda Secuencial");
        $("#TipoBusquedaP").text("Codigo Secuencial");
    }

    createElement(){
        var miParrafo = document.createElement("pre");
        var texto = document.getElementById("ta").value;
        miParrafo.innerHTML = texto; 
       
        $("#binaryP").after(miParrafo);
    }

    deleteElement(){
        var p1 = document.getElementById("SecuencialP");
        var p2 = document.getElementById("binaryP");

        $("pre").remove();

        $("#tipoBusquedaP").after(p2);
        $("#tipoBusquedaP").after(p1);
       

        this.mostrar()
    }

    viewElements(){
        $("*", document.body).each(function() {
            var etiquetaPadre = $(this).parent().get(0).tagName;
            $(this).prepend(document.createTextNode( "Padre : <"  + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName +"> valor: "));
        });
    }

    


}
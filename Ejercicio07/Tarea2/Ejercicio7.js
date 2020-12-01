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


}
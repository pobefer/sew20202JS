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
    }

    mostrar(){
        $("#SecuencialP").show();
        $("#binaryP").hide();
    }
}
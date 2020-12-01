var opciones;
function init(){
    opciones = new Opciones();
}
class Opciones{

    ocultar(){
        $("p").hide();
    }

    mostrar(){
        $("p").show();
    }
}
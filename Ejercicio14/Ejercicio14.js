var canvas;
function init() {
    canvas = new Canvas();
}
class Canvas {
    //======================================================================
    // VARIABLES
    //======================================================================
    constructor() {
        this.miCanvas = document.querySelector('#pizarra');
        this.lineas = [];
        this.correccionX = 0;
        this.correccionY = 0;
        this.pintarLinea = false;
        // Marca el nuevo punto
        this.nuevaPosicionX = 0;
        this.nuevaPosicionY = 0;

        this.posicion = this.miCanvas.getBoundingClientRect()
        this.correccionX = this.posicion.x;
        this.correccionY = this.posicion.y;

        this.miCanvas.width = 500;
        this.miCanvas.height = 500;

        //Color de la linea
        this.color = '#fff';

        // Eventos raton
        this.miCanvas.addEventListener('mousedown', this.empezarDibujo, false);
        this.miCanvas.addEventListener('mousemove', this.dibujarLinea, false);
        this.miCanvas.addEventListener('mouseup', this.pararDibujar, false);

        // Eventos pantallas táctiles
        this.miCanvas.addEventListener('touchstart', this.empezarDibujo, false);
        this.miCanvas.addEventListener('touchmove', this.dibujarLinea, false);

        //FullScrean
        document.addEventListener("keydown", function (e) {
            if (e.keyCode == 13) {
                canvas.toggleFullScreen();
            }
        }, false);

    }

    //======================================================================
    // FUNCIONES
    //======================================================================

    audio() {
        var stream = new Video('v.mp4');
        var captions = stream.addTextTrack('captions', 'live captions', 'en-US');

        // as caption cues come in, add them to the track for display
        stream.addCue(new TextTrackCue('1', 0.783, 1.612, 'Mum, give me the butter.'));
        stream.addCue(new TextTrackCue('2', 1.612, 2.691, 'I am waiting for the magic word!'));
    }

    clear() {
        canvas = new Canvas();
    }

    toggleFullScreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }

    /**
     * Funcion que empieza a dibujar la linea
     */
    empezarDibujo() {
        canvas.pintarLinea = true;
        canvas.lineas.push([]);
    };

    /**
     * Funcion que guarda la posicion de la nueva línea
     */
    guardarLinea() {
        canvas.lineas[canvas.lineas.length - 1].push({
            x: canvas.nuevaPosicionX,
            y: canvas.nuevaPosicionY
        });
    }

    /**
     * Funcion dibuja la linea
     */
    dibujarLinea(event) {
        event.preventDefault();
        if (canvas.pintarLinea) {
            let ctx = canvas.miCanvas.getContext('2d')
            // Estilos de linea
            ctx.lineJoin = ctx.lineCap = 'round';
            ctx.lineWidth = 10;
            // Color de la linea
            ctx.strokeStyle = canvas.color;
            console.log(canvas.color)
            // Marca el nuevo punto
            if (event.changedTouches == undefined) {
                // Versión ratón
                canvas.nuevaPosicionX = event.layerX;
                canvas.nuevaPosicionY = event.layerY;
            } else {
                // Versión touch, pantalla tactil
                canvas.nuevaPosicionX = event.changedTouches[0].pageX - correccionX;
                canvas.nuevaPosicionY = event.changedTouches[0].pageY - correccionY;
            }
            // Guarda la linea
            canvas.guardarLinea();
            // Redibuja todas las lineas guardadas
            ctx.beginPath();
            canvas.lineas.forEach(function (segmento) {
                ctx.moveTo(segmento[0].x, segmento[0].y);
                segmento.forEach(function (punto, index) {
                    ctx.lineTo(punto.x, punto.y);
                });
            });
            ctx.stroke();
        }
    }

    /**
     * Funcion que deja de dibujar la linea
     */
    pararDibujar() {
        canvas.pintarLinea = false;
        canvas.guardarLinea();
    }

    reproducePitido() {
        let audioContext = new (window.AudioContext || window.webkitAudioContext)();

        let sourceNode = audioContext.createOscillator();
        sourceNode.type = 'sine';
        sourceNode.frequency.value = 261.6;
        sourceNode.detune.value = 0;

        //Connect the source to the speakers
        sourceNode.connect(audioContext.destination);

        //Make the sound audible for 100 ms
        sourceNode.start();
        window.setTimeout(function () { sourceNode.stop(); }, 100);
    }




}


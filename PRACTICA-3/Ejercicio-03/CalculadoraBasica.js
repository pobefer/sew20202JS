var calculadora;
function init(){
    calculadora = new CalculadoraBasica();
  }


  class CalculadoraBasica{
    memroiaAux ="";
    memoria = 0.0;
    memoriaLimpia = false;

    suma(){
        resultado.textContent = resultado.textContent  + "+";
    }
    digito(numero){
        resultado.textContent = resultado.textContent  + numero;
    }
    punto(){
        resultado.textContent = resultado.textContent  + ".";
    }
    resta(){
        resultado.textContent = resultado.textContent  + "-";
    }
    multiplicacion(){
        resultado.textContent = resultado.textContent  + "*";
    }
    division(){
        resultado.textContent = resultado.textContent  + "/";
    }
    mrc(){
        resultado.textContent = this.memoria;
    }
    mNegative(){
        //se usa eval para evitar un error si el texto de la calculadora 
        //no es una expresion que se pueda introducir a memoria 
        // ej -> 6* -> m- ; deberia dar error
        this.memroiaAux = resultado.textContent;
        try { 
            this.memoria = eval(this.memoria +"-"+ this.memroiaAux);
        }
        catch(err) {
             resultado.textContent = "Error = " + err;
        }
    }
    mPositive(){
        //se usa eval para evitar un error si el texto de la calculadora 
        //no es una expresion que se pueda introducir a memoria 
        // ej -> 6* -> m+ ; deberia dar error
        this.memroiaAux = resultado.textContent;
        try { 
            this.memoria = eval(this.memoria +"+"+ this.memroiaAux);
        }
        catch(err) {
            resultado.textContent = "Error = " + err;
        }
    }
    reset(){
        resultado.textContent = "";
    }
    calc(){
        try { 
            resultado.textContent = eval(resultado.textContent);
        }
        catch(err) {
            resultado.textContent = "Error = " + err;
        }
    }

  }
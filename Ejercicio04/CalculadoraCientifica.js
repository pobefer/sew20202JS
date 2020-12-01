var calculadora;
function init(){
    calculadora = new CalculadoraCientifica();
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
    calcular(){
        try { 
            resultado.textContent = eval(resultado.textContent);
            return resultado.textContent;
        }
        catch(err) {
            resultado.textContent = "Error = " + err;
        }
    }

  }

  class CalculadoraCientifica extends CalculadoraBasica{
    constructor() {
        super();
      }
    
      calc(f, a){
        try { 
            resultado.textContent = eval(f(a));
        }
        catch(err) {
            resultado.textContent = "Error = " + err;
        }
    }

      exp(){
        resultado.textContent = resultado.textContent  + "**";
      }

      tenExp(){
        resultado.textContent = resultado.textContent  + "10**";
      }

      log(){
        this.calc(Math.log, this.calcular(resultado.textContent));
      }

      sin(){
        this.calc(Math.sin, this.calcular(resultado.textContent));
      }

      cos(){
        this.calc(Math.cos, this.calcular(resultado.textContent));
      }

      tan(){
        this.calc(Math.tan, this.calcular(resultado.textContent));
      }

      expTen(){
        resultado.textContent = resultado.textContent  + "10** ";
      }

      mod(){
        resultado.textContent = resultado.textContent  + "%";
      }

      pi(){
        resultado.textContent = resultado.textContent  + "3.1416 ";
      }

      e(){
        resultado.textContent = resultado.textContent  + "2.71828 ";
      }

      square(){
        resultado.textContent = resultado.textContent  + "**2";
      }

      sqrt(){
          this.calc(Math.sqrt, this.calcular(resultado.textContent));
      }

      abs(){
        this.calc(Math.abs, this.calcular(resultado.textContent));
      }

      inverse(){
        this.calc(Math.inverse, this.calcular(resultado.textContent));
      }

      parentesisA(){
        resultado.textContent = resultado.textContent  + "(";
      }

      parentesisC(){
        resultado.textContent = resultado.textContent  + ")";
      }
  }


  
var calculadora;
function init() {
    calculadora = new CalculadoraRPN();
}

class Stack {

    // Array is used to implement stack 
    constructor() {
        this.items = [];
    }
    push(element) {
        // push element into the items 
        this.items.push(element);
    }
    pop() {
        // return top most element in the stack 
        // and removes it from the stack 
        // Underflow if stack is empty 
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }
    peek() {
        // return the top most element from the stack 
        // but does'nt delete it. 
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        // return true if stack is empty 
        return this.items.length == 0;
    }


}

class CalculadoraRPN {
    memroiaAux = "";
    memoria = 0.0;
    memoriaLimpia = false;
    stack = new Stack();
    operando1;
    operando2;

    suma() {
        this.operando2 = this.stack.pop();
        this.operando1= this.stack.pop();
        this.stack.push(this.operando1+this.operando2);
        resultado.textContent = this.operando1+this.operando2;
    }
    digito(numero) {
        resultado.textContent = resultado.textContent + numero;
    }
    punto() {
        resultado.textContent = resultado.textContent + ".";
    }
    resta() {
        this.operando2 = this.stack.pop();
        this.operando1= this.stack.pop();
        this.stack.push(this.operando1-this.operando2);
        resultado.textContent = this.operando1-this.operando2;
    }
    multiplicacion() {
        this.operando2 = this.stack.pop();
        this.operando1= this.stack.pop();
        this.stack.push(this.operando1*this.operando2);
        resultado.textContent = this.operando1*this.operando2;
    }
    division() {
        this.operando2 = this.stack.pop();
        this.operando1= this.stack.pop();
        this.stack.push(this.operando1/this.operando2);
        resultado.textContent = this.operando1/this.operando2;
    }

    sin(){
        this.operando1= this.stack.pop();
        this.stack.push(Math.sin(this.operando1));
        resultado.textContent = Math.sin(this.operando1);
    }
    cos(){
        this.operando1= this.stack.pop();
        this.stack.push(Math.cos(this.operando1));
        resultado.textContent = Math.cos(this.operando1);
    }

    tan(){
        this.operando1= this.stack.pop();
        this.stack.push(Math.tan(this.operando1));
        resultado.textContent = Math.tan(this.operando1);
    }

    exp(){
        this.operando2= this.stack.pop();
        this.operando1= this.stack.pop();
        this.stack.push(Math.pow(this.operando1,this.operando2));
        resultado.textContent = Math.pow(this.operando1,this.operando2);
    }

    cube(){
        this.operando1= this.stack.pop();
        this.stack.push(Math.pow(this.operando1,3));
        resultado.textContent = Math.pow(this.operando1,3);
    }

    square(){
        this.operando1= this.stack.pop();
        this.stack.push(Math.pow(this.operando1,2));
        resultado.textContent = Math.pow(this.operando1,2);
    }

    sqrt(){
        this.operando1= this.stack.pop();
        this.stack.push(Math.sqrt(this.operando1));
        resultado.textContent = Math.sqrt(this.operando1);
    }

    mrc() {
        resultado.textContent = this.memoria;
    }
    mNegative() {
        //se usa eval para evitar un error si el texto de la calculadora 
        //no es una expresion que se pueda introducir a memoria 
        // ej -> 6* -> m- ; deberia dar error
        this.memroiaAux = resultado.textContent;
        try {
            this.memoria = this.memoria - this.memroiaAux;
        }
        catch (err) {
            resultado.textContent = "Error = " + err;
        }
    }
    mPositive() {
        this.memroiaAux = resultado.textContent;
        try {
            this.memoria = this.memoria + this.memroiaAux;
        }
        catch (err) {
            resultado.textContent = "Error = " + err;
        }
    }
    reset() {
        resultado.textContent = "";
    }
    enter() {
        try {
            this.stack.push(resultado.textContent);
            resultado.textContent = "";
        }
        catch (err) {
            resultado.textContent = "Error = " + err;
        }
    }

}
var calculadora;
function init() {
    calculadora = new CalculadoraRPN();
}

class Stack {

    // Array is used to implement stack 
    constructor() {
        this.items = [];
    }

    getItems() {
        return this.items;
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

    comparision(a) {
        if (this.items.length < a)
            return false;
        return true;
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
        if (this.stack.comparision(2)) {
            this.operando2 = this.stack.pop();
            this.operando1 = this.stack.pop();
            this.stack.push(parseFloat(this.operando1) + parseFloat(this.operando2));
            this.rellenar();
        }
    }
    digito(numero) {
        resultado.textContent = resultado.textContent + numero;
    }
    punto() {
        resultado.textContent = resultado.textContent + ".";
    }
    resta() {
        if (this.stack.comparision(2)) {
            this.operando2 = this.stack.pop();
            this.operando1 = this.stack.pop();
            this.stack.push(parseFloat(this.operando1) - parseFloat(this.operando2));
            this.rellenar();
        }
    }
    multiplicacion() {
        if (this.stack.comparision(2)) {
            this.operando2 = this.stack.pop();
            this.operando1 = this.stack.pop();
            this.stack.push(parseFloat(this.operando1) * parseFloat(this.operando2));
            this.rellenar();
        }
    }
    division() {
        if (this.stack.comparision(2)) {
            this.operando2 = this.stack.pop();
            this.operando1 = this.stack.pop();
            this.stack.push(parseFloat(this.operando1) / parseFloat(this.operando2));
            this.rellenar();
        }
    }

    sin() {
        if (this.stack.comparision(1)) {
            this.operando1 = this.stack.pop();
            this.stack.push(Math.sin(this.operando1));
            this.rellenar();
        }
    }
    cos() {
        if (this.stack.comparision(1)) {
            this.operando1 = this.stack.pop();
            this.stack.push(Math.cos(this.operando1));
            this.rellenar();
        }
    }

    tan() {
        if (this.stack.comparision(1)) {
            this.operando1 = this.stack.pop();
            this.stack.push(Math.tan(this.operando1));
            this.rellenar();
        }
    }

    exp() {
        if (this.stack.comparision(2)) {
            this.operando2 = this.stack.pop();
            this.operando1 = this.stack.pop();
            this.stack.push(Math.pow(this.operando1, this.operando2));
            this.rellenar();
        }
    }

    cube() {
        if (this.stack.comparision(1)) {
            this.operando1 = this.stack.pop();
            this.stack.push(Math.pow(this.operando1, 3));
            this.rellenar();
        }
    }

    square() {
        if (this.stack.comparision(1)) {
            this.operando1 = this.stack.pop();
            this.stack.push(Math.pow(this.operando1, 2));
            this.rellenar();
        }
    }

    sqrt() {
        if (this.stack.comparision(1)) {
            this.operando1 = this.stack.pop();
            this.stack.push(Math.sqrt(this.operando1));
            this.rellenar();
        }
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
            this.memoria = parseFloat(this.memoria) - parseFloat(this.memroiaAux);
        }
        catch (err) {
            resultado.textContent = "Error = " + err;
        }
    }
    mPositive() {
        this.memroiaAux = resultado.textContent;
        try {
            this.memoria = parseFloat(this.memoria) + parseFloat(this.memroiaAux);
        }
        catch (err) {
            resultado.textContent = "Error = " + err;
        }
    }
    reset() {
        this.stack = new Stack();
        this.rellenar();
    }
    enter() {
        try {
            this.stack.push(resultado.textContent);
            this.rellenar();
        }
        catch (err) {
            resultado.textContent = "Error = " + err;
        }
    }

    rellenar() {
        resultado.textContent = "";
        pila.textContent = "";
        var a = this.stack.getItems();
        for (var i = a.length - 1; i >= 0; i--) {
            pila.textContent += (i + 1) + ":  " + a[i] + "\n";
        }
    }

    clear() {
        this.operando1 = this.stack.pop();
        resultado.textContent = this.operando1;
        pila.textContent = "";
        var a = this.stack.getItems();
        for (var i = a.length - 1; i >= 0; i--) {
            pila.textContent += (i + 1) + ":  " + a[i] + "\n";
        }

    }

}
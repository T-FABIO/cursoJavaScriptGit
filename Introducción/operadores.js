//Operaciones Aritmeticas
let tipo = prompt('ingresa el tipo de operacion: ');
let resultado;

let n1 = parseFloat(prompt('ingresa numero 1: '));
let n2 = parseFloat(prompt('ingresa numero 2: '));

function operaciones(tipo, numero1, numero2){
    if(tipo == 'resta' && numero1 < numero2){
        alert('la opreacion no se puede realizar porque ' + numero1 + ' es menor que ' + numero2);
        return;
    }else if(tipo == 'resta'){
        resultado = numero1 - numero2;
    }else if(tipo == 'suma'){
        resultado = numero1 + numero2;
    }
    
    confirm('resultado: ' + resultado);

}

operaciones(tipo, n1, n2);

//Suma
const ejemploSuma = 10 + 10;

//Resta
const ejemploResta = 10 - 10;




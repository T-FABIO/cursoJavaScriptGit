//Operaciones Aritmeticas

//explicadas como una calculadora usando funciones: suma, resta, multiplicacion, division.


    
function operaciones(){

    let tipo = prompt('ingresa el tipo de operacion: ');
    let resultado = 0, numero1 = 0, numero2 = 0;
    
    numero1 = parseFloat(prompt('ingresa numero 1: '));
    numero2 = parseFloat(prompt('ingresa numero 2: '));

    if(tipo == 'resta' && numero1 < numero2){

        alert('la opreacion no se puede realizar porque ' + numero1 + ' es menor que ' + numero2);
        return;

    }else if(tipo == 'resta'){

        resultado = numero1 - numero2;

    }else if(tipo == 'suma'){

        resultado = numero1 + numero2;

    }else if(tipo == 'multiplicacion'){

        resultado = numero1 * numero2;

    }else if(tipo == 'division'){

        //division
        resultado = numero1 / numero2;
        //residuo de la division
        let residuo = numero1 % numero2;
        confirm('residuo: ' + residuo);
    }
    
    confirm('resultado: ' + resultado);

}

//operaciones();

//Operadores de Aumento

let numeroAumento = 1;
numeroAumento++;

let numeroDisminucuion = 1;
numeroDisminucuion--;

/*Operadores de Asignación
    
    += suma un numero al valor de una variable.
    -= resta un numero al valor de una variable.
    *= multiplica un numero al valor de una variable.
    /=  divide un numero al valor de una variable.
    %=  devuelve el residuo de un numero al valor de una variable.
    
*/

//Ejemplo

/*let numero = 5;
numero += 5;
console.log(numero);*/

/* Operadores de Comparacion:
    nos permiten comparar valores

    == igual que en valores
    === igual en valor y tipo de valor
    != diferente
    !== diferente en valor y diferente en tipo
    > mayor que
    < menor que
    >= myor o igual que
    <= menor o igual que
    ? operador ternario

*/

//Ejemplo 

//const resultado = 5 > 1; //true
//const resultado = 1 > 5; //false
//const resultado = 10 == 10; //true

/*const resultado = 10 === '10'; //false 
    en este ejemplo se usan tres simbolos iguales
    para comparar el numero entero 10 con 
    la cadena de texto '10'. 

    los dos son el mismo numero pero no el mismo tipo. 
*/

/* Ejemplo
const resultado1 = 10 === 10; //true
const resultado2 = 10 === '10'; //false
console.log('resultado 1: ' + resultado1);
console.log('resultado 2: ' + resultado2);
*/


/* Operador Ternario
    con este operador se pueden hacer comparaciones y ejecutar un codigo si se cumple la condicion



*/

// const resultado = 7 > 10 ? 'el primer valor es mayor que uno' : 'el primer valor es menor que uno';
// console.log(resultado);




// 📌 #1 - Forma de return con variables
// const operacion = (tipo, numero1, numero2) => {
//     let resultado;

//     if (tipo === 'suma') {
//         resultado = numero1 + numero2;
//     } else if (tipo === 'resta') {
//         resultado = numero1 - numero2;
//     }

//     return resultado;
// };

// const miVariable = operacion('suma', 100, 200);
// console.log(miVariable);

// 📌 Forma #2 - retornamos directamente el valor de la operacion

const operacion = (tipo, numero1, numero2) => {
    if (tipo === 'suma') {
        return numero1 + numero2;
    } else if (tipo === 'resta') {
        return numero1 - numero2;
    }

};

const miVariable = operacion('suma', 100, 200);
console.log(miVariable);
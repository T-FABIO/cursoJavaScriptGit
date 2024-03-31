// const saludo = (nombre = 'amigo') => {
//     console.log(`Hola ${nombre}!`);
// }



// codigo acortado
// const saludo = (nombre = 'amigo') => console.log(`hola ${nombre}`);

//saludo('carlos');

// 📌 Multiples parametros

const operacion = (tipo, numero1, numero2) => {
    // console.log(numero1 + numero2);
    if (tipo === 'suma') {
        console.log(numero1 + numero2);
    } else if (tipo === 'resta') {
        console.log(numero1 - numero2);
    }

}

operacion('suma', 100, 100);
operacion('resta', 100, 200);
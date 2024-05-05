'use strict';

//Forma 1 - Mediante palabras export default
// export default () => {
//     return {
//         nombre: 'fabio',
//         correo: 'fabiotru04@gmail.com'
//     };
// };


// Forma 2 - Final del documento
const obtenerUsuario = () => {
    return {
        nombre: 'fabio',
        correo: 'fabiotru04@gmail.com'
    };
};

console.log('Soy codigo que se ejecuta desde el archivo empty export.js');

const correo = 'corre@correo.com';

/*
    📌 Named Imports - la mas utilizada
*/

console.log(obtenerUsuario());
console.log(correo);


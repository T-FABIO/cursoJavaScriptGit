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

export default obtenerUsuario;
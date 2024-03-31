
// 📌 Ejemplo #1:
// const usuario = {
//     edad: 19,
//     pais: 'colombia',
//     ticket: true

// };

// if (usuario.edad > 17) {
//     console.log('Acceso permitido');

// } else {
//     console.log('Acceso denegado');

// }

// 📌 Ejemplo #2 - Combiando operadores
// const usuario = {
//     edad: 19,
//     pais: 'colombia',
//     ticket: true

// };

// if (usuario.edad >= 18 && usuario.ticket) {
//     console.log('El susuario es mayor de edad y tiene ticket');

// } else {
//     console.log('El usuario es menor de edad o no tiene ticket');

// }

// 📌 Ejemplo #3 - Anidando condicionales
// const usuario = {
//     edad: 19,
//     pais: 'colombia',
//     ticket: true

// };

// if (usuario.edad >= 18) {
//     if (usuario.ticket) {
//         console.log('El susuario es mayor de edad y tiene ticket');
//     } else {
//         console.log('El usuario es mayor de edad pero no tiene ticket');
//     }

// } else {
//     console.log('El usuario es menor de edad');
// }

// 📌Ejemplo #4 - elseif
const usuario = {
    edad: 19,
    pais: 'colombia',
    ticket: true

};

if (usuario.pais === 'colombia') {
    console.log('El usuario es colombiano');

} else if (usuario.pais === 'mexico') {
    console.log('El usuario es mexicano');
} else if (usuario.pais === 'españa') {
    console.log('El usuario es español');
} else {
    console.log('El usuario es de otro pais');
}
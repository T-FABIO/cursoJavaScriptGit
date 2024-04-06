/*
    📌 Ciclo forEach
    Es un método de los arreglos que podemos usar para recorrer los elementos.
*/

// const amigos = ['Alejandro', 'Cesar', 'Manuel'];
// amigos.forEach((amigo, index) => console.log(`el amigo numero ${index} es: ${amigo}`));

/*
    📌 Ciclo for in
    Nos permite recorrer las propiedades de un objeto.
*/

// const persona = {
//     nombre: 'Carlos',
//     edad: 27,
//     correo: 'correo@correo.com',
// };

// for (propiedad in persona) {
//     // console.log(propiedad); //se accede alas propiedades del obejto.
//     // conole.log(persona[propiedad]); // se accede a los valores de las propiedades.

//     // para borrar los valores de las propiedades
//     persona[propiedad] = '';
// }

// console.log(persona);

/*
    📌 Ciclo for of
    Nos permite recorrer los valores de un objeto iterable.
    Podemos recorrer: Arreglos, Cadenas de Texto, Mapas y Listas de Nodos, etc
*/

const etiquetas = document.head.children;
console.log(etiquetas);

// for (elemento of etiquetas) {
//     console.log(elemento);
// }


// tomar la coleccion de etiquetas y guardarlo en un arreglo
[...etiquetas].forEach((elemento) => console.log(elemento));


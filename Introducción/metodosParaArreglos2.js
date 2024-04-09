/*
    📌 .indexOf()
    Obtenemos el primer index de un elemento
    si no hay elemento nos retorna -1

    1er - parametro: el elemento que estemos buscando
    2do - parametro: desde que index quieres que empiece la busqueda
*/

const nombres = ['fabio', 'pedro', 'pablo', 'carlos', 'mario', 'juan', 'carlos', 'santiago'];
console.log(nombres.indexOf('carlos', 4)); // salida : 6

// si hay datos repetidos en el arreglo devuelce el index del primer elemento repetido
// si buscas un elemento que no esta en la lista retorna -1

/*
    📌 .lastIndexOf()
    Obtenemos el ultimo index de un elemento en un array
*/

// console.log(nombres.lastIndexOf('carlos'));

/*
    📌 .forEach()
    Nos permite ejecutar una funcion por cada elemento
    la funcion se repite el numero de elementos que tenga el array
*/


// Recorrer un arreglo
// nombres.forEach((nombre, index) => {
//     console.log(`Hola nombre ${nombre} (${index})`);
// });



/*
    📌 .find()
    Nos permite recorrer un arreglo y devuelve el PRIMER elemento que retornas
*/

// recorrer arreglo y encontrar el primer nombre que empieze con la letra j
// si buscas una letra que no esta en el arreglo la variable queda undefined

// const resultado = nombres.find((nombre) => {
//     //obtenemos la primer letra de el nombre
//     if (nombre[0] === 'j') {
//         return nombre;
//     }

// });

// console.log(resultado);


/*
    📌 .map()
    Nos permite ejecutar una funcion por cada elemento y crear un nuevo arreglo
    en base a los resultados de esa funcion

*/

// Transformar todos los nombres a mayusculas

// 📝RECORDAR: cuando usamos funciones tipo flechas podemos acortar a una sola linea
// y no se unsan llaves ni return.
// nombresMayusculas = nombres.map((nombre) => nombre.toUpperCase());

// console.log(nombresMayusculas);

/*
    📌 .filter();
    Nos permite ejecutar una funcion por cada elemento
    y luego crear un arreglo en base a los resultados de esa funcion.
*/

// Solo devuelve los resultados que cumplan una condicion

// Condicion: devolver los nombres que tengan cinco letras

// nombresCuatroLetras = nombres.filter((nombre) => {
//     if (nombre.length === 5) {
//         return nombre;
//     }
// });

// console.log(nombresCuatroLetras);

/*
    📌 .includes()
    Nos permite saber si el arreglo contiene un elemento especificado
*/

// console.log(nombres.includes('fabio'));

/*
    📌 .every()
    Nos permite ejecutar un condicional sobre cada elemento y
    nos devuelve true si TODOS los elementos cumplieron la condicion
*/

// Condicion: validamos si todos los elementos son tipo string

// const nombresValidos = nombres.every((nombre) => {
//     // le decimos que si son string con typeof y 'string'.
//     if (typeof nombre === 'string') {
//         return true;
//     } else {
//         return false;
//     }
// });

// console.log('Todos los elementos son validos? ' + nombresValidos);

// si hay un numero devuelve false

/*
    📌 .some()
    Nos permite ejecutar un condicional sobre cada elemento y
    nos devuelve true si algun elemento cumplio la condicion.
*/

// Condicion: si algunos de los nombres sean cadena de texto

// const nombresValidos = nombres.some((nombre) => {
//     // le decimos que si son string con typeof y 'string'.
//     if (typeof nombre !== 'string') {
//         return true;
//     } else {
//         return false;
//     }
// });

// console.log('si el arreglo es invalido? ' + nombresValidos);
// true si hay algun valor invalido
// false si hay algun valor invalido

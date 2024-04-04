/*
    📌 .legth = Devuelve el nuemr de caracteres de una cadena de texto
*/

// const texto = 'Hola soy fabio';
// console.log(texto.length);

/*
    📌 .indexOf() .lastIndexOf() = devuelve el index del primer / ultimo caracter especificado
*/

// const texto = 'Hola soy fabio';

// conocer la posicion de la letra h

//devuelve el index de la posicion de la letra H
// si no encuentra la letra o variable buscada sale por defecto -1
// console.log(texto.indexOf('H'));

//devuelve el index de la posicion de la ultima letra o
// console.log(texto.lastIndexOf('o'));


/*
    📌 .Slice() - Devuelve un fragmento de una cadena de texto
        1er parametro - index desde donde queremos cortar
        2do parametro (opcional) - index hasta donde queremos cortar
 */

// const texto = 'Hola soy fabio!';

// obtener fragmento de una cadena de texto
// obtener el nombre 'fabio' de la cadena de texto 'Hola soy fabio'.

//contamos a mano el index desde donde queremos comenzar a cortar.
// console.log(texto.slice(9, 14));


// usamos metodo para encontrar la letra f y que comienze a cortar desde ese index

// const index = texto.indexOf('f');
// const lastIndex = texto.lastIndexOf('o');
// console.log(texto.slice(index, lastIndex + 1));

//📝 la cadena original queda intacta.

/*
    📌 .replace() - Devuelve una cadena de texto en donde remplza un valor por otro
    1er parametro - el texto que queremos rempalzar
    2do parametro - el texto que queremos poner

*/

// const texto = 'Hola soy fabio!';
// console.log(texto.replace('fabio', 'fabian'));

//se puede guardar en variable tambien

/*
    📌 .split() - Convierte una cadena de texto en un arreglo
    Tenemos que especificar donde cortar cada elemento
*/

// const texto = 'Hola soy fabio!';
// console.log(texto.split(' '));

/*
    📌 .toUpperCase() .toLowerCase()
    Devuelve una cadena de texto de puras minisculas/mayusculas.
*/

// console.log(texto.toUpperCase());
// console.log(texto.toLowerCase());

/*
    📌 Métodos para eliminar espaciados:
    .trim() - Devuelve una cadena de texto (String)
    que elimina los espacios en blanco al inicio y final de una cadena de texto.

    .trimStart() - Igual que .trim() pero solo elimina espacios del inicio.
    .trimEnd() - Igual que .trim() pero solo elimina espacios del final.
*/

// const texto = '     Hola yo soy Carlos!    ';
// console.log(texto);
// console.log(texto.trim());
// console.log(texto.trimStart());
// console.log(texto.trimEnd());
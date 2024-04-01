/* 📌 Global Scope o Variables Globales
    -Son las variables declaradas fuera de una funcion.
    -Podemos acceder a ellas desde cualquier parte del codigo
    -Podemos usar const, let y var.
*/

var nombre = 'Fabio';
console.log(nombre);


// Accediendo a varible global desde una funcion
const saludo = () => {
    console.log('hola' + nombre);

    // Sobre escribiendo variable global
    nombre = 'Arturo';
    console.log('el nuevo nombre es: ' + nombre)
}
/*
    📌 Operador Spread
    Permite tomar los elementos de un arreglo u objeto y expandirlos en otro sitio.
*/

//tambien puede sobre escribir valores
// const frutas = ['Manzana', 'Pera', 'Piña', 'Melon'];
// const comidaFavorita = ['pizza', 'sushi', ...frutas];
// console.log(comidaFavorita);

// const datosLogin = {
//     nombre: 'fabian',
//     correo: 'correo@correo.com',
//     password: '123',
// };

// const usuario = {
//     ...datosLogin,
//     nombre: 'fabio',
//     edad: 19,
// };

// console.log(usuario);

/*
    📌 Parametro Rest
    Permite que una funcion contenga un numero indefinido de argumentos.
    Los argumentos extra que encuentre los convertira en un arreglo.
*/

// const registrarUsuario = (nombre, correo, ...datosAdicionales) => {
//     console.log(nombre, correo, datosAdicionales);
// };

// registrarUsuario('fabio', 'fabiotru04@gmail.com');
// registrarUsuario('fabian', 'fabiantru04@gmail.com', 19, 'colombia');

/*
    📌 Destructuración de objetos
    Nos permite obtener elementos o propiedades de un arreglo u objeto y guardarlos en una variable.
*/

const amigos = ['fabio', 'carlos', 'mario'];

// forma normal
// const primerAmigo = amigos[0];
// const segundoAmigo = amigos[1];

//extraccion de valores forma destructuracion
const [primerAmigo, segundoAmigo, tercerAmigo] = amigos;
// console.log(segundoAmigo);

const persona = {
    nombre: 'Carlos',
    edad: 27,
    pais: 'México',
};

const { nombre, pais, edad } = persona;
// console.log(nombre, pais);

const mostrarEdad = (nombre, edad) => {
    console.log(`${nombre} tiene ${edad} años`);
};

//formas de pasar los valores

//utilizamos el objeto de persona y buscamos cada valor
// mostrarEdad(persona.nombre, persona.edad);

//utilizamos la destructuraccion
// mostrarEdad(nombre, edad);


// -------- // -------- // -------- //

//utilizamos el obejeto completo
const visualizarEdad = ({ nombre, edad }) => {
    console.log(`${nombre} tiene ${edad} años`);
};

visualizarEdad(persona);

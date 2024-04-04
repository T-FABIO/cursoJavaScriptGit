const usuario = {
    nombre: 'fabio',
    edad: 19,
    amigos: ['mario', 'carlos', 'juan'],

    //Metodo propio/personalizado
    saludo: () => {
        console.log('Hola');
    },
};

/*
    📌 Metodos propios o personalisados
    Los objetos pueden tener metodos personalizados
*/

// usuario.saludo();

/*
    📌Objet.keys()
    Nos devuelve un arreglo con las llaves (keys) del objeto
*/

// const resultados = Object.keys(usuario);
// console.log(resultados);

/*
    📌 Objet.values()
    Nos devuelve un arreglo con los valores (values) del objeto
*/

// const resultados = Object.values(usuario);
// console.log(resultados);

/*
    📌 Objet.entries()
    Nos devuelve un arreglo con las parejas de clave y valor del objeto
*/

// const resultado = Object.entries(usuario);
// console.log(resultado);

// console.log(`El obejto tiene ${resultado.length} propiedades`);


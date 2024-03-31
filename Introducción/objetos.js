const personaArreglo = ['carlos', 27, 'correo@correo.com', true, true];
//console.log(personaArreglo[0]); //Para acceder


const persona = {
    nombre: 'fabio',
    apellido: 'trujillo',
    edad: 19,
    correo: 'fabiotru04@gmail.com',
    suscripciones: {
        web: true,
        correo: true
    },
    colores: ['Verde', 'Azul', 'Blanco'],
    saludo: function () {
        alert('hola');
    }
}

console.log(persona.nombre);
console.log(persona['edad']);

//otra manera de acceder usando variables
//const variable = 'correo';
//console.log(persona[variable]);

//const variable = 'suscripciones';
//console.log(persona[persona.suscripciones.correo]);

// Agregar mas variables al objeto
persona.pais = 'Colombia';
console.log(persona.pais);

//sobre escribir pais
persona.pais = 'España';
console.log(persona.pais);

// Acceder al metodo del objeto
persona.saludo();
console.log(persona);

//📝 las varibles dentro de un objeto se conocen como propiedades
//📝 las funciones dentro un objeto se conocen como metodos

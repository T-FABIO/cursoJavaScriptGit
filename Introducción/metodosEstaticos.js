class Usuario {
    constructor(nombre, correo) {
        this.nombre = nombre;
        this.correo = correo;
    }

    static borrar(idUsuario) {
        console.log(`El usuario con id: ${idUsuario} ha sido borrado de la base de datos`);
    }

    static regiatrdos = 1000;

}

// const usuario = new Usuario('Fabio', 'fabio@gmail.com');
// console.log(usuario);
// usuario.borrarUsuario(7);

Usuario.borrar(3);
console.log(Usuario.regiatrdos);

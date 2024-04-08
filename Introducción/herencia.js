class Usuario {
    constructor(Usuario, contraseña) {
        this.Usuario = Usuario;
        this.contraseña = contraseña;
    }

    obtenerPost() {
        const posts = ['post1', 'post2'];
        return posts;
    }
}

class Moderador extends Usuario {
    constructor(usuario, contraseña, permisos) {
        super(usuario, contraseña);// super permite copiar metodos y propiedades del constructor
        this.permisos = permisos;
    }

    borrarPost(id) {
        if (this.permisos.includes('borrar')) {
            console.log(`El post con el ${id} ha sido borrado`);
        } else {
            console.log('No tiene permisos para borrar post');
        }
    }
}

const usuario = new Usuario('Fabio', '123');
console.log(usuario.obtenerPost());

const usuario2 = new Moderador('Carlos', '456', ['borrar', 'editar']);
console.log(usuario2.obtenerPost());
console.log(usuario2.permisos);
usuario2.borrarPost(7);

// Clases plantillas para crear objetos 

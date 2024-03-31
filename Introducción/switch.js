const usuario = {
    edad: 19,
    pais: 'colombia',
    ticket: true

};

//para no hacer if tras if 

switch (usuario.pais) {
    case 'colombia':
        console.log('el usuario es colombiano');
        break;

    case 'españa':
        console.log('el usuario es español');
        break;

    case 'argentina':
        console.log('el usuario es argentino');
        break;

    default:
        console.log('el usuario es de otro pais');

}
const obetenerPostUsuario = (usuario, callback) => {
    console.log(`Obteniendo post de ${usuario} ...`);

    setTimeout(() => {
        let posts = ['post1', 'post2', 'porst3'];
        callback(posts);
    }, 2000);
}

obetenerPostUsuario('Carlos', (posts) => {
    console.log(posts);
});
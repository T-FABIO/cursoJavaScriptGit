const fetchPosts = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const posts = ['post1', 'post2', 'post3'];
            const error = false;

            if (error) {
                reject('Hubo algun error al intentar obtener los posts');
            } else {
                resolve(posts);
            }
        }, 2000);
    });
}


//asyncAwait tryCatch
const mostrarPosts = async () => {

    try {
        const posts = await fetchPosts();
        console.log(posts);
    } catch {
        console.log(error);

    }
}
mostrarPosts();

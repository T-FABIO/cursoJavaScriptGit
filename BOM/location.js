// href - Retorna la URL de la pagina actual
console.log(location.href);

// hostname - Retorna el host de la pagina actual 
console.log(location.hostname);

// pahtname - Retorna la ruta y archivo de la pagina actual
console.log(location.pathname);

// protocol - Retorna el protocolo utilizado
console.log(location.protocol);

const cargarDocumento = () => {
    location.assign('https://google.com');
}

//flechas de atras y adelante en el navegador
const regresar = () => {
    //atras
    history.back();
    
}

const adelante = () => {
    //adelante
    history.forward();
}
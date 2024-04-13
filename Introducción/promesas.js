const promesa = new Promise((resolve, rejected) => {
    //Acción que se ejecutara
    setTimeout(() => {
        const exito = false;

        if (exito) {
            resolve('La operacion tuvo exito');
        } else {
            rejected('La operacion no tuvo exito');
        }
    }, 4000)
});

promesa.then((mensaje) => {
    alert(mensaje);
});

promesa.catch((mensaje) => {
    alert(mensaje);
});


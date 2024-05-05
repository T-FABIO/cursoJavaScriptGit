const agregarCaja = () =>{
    /*
		📌 1. Creamos el elemento
		createElement - Recibe como parametro una cadena de texto con la etiqueta que queremos crear.
	*/

    const nuevaCaja = document.createElement('div');

    /*
		📌 2. Agregamos texto y atributos
	*/

    nuevaCaja.innerText = 'Nueva Caja!';
    nuevaCaja.setAttribute('id', 'nuevo-id');
    nuevaCaja.setAttribute('class', 'caja activa');

    /*
		📌 3. Agregamos el elemento al DOM
	*/

    const contenedor = document.getElementById('contenedor1');

    //.openChild() - Agrega un elemento al final
    contenedor.appendChild(nuevaCaja);

}
console.log(window);

console.log(`La ventana de tu navegador mide ${window.innerWidth} de ancho`);
console.log(`La ventana de tu navegador mide ${window.innerHeight} de alto`);

/* 
	📌 window.open()
	Nos permite abrir ventanas del navegador
	Nota: Es posible que el navegador te pida permisos para abrir una nueva ventana.

	- 1er parametro: Dirección de la nueva ventana
	- 2do parametro: Nombre de la ventana
	- 3er parametro: Cadena de texto de opciones

	Nos devuelve un objeto para aceder a esa ventana
*/

let ventana;
const abrirVentana = () => {
    ventana = window.open('https://google.com', 'Mi nueva ventana', 'width=500, height=500');
    ventana.document.write('<h1>Hola escribiendo en la nueva ventana</h1>');
}

const cerrarVentana = () => {
    ventana.close();
}

/*
	📌 Screen Object
	Representa la pantalla del usuario.
*/

console.log('Ancho de pantalla: ', window.screen.width); 
console.log('Alto de pantalla: ', window.screen.height); 

console.log('Ancho de pantalla sin barra de windows: ', window.screen.availWidth);
console.log('Alto de pantalla sin barra de windows: ', window.screen.availHeight);




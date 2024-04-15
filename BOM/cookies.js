const crearCookie = () => {
	//document.cookie = 'nombre=fabio';
	document.cookie = 'nombre=fabio; expires=1 Dec 2024 01:00:00 UTC';
};

const iniciarSesion = () => {
	const usuario = prompt('Usuario: ');
	document.cookie = `nombre=${usuario}; expires=21 Oct 2024 07:28:00 UTC`;
	alert('Sesion iniciada');
};

// console.log(document.cookie);

/*
	Forma para obtener el usuario de las cookies
*/

let usuario;

const cookies = document.cookie.split(';')
cookies.forEach((cookie) => {
	const propiedad = cookie.split('=')[0];
	if(propiedad === 'nombre'){
		usuario = cookie.split('=')[1];
	}
});

if(usuario){
	console.log('Hola' + usuario);
} else {
	console.log('Porfavor inicia sesion');
}

// para cerrar cookie hay que sobre escribirla y para sobre
// escribirla hay que poner una fecha pasada a la de hoy 
const cerrarSesion = () => {
	document.cookie = 'nombre=; expires=1 Dec 2023 01:00:00 UTC';
	console.log('Hasta luego');
}

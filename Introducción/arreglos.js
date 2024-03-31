const arreglo = ['texto', 19, false, { propiedad: 'valor' }, [1, 2, 3]];
console.log(arreglo);

const amigos = ['juan', 'mario', 'pedro'];
console.log(amigos[1]);

const colores = [];
colores[0] = 'rojo';
colores[1] = 'verde';

//sobre escribir
colores[3] = 'blanco';
colores[3] = 'amarillo';

console.log(colores);
console.log('El arreglo tiene ' + colores.length + ' colores');

colores.push('azul');

console.log(colores);

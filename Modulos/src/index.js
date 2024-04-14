/*
    📌 Named Imports - la mas utilizada
*/

// import {nombre as nombreImportado, obtenerPosts} from './namedExports';
// console.log(`Mi nombre es ${nombreImportado}`);
// console.log(obtenerPosts());

/*
    📌 Namespace Import
*/

// import * as datos from './namedExports';
// console.log(datos.nombre);
// console.log(datos.obtenerPosts());

/*
    📌 Default imports - cuando hay una sola funcion que hay que importar 
                          se puede poner el nombre que queramos
*/

import obtener from './defaultExport';
console.log(obtener());

/*
    📌 Empty Imports
    Carga todo el codigo pero sin hacer ningun objeto
*/

import './emptyExport';
import { correo } from './emptyExport';
console.log(correo);




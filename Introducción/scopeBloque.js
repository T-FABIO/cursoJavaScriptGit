/* 📌 Block Scope / Alcance de tipo bloque
    - Pertenecen las variables declaradas con const o let dentro de un bloque { }
    - Solo podemos acceder a ellas dentro del bloque.
*/

// const edad = 19;

// if (edad >= 18) {
//     const accesoPermitido = true;
//     console.log(accesoPermitido);

//     if (true) {
//         //se puede acceder a la variable dentro de todo el bloque
//         console.log(accesoPermitido);
//     }

//     const miFuncion = () => {
//         //se puede acceder a la variable dentro de todo el bloque
//         console.log(accesoPermitido);
//     }

//     miFuncion();

// }

/* Si intentamos accesder no se podra saldra error
    porque la variable que pedimos la pedimos fuera
    del bloque. */

// console.log(accesoPermitido);


//Ejemplo 📌
if (true) {
    var nombre = 'carlos';

}

console.log(nombre); // salida: carlos

/* ¿Porque podemos acceder a esta variable
    cuando la pedimos fuera del bloque?
    
    pasa porque el alcance solo funciona
    para variables que degfinimos con const o let
*/
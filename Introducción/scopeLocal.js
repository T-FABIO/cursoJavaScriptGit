/* 📌 Local Scope o Variables Locales
    - Son las varibales declaradas dentro deuna funcion
    - Solo podemos acceder a ellas desde dentro de la funcion
*/

//variable global
var numero = 1;

var obtenerNumerosLetras = (nombre) => {
    // variable local
    var numero = nombre.length;

    console.log(`${nombre} tiene ${numero} de letras`);

    var funcionAnidada = () => {
        // Aqui accede a la variable local ya qu esta fuera de la funcion
        // El coodigo busca de adentro hacia a fuera
        console.log(numero);
    }

    funcionAnidada();

}

obtenerNumerosLetras('fabio');

/* No podemos acceder a la variable numero por que esta declarada
dentro de una funciion y por ende es local y no global.
*/
// Aqui toma la variable global numero y no la local
//console.log(numero);
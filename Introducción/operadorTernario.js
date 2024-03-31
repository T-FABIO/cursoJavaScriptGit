const boleto = 'vip';
//let codigoDeAcceso;


// if (boleto === 'vip') {
//     codigoDeAcceso = 'VIP-123-456';

// } else {
//     codigoDeAcceso = 'REGULAR-123-321';

// }

// console.log(codigoDeAcceso);

//Operador ternario

const codigoDeAcceso = boleto === 'vip' ? 'VIP-123-456' : 'REGULAR-123-321';

boleto === 'vip' ? console.log('Tu boleto es de tipo VIP') : console.log('Tu boleto es de tipo REGULAR');


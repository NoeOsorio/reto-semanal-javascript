function parImpar(numero) {
    return numero % 2 === 0 ? 'par' : 'impar';
}

console.log(parImpar(2) === 'par');
console.log(parImpar(3) === 'impar');
console.log(parImpar(0) === 'par');

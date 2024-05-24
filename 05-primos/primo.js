function esPrimo(numero){
    if(numero < 2) return false;
    for(let i = 2; i < numero; i++){
        if(numero % i === 0) return false;
    }
    return true;
}

console.log(esPrimo(1) === false);
console.log(esPrimo(2) === true);
console.log(esPrimo(3) === true);
console.log(esPrimo(4) === false);
console.log(esPrimo(5) === true);
console.log(esPrimo(9) === false);
console.log(esPrimo(11) === true);
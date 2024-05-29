function vocales(texto){
    let contador = 0;
    for (let i = 0; i < texto.length; i++){
        if (texto[i] === 'a' || texto[i] === 'e' || texto[i] === 'i' || texto[i] === 'o' || texto[i] === 'u'){
            console.log(texto[i]);
            contador++;
        }
    }
    if(contador === 0){
        console.log('No hay vocales');
    }
    return contador;
}

console.log(`Vocales: ${vocales('Hola Mundo')}`);
console.log(`Vocales: ${vocales('Hl Mnd')}`)
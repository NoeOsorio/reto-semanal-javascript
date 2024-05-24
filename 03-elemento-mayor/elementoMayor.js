function elementoMayor(arr){
    const sorted = arr.sort((a, b) => b -a);
    return sorted[0];
}

console.log(elementoMayor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) === 10);
console.log(elementoMayor([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]) === 10);
console.log(elementoMayor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10]) === 10);
console.log(elementoMayor([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10]) === 10);
console.log(elementoMayor([10]) === 10);
console.log(elementoMayor([15, 42, 37]) === 42); 
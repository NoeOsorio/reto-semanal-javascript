function sumaDigitos(num) {
  let resultado = 0;
  num
    ?.toString()
    .split("")
    .forEach((digito) => (resultado += Number(digito)));
  return resultado;
}



console.log(sumaDigitos(11134)); // 10
console.log(sumaDigitos(123456789)); // 45
console.log(sumaDigitos(0)); // 0

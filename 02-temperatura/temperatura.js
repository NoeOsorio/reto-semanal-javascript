//Grados centígrados = (grados Fahrenheit − 32) × 5/9.
//Grados Fahrenheit = (grados centígrados × 9/5) +32.

function transformarTemperatura(temperatura, tipo) {
  if (tipo !== "C" && tipo !== "F") {
    console.log("Tipo de temperatura no válido");
    return;
  }
  if (tipo === "F") {
    return ((temperatura - 32) * 5) / 9;
  }
  return (temperatura * 9) / 5 + 32;
}

console.log(transformarTemperatura(34, "C")); //Debe dar 93.2

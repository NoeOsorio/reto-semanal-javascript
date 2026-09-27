// calcular Impuesto
function calcularImpuesto(monto, impuesto) {
  return Number((monto * impuesto).toFixed(2));
}
// calcular redondeo
function redondearCentavos(monto) {
  return Math.round(monto);
}

// calcular total
function calcularTotal(subtotal, impuesto, quiereRedondear = false) {
  const iva = calcularImpuesto(subtotal, impuesto);
  const totalSinRedondear = subtotal + iva;
  const total = quiereRedondear
    ? redondearCentavos(totalSinRedondear)
    : totalSinRedondear;

  // imprimir total
  console.log("Subtotal: \t $", subtotal);
  console.log("IVA: \t\t $", impuesto);
  console.log("Redondeo: \t $", (total - totalSinRedondear).toFixed(2));
  console.log("Total: \t\t $", total);

  return total;
}

//Definir valores de impuesto y subtotal
const IVA = 0.16; //MEXICO
const subtotal = 101.5; //Monto a pagar

//Ejecutar el código
calcularTotal(subtotal, IVA, true);

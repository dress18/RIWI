function calcularSubtotal(items) {
  let total = 0;
  for (const item of items) total += item.precio * item.cantidad;
  return total;
}

function aplicarCupon(subtotal, cupon) {
  return cupon === "RIWI10" ? subtotal * 0.9 : subtotal;
}

function calcularImpuesto(valor) {
  return valor * 0.19;
}

function calcularEnvio(subtotal) {
  return subtotal > 150000 ? 0 : 8000;
}

function calcularTotal(items, cupon) {
  const subtotal = calcularSubtotal(items);
  const conDescuento = aplicarCupon(subtotal, cupon);
  return conDescuento + calcularImpuesto(conDescuento) + calcularEnvio(subtotal);
}

const carrito = [{ precio: 50000, cantidad: 2 }, { precio: 30000, cantidad: 1 }];
console.log(calcularTotal(carrito, "RIWI10"));

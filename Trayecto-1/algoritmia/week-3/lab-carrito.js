function calcularSubtotal(items) {
    let subtotal = 0;

    for (let i = 0; i < items.length; i++) {
        subtotal = subtotal + (items[i].precio * items[i].cantidad);
    }

    return subtotal;
}

function aplicarCupon(subtotal, cupon) {
    if (cupon === "RIWI10") {
        subtotal = subtotal - (subtotal * 0.10);
    }

    return subtotal;
}

function calcularImpuesto(valor) {
    let impuesto = valor * 0.19;

    return impuesto;
}

function calcularEnvio(subtotal) {
    if (subtotal > 150000) {
        return 0;
    } else {
        return 8000;
    }
}

function calcularTotal(items, cupon) {
    let subtotal = calcularSubtotal(items);
    let descuento = aplicarCupon(subtotal, cupon);
    let impuesto = calcularImpuesto(descuento);
    let envio = calcularEnvio(subtotal);
    let total = descuento + impuesto + envio;

    return total;
}

const carrito = [
    { precio: 50000, cantidad: 2 },
    { precio: 30000, cantidad: 1 }
];

console.log(calcularTotal(carrito, "RIWI10"));
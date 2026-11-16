let inv = parseInt(prompt("Ingresa el número de productos que se encuentra en stock"));

if (inv < 0) {
    console.log("Error, valor no válido");
} else {
    if (inv === 0) {
        console.log("Agotado, pedir urgente");
    } else {
        if (inv > 0 && inv < 10) {
            console.log("Pedir producto para la próxima compra");
        } else {
            console.log("Hay suficiente stock");
        }
    }
}
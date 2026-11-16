let tipo = parseInt(prompt("Tipo de vehículo (1 = carro, 2 = moto):"));
let min = parseInt(prompt("Minutos de permanencia:"));
let fac = prompt("¿Tiene facturas de compra? (S/N)").toLowerCase();

let h;
let tar = 0;
let tot = 0;

if (min < 0) {
    console.log("Error de tiempo negativo");
} else {
    switch (tipo) {
        case 1:
            tar = 4000;
            break;

        case 2:
            tar = 2000;
            break;

        default:
            tar = 0;
            break;
    }

    if (tar === 0) {
        console.log("Tipo de vehículo no válido");
    } else {
        if (min < 15) {
            tot = 0;
        } else {
            h = Math.trunc((min + 59) / 60);
            tot = h * tar;

            if (tot > 30000) {
                tot = 30000;
            }

            if (fac === "s") {
                tot = tot / 2;
            }
        }

        console.log("Valor a pagar: $" + tot);
    }
}
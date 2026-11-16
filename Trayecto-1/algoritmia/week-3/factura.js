function propinas(cuenta) {
    let porc;
    let Deseo;
    let propina = 0;

    do {
        Deseo = prompt("¿Desea incluir la propina? (S/N)").toUpperCase();

        if (Deseo !== "S" && Deseo !== "N") {
            console.log("Valor inválido, solo se acepta S o N");
        }

    } while (Deseo !== "S" && Deseo !== "N");

    if (Deseo === "S") {
        porc = parseFloat(prompt("Ingrese el valor del % de la propina:"));

        propina = cuenta * (porc / 100);
    } else {
        propina = 0;
    }

    return propina;
}

function Valores(cuenta, pers) {
    let ValorPorPer;

    ValorPorPer = cuenta / pers;

    return ValorPorPer;
}

let cuenta = parseFloat(prompt("Ingresa el valor de la cuenta:"));
let pers = parseInt(prompt("Ingresa la cantidad de comensales en la mesa:"));

let prop = propinas(cuenta);
let tot = cuenta + prop;
let totcom = Valores(tot, pers);

console.log("El total de la cuenta es: " + tot);
console.log("Tiene una propina de: " + prop);
console.log("La cantidad a pagar por persona: " + totcom);
console.log("Redondeando a: " + Math.round(totcom));
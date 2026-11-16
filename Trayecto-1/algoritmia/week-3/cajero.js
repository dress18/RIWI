let Dinero;
let Saco = 0;
let i = 0;

do {
    Dinero = parseFloat(prompt("¿Cuánto dinero desea sacar? (Ingrese 0 para dejar de retirar):"));

    if (Dinero === 0) {
        console.log("Acabas de salir del sistema");
    } else {
        Saco = Saco + Dinero;
        i = i + 1;
    }

} while (Dinero !== 0);

console.log("Sacaste la cantidad " + Saco + " con la cantidad de retiros " + i);
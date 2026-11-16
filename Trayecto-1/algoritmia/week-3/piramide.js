let n;
let fila;
let espacio;
let asterisco;

n = parseInt(prompt("¿Cuántas filas tendrá la pirámide?"));

for (fila = 1; fila <= n; fila++) {

    let linea = "";

    for (espacio = 1; espacio <= n - fila; espacio++) {
        linea = linea + " ";
    }

    for (asterisco = 1; asterisco <= 2 * fila - 1; asterisco++) {
        linea = linea + "*";
    }

    console.log(linea);
}
let correo;
let validador;
let long;
let i;
let cantidad = 0;
let encontrado;
let salir1 = false;

while (cantidad < 3 && salir1 === false) {

    correo = prompt("Escriba el correo con el que vas a ingresar:");

    long = correo.length;
    encontrado = 0;

    for (i = 0; i < long; i++) {

        validador = correo.substring(i, i + 1);

        if (validador === "@") {
            encontrado = encontrado + 1;
        }

        if (validador === ".") {
            encontrado = encontrado + 1;
        }
    }

    if (encontrado === 2) {

        console.log("Correo válido");
        salir1 = true;

    } else {

        cantidad = cantidad + 1;

        console.log("Correo no válido, te quedan " + (3 - cantidad) + " intentos");
    }
}
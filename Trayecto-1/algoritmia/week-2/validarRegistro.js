let edad = parseInt(prompt("¿Cuántos años tienes?"));
let respuesta = prompt("¿Aceptas los términos? (S/N)").toUpperCase();

if (edad >= 14 && respuesta === "S") {
    console.log("Registro exitoso");
} else {
    console.log("No puedes registrarte");
}
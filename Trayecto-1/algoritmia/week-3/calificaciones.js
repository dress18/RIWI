let Notas = [];
let Prom;
let acum = 0;
let i;
let repro = 0;
let tam;
let Notama;
let Notame;

tam = parseInt(prompt("Ingresa la cantidad de notas a registrar:"));

for (i = 0; i < tam; i++) {
    Notas[i] = parseFloat(prompt("Ingrese las notas de los estudiantes:"));
}

Notama = Notas[0];
Notame = Notas[0];

for (i = 0; i < tam; i++) {

    acum = Notas[i] + acum;

    if (Notas[i] < 3) {
        repro = repro + 1;
    }

    if (Notama < Notas[i]) {
        Notama = Notas[i];
    }

    if (Notame > Notas[i]) {
        Notame = Notas[i];
    }
}

Prom = acum / tam;

console.log("El promedio de las notas es: " + Prom);
console.log("La nota más alta fue: " + Notama);
console.log("La nota más baja fue: " + Notame);
console.log("La cantidad de estudiantes que reprobaron fueron: " + repro);
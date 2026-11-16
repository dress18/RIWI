// Devuelve { promedio, reprobados }

function resumenNotas(notas) {
    let suma = 0;
    let reprobados = 0;

    for (const nota of notas) {
        if (nota < 3) {
            reprobados = reprobados + 1;
            suma = suma + nota;
        }
    }

    const promedio = reprobados > 0 ? suma / reprobados : 0;

    return { promedio, reprobados };
}

console.log(resumenNotas([2.5, 4.0, 3.2, 1.8, 4.5]));
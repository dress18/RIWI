const notas = [4, 5, 2, 3, 5, 6, 7];
let notasNuevas = [];

for(let nota of notas){
    notasNuevas.push(nota+1);
}
console.log(notasNuevas);

// -------

const notasNuevasMap = notas.map(nota => nota + 1);
console.log(notasNuevasMap);

// -------

const aprobados = notas.filter(nota => (n >= 5));

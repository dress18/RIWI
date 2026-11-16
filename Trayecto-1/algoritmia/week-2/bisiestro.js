let tiemp = parseInt(prompt("Escribe el año que quieres identificar como bisiesto"));

if ((tiemp % 4 === 0 && tiemp % 100 !== 0) || tiemp % 400 === 0) {
    console.log("El " + tiemp + " es bisiesto");
} else {
    console.log("El " + tiemp + " no es bisiesto");
}
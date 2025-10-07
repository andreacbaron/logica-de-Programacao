

nota = 4.6;
let resultado;


if (nota >= 9 && nota <= 10) {
    resultado ="A";
} else if (nota < 9 && nota >= 7) {
    resultado ="B";
} else if (nota < 7 && nota >= 5) {
    resultado ="C";
} else if (nota > 5 && nota <= 4.9) {
    cresultado ="D";
} else if (nota >= 0 && nota <= 4.5) {
    resultado ="F";
} else {
    resultado = "Nota invalida";
}

console.log(resultado);



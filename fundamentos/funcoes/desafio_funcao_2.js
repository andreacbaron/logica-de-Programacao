
function notaParaConceito(nota) {
    switch(Math.ceil(nota)) {
        case 10: return "A+";
        case 9: return "A";
        case 8: return "B+";
        case 7: return "B";
        case 6: return "C+";
        case 5: return "C";
        case 4: return "D+";
        case 3: return "D";
        case 2: return "E+";
        case 1: return "E";
        case 0: return "F";
        default: return null;
    }

}

console.log(`O conceito do aluno Anthony é ${notaParaConceito(8)}`)
console.log(`O conceito do aluno Arthur é ${notaParaConceito(10)}`)
console.log(`O conceito do aluno Aaron é ${notaParaConceito(3.5)}`)


// let nota = 4;
// function resultadoMedia(nota) {
//     let conceito;

//     if (nota < 0 || nota > 10) {
//         return null;
//     }
//     if (nota === 10) {
//         conceito = "A+";
//     } else if (nota >= 9) {
//         conceito = "A";
//     } else if (nota >= 8) {
//         conceito = "B+";
//     } else if (nota >= 7) {
//         conceito = "B";
//     } else if (nota >= 6) {
//         conceito = "C+";
//     } else if (nota >= 5) {
//         conceito = "C";
//     } else if (nota >= 4) {
//         conceito = "D+";
//     } else if (nota >= 3) {
//         conceito = "D";
//     } else if (nota >= 2) {
//         conceito = "E+";
//     } else if (nota >= 1) {
//         conceito = "E";
//     } else {
//         conceito = "F";
//     }
//     return conceito;
// }
// console.log(resultadoMedia(nota));






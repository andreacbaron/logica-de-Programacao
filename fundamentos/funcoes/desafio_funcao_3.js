
const nota1 = 5.8;
const nota2 = 1.1;
const nota3 = 2.1;
// media = (nota1 + nota2) / 2;

function retornaMenorNumero(n1, n2) {
    return n1 <= n2 ? n1 : n2;
}

// console.log(retornaMenorNumero(nota1,nota2));

function mediaAluno(n1, n2, n3) {

    const menorNota = retornaMenorNumero(n1, retornaMenorNumero(n2, n3));

    if (menorNota === n1) {
        return (n2 + n3) / 2;
    } else if (menorNota === n2) {
        return (n1 + n3) / 2;
    } else {
        return (n1 + n2) / 2;
    }
}
function mediaParaStatus(mediaAluno) {
    if(mediaAluno >= 7) {
        return "Aprovado";
    }
    else if(mediaAluno >= 4) {
        return "Recuperação";
    }
    else {
        return "Reprovado"; 
    }
}

const mediaFinal = mediaAluno(nota1, nota2, nota3);
const statusFinal= mediaParaStatus(mediaFinal);
console.log(`O resultado final do aluno é: ${statusFinal}! ${mediaAluno(nota1, nota2, nota3)}`);
// console.log("Média (descartando a menor nota):", mediaAluno(nota1, nota2, nota3));



// function mediaAluno(media) {
//     let conceito;
//     if (media >= 7) {
//         conceito = "Parabéns voce foi aprovado"

//     } else if (media >= 4) {
//         conceito = "Recuperação";

//     } else {
//         conceito = "Reprovado"

//     }
//     return `Média: ${media.toFixed(2)} - ${conceito}`;
// }
// console.log(conceitoAluno(7.8, 3.1));
// console.log(mediaAluno(media));



// >= 7 "Aprovado"
// >= 4 "REcuperação"
// >= 3 "Reprovado"




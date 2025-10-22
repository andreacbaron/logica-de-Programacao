
function sempreretornaUm() {
    resultado = 1000 + 2;
    return resultado;
}

let valor = sempreretornaUm();
console.log(valor);

function textoOunumero(retornaTexto) {

    return retornaTexto ? "Sou um texto!" : 123;

    // if (textoOunumero) {
    //     return "Sou um texto!"
    // } else {
    //     return 123;
    // }
}

console.log(textoOunumero(true));
console.log(textoOunumero(false));



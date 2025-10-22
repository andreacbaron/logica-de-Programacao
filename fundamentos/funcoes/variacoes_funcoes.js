// #1: Função COM paramertro e COM retorno 
function somar(a, b) {
    return a + b;
}

let resultado = somar(30,56);
console.log(resultado);
console.log(somar(30,56));

console.log(`Oresultado final é: ${resultado}`);
console.log(`Oresultado final é: ${somar(30,56)}`);

// #2: Função COM paramertro e SEM retorno 
function exibirMultiplicacao(a, b) {
    console.log(a * b);
}

let vaiArmazenar = exibirMultiplicacao(10, 21);
exibirMultiplicacao(7, 9);

console.log(vaiArmazenar); // o resultado e undefined pois não teve retorno

// #3: Função SEM paramertro e COM retorno 
function retornaDataAtual() {
    return new Date();
}

console.log(retornaDataAtual());

// #4: Função SEM paramertro e COM retorno 
function exibirHoraAtual() {
    console.log(new Date().getHours());
}

exibirHoraAtual();

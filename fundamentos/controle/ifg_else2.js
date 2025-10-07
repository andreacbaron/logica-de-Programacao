
const hora = 11;
let saudacao;


if(hora <= 11) {
    saudacao = "Bom dia!";
} else if(hora <= 18){
    saudacao = "Boa tarde!";
}else {
    saudacao = "Boa noite!";
}

console.log(saudacao);
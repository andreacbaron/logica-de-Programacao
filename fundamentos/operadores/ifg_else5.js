
// dessa forma não e muito usado 

const hora = 6;
let saudacao;

if(hora <= 12) {
    saudacao = " Bom dia";
} else {
    if(hora <= 18) {
    saudacao = "Boa tarde";
} else {
    if(hora >= 22) {
        saudacao = "muito tarde!";
    }else {
        saudacao = "boa noite";
    }
}

}
console.log(saudacao);
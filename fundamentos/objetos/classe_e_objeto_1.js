
class Data {

    exibir() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }

    constructor(dia = 1, mes = 1, ano = 1994) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }

}

const d1 = new Data();
d1.dia = 28;
d1.mes = 12;
d1.ano = 1994;
console.log(d1);
console.log(d1.exibir());

const d2 = new Data(31, 12, 2021);
d2.dia = 25;
d2.mes = 4;
d2.ano = 2020;
console.log(d2);
console.log(d2.exibir());

console.log(typeof d1)
console.log(typeof Data)
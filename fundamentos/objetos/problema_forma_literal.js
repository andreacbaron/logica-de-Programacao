
const data1 = {
    dia: 12,
    mes: 12,
    ano: 1994,
    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}

console.log(data1.exibir())

const data2 = {
    dia: 12,
    mes: 1,
    ano: 2014,
    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}



console.log(data2.exibir())

const data3 = {
    dia: 29,
    mes: 9,
    ano: 2024,
    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}



console.log(data3.exibir())

const data4 = {
    dia: 12,
    mes: 12,
    ano: 1994,
    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}

data4.dia = 26;
data4.mes = 8;
data4.ano = 1999;

console.log(data4.exibir())

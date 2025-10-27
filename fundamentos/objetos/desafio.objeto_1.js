
const data = {
    dia: 12,
    mes: 12,
    ano: 1994,


    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}
data.dia = 28;
data.mes = 12;
data.dianoa = 1994;

console.log(data.exibir())

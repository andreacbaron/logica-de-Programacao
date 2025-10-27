
function criarData(dia, mes, ano) {

    return {
        dia,
        mes,
        ano,
        exibir() {
            return `${this.dia}/${this.mes}/${this.ano}`;
        }
    }

}


const d1 = criarData(28, 12, 1994)
const d2 = criarData(25, 4, 2020)
const d3 = criarData(29, 9, 2024)
const d4 = criarData(21, 8, 1984)

console.log(d1.exibir())
console.log(d2.exibir())
console.log(d3.exibir())
console.log(d4.exibir())

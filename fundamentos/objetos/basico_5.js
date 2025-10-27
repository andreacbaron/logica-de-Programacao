
const clientes = {
    codigo: 1234,
    nome: "Ana",
    vip: true,
    endereco: {
        logradouro: "Rua Esperança",
        numero: 200,
        complemento: "Apto 100 boco A",
        pontosReferencias: [
            { nome: "Hospital", proximoNome: "Farmacia", muitoProximo: true},
            { nome2: "Hospital2", proximoNome2: "Farmacia2", muitoProximo2: false}
        ]
    },

    nomeFilhos: ["Anthony", "Arthur", "Aaron"]

}

// console.log(clientes[endereco][logradouro]);
console.log(clientes.endereco.logradouro);
console.log(clientes.endereco.pontosReferencias[1].muitoProximo2);

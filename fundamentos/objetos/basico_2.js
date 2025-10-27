
const numeros = [10, 20, 30];

const produtos = {
    nome: "ipad",
    preco: 6000,
    desconto: 0.50,
    precoComDesconto: function() {
        return this.preco * (1 - this.desconto);

    }
};

console.log(produtos.nome);
console.log(produtos.preco);
console.log(produtos.precoComDesconto());

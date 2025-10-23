
const notas = [26, 2, 4, 5, 11, 40, 30, 1, 5];

let valores = "";
// foreach
for (let nota of notas) { // for of e para percorrer os valores do arrays
    valores += nota + "";
}
console.log(valores);

let indeces = "";

for (let indice in notas) { // for in e para percorrer os indices do arrays
    indeces += indice + "";
}
console.log(indeces);


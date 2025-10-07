
//Tabela verdade

let temDinheiroNaConta = true;
let carroEstaNaGaragem = true;
let estaEnsolarado = false;


//(AND/E)
let resultadoE = " #1 (AND) - Vai para o shopping? ";
resultadoE += temDinheiroNaConta && estaEnsolarado;
console.log(resultadoE)


//(OR/OU)
let resultadoOU = " # (OR) - Vai para o shopping? ";
resultadoOU += estaEnsolarado || carroEstaNaGaragem; //  O || Paipe 
console.log(resultadoOU);

//(XOR)
console.log(true !== true);
console.log(true !== false);
console.log(false !== true); 
console.log(false !== false);
console.log(false ^ false); // já esse simbulos mostra valores binarios 

// (NOT)
console.log(" Não verdadeiro: " + !true);
console.log(" Não false: " + !false);
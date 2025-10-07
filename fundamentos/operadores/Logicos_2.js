
const t1 = true;
const t2 = false;

let compararTV50Polegadas = t1 && t2; // AND/E

let comparaTV32Polegadas = t1 !== t2; //XOR/OR EXCLUSIVO

let tomarSorvete = t1 || t2; // OR
let ficarEmCasa = !tomarSorvete; // NOT

console.log("Vamos prampar a TV de 50? =", compararTV50Polegadas ,
    "\nVamos comprar a TV 32 =" , comparaTV32Polegadas ,
    "\nVamos comparar sorvete =" , tomarSorvete , 
    " \nVamos ficar em casa =" , ficarEmCasa);


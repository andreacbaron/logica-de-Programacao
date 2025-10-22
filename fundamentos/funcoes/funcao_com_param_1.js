
function executar(param) {
    if (typeof param === "function") {
        console.log(param()); // Parte central

        
    }
}
console.log(typeof executar === "function");

function bomDia() {
    return "Bom dia!";

}

executar(3);
executar(bomDia); // Parte central

const x = bomDia;
const y = bomDia();

console.log(x());
console.log(y);
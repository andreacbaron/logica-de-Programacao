
function executar(fn, n1, n2) {
    if (typeof fn === "function") {
        console.log(fn(n1, n2));
    }
}

function somar(a, b) {
    return a + b;
}
function subtrair(a, b) {
    return a - b;
}
function multplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    return a / b;
}

executar(somar, 5, 3);
executar(subtrair, 5, 3);
executar(multplicar, 5, 3);
executar(dividir, 5, 3);
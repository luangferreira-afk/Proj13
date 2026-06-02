let lista = "";
let numero = [];

for (i = 0; i < 15; i++) {
    numero[i] = Number(prompt("Digite um Numero"));
}

alert(`Vetor inteiro digitado: [ ${numero.join(", ")} ]`);

for (i = 0; i < numero.length - 1; i++) {
    if (numero %10 == 0)
        lista+= `\n Posição ${i}: número ${numero[i]}`;
}

alert(`Os múltiplos de 10 estão nas posições: ${lista}`);
console.log(lista);

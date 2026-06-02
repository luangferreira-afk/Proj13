# let idades = []
let lista = ""; 
let somatotal = 0;

for( i = 0;i < 8; i++ ) 
{
    idades[i] = Number(prompt("Digite as idades"));
}

for( i = 0;i < 8; i++ )
{
    lista = lista + `\n${idades}`;
    somatotal += idades[i]
}

alert(`A Média de idades é: ${somatotal /8}`);


let lista = "";
let nomes = []
let idades = []

for (i = 0; i < 8; i++) {
    nomes[i] = (prompt("Digite um Nome"));
    idades[i] = Number(prompt("Digite uma idade"));
}

for (i = 0; i < idades.length - 1; i++) {
    if (idades[i] >= 25)
        lista+= "\n nome:"+ nomes[i] +" idades:" + idades[i];

}

alert(`As pessoas com mais de 25 anos são: ${lista}`);
console.log(lista);

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

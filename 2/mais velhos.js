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


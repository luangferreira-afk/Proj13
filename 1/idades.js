let idades = []
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



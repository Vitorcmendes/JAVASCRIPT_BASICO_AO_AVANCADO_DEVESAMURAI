// String é uma cadeia de carácteres então pode ser lida como Array

let nome = "Vitor"

console.log(nome[0])

// fazer uma leitura completa com For

for (letra of nome) {
console.log(letra)
}

// formar uma string a partir de um array usando o join

nomeArray = ["Vitor", "Mendes"]

console.log(nomeArray.join(" ")) // nesse caso, se usou " " para indicar o separador, mas isso é customizável

// agora, como se forma um array a partir de uma string usando split

nomeCompleto = "Vitor Mendes"

console.log(nomeCompleto.split(" ")) // da mesma forma aqui, o separador foi o " "


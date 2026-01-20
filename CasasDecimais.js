// Existem va´rias soluções, vamos explorar algumas

let value = 1234.59

//toFixed()
// Math.ceil()
// Math.floor()
// Math.round()
// new IntL.NumberFormat().format() (é uma API)

console.log(value.toFixed(1)) // esse método espera um parâmetro que indica a quantidade de casas decimais após a vírgula

console.log(Math.ceil(value)) // arredonda para cima, faz o número ficar inteiro
console.log(Math.floor(value)) // arredonda para baixo, faz o número ficar inteiro

console.log(
    new IntL.NumberFormat("pt-BR", { // poderia não espeficar estilos escrevendo direto (new IntL.NumberFormat("pt-BR").format(value))
        style: "currency",
        currency: "BRL",
    }).format(value)
) // verificar se a versão do navegador é compatível com esta API
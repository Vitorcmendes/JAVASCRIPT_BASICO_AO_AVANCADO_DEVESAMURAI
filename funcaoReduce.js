//O método reduce() serve para “reduzir” um array inteiro a um único valor
//esse valor pode ser: um número (ex: soma dos elementos), uma string, um objeto, ou até outro array.
//Ele percorre o array elemento por elemento e vai acumulando um resultado com base numa função que você define.
//Sintaxe array.reduce(function(acumulador, itemAtual, index, array){ // lógica que atualiza o acumulador  return novoValorDoAcumulador},valorInicial)
// ou a sintaxe arry.reduce(callback[, valorinicial])
// perceba que o reduce tem 2 parâmetros, a função callback e o valor inicial do acumulador
// callback  - Função que é executada em cada avalor no array, recebe quatro argumentos:
//      acumulator - o valor retornado na última invocação que está sendo processado no array.
//      currentValue - o elemento atual que está sendo processado pelo array
//      indice - o índice do elemento atual que está sendo processado no array.
//      array - O array ao qual a função reduce foi chamada.
//      initialValue - Opcional. Objeto a ser usado como primeiro arqgumento da primeira chamada da função callback

let values = [1.5, 2, 4, 10]

function qualquer(acumulator, currentValue, index, array){
    console.log(`acumulator`, acumulator)
    console.log(`currentValue`, currentValue)
    console.log(`index`, index)
    console.log(`acumulator`, acumulator)
    console.log(`array`, array)
    console.log("----")

    return acumulator // perceba um detalhe. Como o primeiro parêmetro de reduce é um acumulador,
    // a função callback dentro do reduce tem que ter um return senão o acumulador não atualizará...
}

values.reduce(qualquer, 0)


//exemplo somando valores com reduce
let sum = values.reduce((total, item) => total + item, 0) // já usa arrow function direto
console.log(sum)

//exemplo calculando média simples
let avg = values.reduce((acumulador, itematual, index) => { acumulador = acumulador+itematual
    if (index === values.length - 1){
        return acumulador/values.length
    }
return acumulador}
,0)
console.log(avg)

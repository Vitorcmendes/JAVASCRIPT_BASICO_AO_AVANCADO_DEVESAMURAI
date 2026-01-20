// Filter percorre e filtra valores de um array que você quer descartar
// Ele não altera a variável original, trabalha com um novo array
// tem a seguinte forma .filter(valor atual do array, índice, array completo), apenas o primeiro parâmentro é obrigatório

const numbers = [10,18,2,15] 

//vamos supor que se quer filtrar valores maiores que 10
let res = []
for(const n of numbers) {
    if(n > 10 ){
        console.log(n)
        res.push(n) // para adicionar no array
    }
}

//mas todo o código acima poderia er escrito com filter de forma mais eficiente
const gt10 = function(item){
    return item > 10 // true or false
}

let res2 = numbers.filter(gt10) // usa-se uma função callback que já serve como o primeiro parâmetro obrigatório do filter

//mas eu poderia escrever a função direto no parametro do filter
let res3 = numbers.filter(function(item) {return item > 10} )

//ou ainda mais enxuto, com arrow functions
let res4 = numbers.filter((n) => (n > 10))

// filtrar por exemplo as pessoas masculinas e maiores que 18 para exército militar
const people = [
    { name: "vitor", age: "27", gender: "M"},
    { name: "paulo", age: "17", gender: "M"},
    { name: "veronica", age: "25", gender: "F"},  
]

 const exercito = people.filter((p) => (p.age >= 18 && p.gender === "M"))
 console.log(exercito)

 //se quiser colocar no array apenas o valor de uma propriedade e não o bjeto inteiro
 // use o método map
 const exercito2 = people.filter((p) => (p.age >= 18 && p.gender === "M")).map(p => p.name)
 console.log(exercito)

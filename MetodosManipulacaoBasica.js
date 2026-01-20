let people = ["vitor", "andré", "Paulo", "tainá", "joão"]



// retornar elemntos específicos
console.log(people[2])
console.log(people[people.length -1]) // retorna o último no caso

// retornar "fatias" de um array
console.log(people.slice(1, 3)) // começa no 1 e termina no 3 (inclui o 1 e exclui o 3)
console.log(people.slice(2)) // começa no 2 e vai do 2 em diante

// Adiciona novos elementos no array (início e fim)
people.push("novo nome") // adiciona no final
console.log(people)
people.unshift("novo nome2") // adiciona no início do array
console.log(people)

// remover elementos do array
people.pop()// remove elementos do fim do array
console.log(people) 
people.shift() // remove elementos do início do array
console.log(people)
// console.log(people.pop())  assim faz ele mostrar o elemento removido

// remover "fatias" específicas de um array
people.splice(1,2) // inclui o 1 e corta 2 quantidades a partir dele
console.log(people)

//localizar elementos
let index = people.indexOf("tainá")
console.log(index)
people.splice(people.indexOf("tainá"), 2 )

console.log(people)

// people.slice(people.indexOf("Paulo") )

// console.log(people)

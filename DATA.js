// Data é um tipo bastante específico do JS

// comando new Date

console.log(new Date("15/01/2026")) // aqui dá erro porque o new Date em JS é no formato ISO mm/dd/yyyy

// o comando New Date converte uma string para data. Repare também que se tem uma certa flexibilidade
// podendo escrever com ou sem barras e com ou sem hífens.
console.log(new Date("01/15/2026"))
console.log(new Date("01 15 2026"))
console.log(new Date("01-15-2026"))
console.log(new Date("01152026")) // assim não dá

//Métodos adicionais para conversão
console.log(new Date().toString)
console.log(new Date().toISOString)//Já no formato ISO

console.log('olá mundo!')

// verificação de tipos
console.log('1', typeof 1)
console.log('1.5', typeof 1.5)
console.log('vitor', typeof 'vitor')
console.log('true', typeof true)
console.log(typeof Infinity)

// além dos tipos primitivos já conhecidos existe o objeto
// objeto é um tipo de variável em que se pode acrescentar propriedades e funções dentro dela
// exemplo
console.log({
    nome: 'vitor',
    idade: 27,
    endereco: {
        logradouro:'Avenida', // um objeto dentro de outro objeto nesse caso...
        rua: 'central',
        bairro: 'petropolis',
    }
})

// datas
console.log(new Date(2025, 0, 12)) 
console.log(new Date(2025, 0, 12, 13, 59, 30))// data e hora

// Refs.

// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// - https://www.w3schools.com/jsref/jsref_obj_date.asp

// 1. Date é um tipo específico do JS
// 2. Possuem métodos próprios para manipulação get e set.
// 3. São melhores quando se utilizados com bibliotecas (moment.js e fs-date)

// ## Como se declara uma variável Date no JS

// ```javascript
// new Date() // inicializa com a data e hora atual do computador.
// new Date(year, month, day, hours, minutes, seconds, milliseconds) // inicializa com valores pré-definidos.
// new Date(dateString) // inicializa a partir de uma string.
// ```

// ## Principais métodos

// - `getDay()` e `setDay()` - Retorna / define o dia da semana (0-6).
// - `getDate()` e `setDate()` - Retorna / define o dia do mês (1-31).
// - `getMonth()` e `setMonth()` - Retorna / define o mês (0-11).
// - `getFullYear()` e `setFullYear()` - Retorna / define o ano.
// - `getHours()` e `setHours()` - Retorna / define a hora (0-23).
// - `getMinutes()` e `setMinutes()` - Retorna / define os minutos (0-59).
// - `getSeconds()` e `setSeconds()` - Retorna / define os segundos (0-59).
// - `parse()` - Recupera uma data a partir de uma string.
// - `toString()` - Retorna uma data como string.
// - `toISOString()` - Retorna uma data como string no padrão ISO.
// - `toTimeString()` - Retorna a hora apenas.

const person = {
    nome: "vitor",
    idade: 27,
    cidade: "porto alegre"

}

for(const prop in person){
console.log(` ${prop} - ${person[prop]}`)

}

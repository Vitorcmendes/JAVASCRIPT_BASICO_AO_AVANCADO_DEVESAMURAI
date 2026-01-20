
const values = [1,2,3,4,5,10]

// a seguinte função percorre o array fazendo a multiplicação

function mult(values){
    for (let i = 0; i<values.length; i++){
        values[i] *= values[i]
    }
    return values
}

// mas e se quiséssemos deixar pra o usuário escolher a operação
// ao invés de a função determinar qual seria a operação?

const func = (n) => {
    return n * n
}

// agora muda a primeira função para receber mais um argumento,
// que vai ser justamente a função da operação

function multi(values, a){
    for (let i = 0; i<values.length; i++){
        values[i] = a(values[i])
    }
    return values
}


console.log(multi(values, func))

// ou poderia ter escrito a arrow function direto no console.log

console.log(multi(values, (n) => n*n)) // chamar uma função como argumento de outra função se chama callback

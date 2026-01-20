// arrow function é uma maneira mais rápida e prática de declarar uma função
// não precisa escrever function

//forma tradicional
function mult(n){
    n = n*n
    return n
}

// arrow function
const mult = (n) => { //vai dentro da variável nesse caso
    n = n*n
    return n
}

// se a função tivesse apenas uma linha, poderia ser ainda mais exuta
// sem as chaves e com return automático
const multi = (n) => (n= n*n)
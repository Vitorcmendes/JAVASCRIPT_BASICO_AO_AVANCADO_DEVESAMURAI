function sayhello(){
    console.log(`Olá Vitor. Seja Bem-vindo`)
}
// com parâmetro

function sayhello(a){
    console.log(`Olá ${a}. Seja Bem-vindo`)
}
name = "felipe"
sayhello(name)

// object arguments. interessante para quando não se sabe a quantidade de argumentos da função
// se comporta como array então dá pra percorrer com for

function sum() {
 let res = 0

 for (const n of arguments){
    res = res + n
 }
 return res
}

console.log(sum(1,3,5,9,6,4,7))

// comportamento por referência

function mult(n){
    n = n*n
    return n
}

let numVal = 10
console.log(mult(numVal)) // aqui deu 100
console.log(numVal) // aqui deu 10, ou seja, a função não muda a variável, apenas trabalha com o valor recebido dela

function multObjeto (obj){
    obj.value = obj.value * obj.value
    return obj
}

const numObj = { value: 10}
console.log(multObjeto(numObj)) // retornou o objeto e o valor processado da respectiva propriedade

//teste escopo de função
// uma função pode ser chamada antes deser declarada 
// mas uma função dentro de uma variável não

teste()

function teste(){
    console.log('teste escopo')
}
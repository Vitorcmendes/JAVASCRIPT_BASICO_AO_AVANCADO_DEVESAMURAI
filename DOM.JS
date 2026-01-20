// HIERARQUIA DO DOM
// Document -> Nodes -> Elements -> Atributes

console.log(document)

console.log(document.body)// CERTO
console.log(document.body)  // errado

// a partir do node Body, você só consegue acessar os elemntos através dos métodos exploratórios
// exemplos:

//document.getElementById()
const titleEL = document.getElementById("person-name")
console.log("titleEL", titleEL)

// document.getElementsByTagName()
const title2 = document.getElementsByTagName("h1") 
console.log("title2", title2)

// document.getElementsByClassName()
const title3 = document.getElementsByClassName("title") 
console.log("title2", title3)

// iterando
for (const el of titleEL3) {
    console.log("title3", titleEL3) 
} // como classe e tags pode conter mais de 1 elemento, elas retornam um array iterável 
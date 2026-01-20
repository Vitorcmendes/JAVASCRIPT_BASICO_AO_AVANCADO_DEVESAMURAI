//JSON - JavaScript Object Notation
// JSON.stringfy()
// JSON.parse()

// converter json em string é importante para fazer APIs e outras linguagens se comunicarem

const people = {
    id: 1,
    name: "Vitor",
    lastName: "Mendes",
    bornDate: new Date(1998, 3, 28),
    address: {
        city: " Porto Alegre",
        bairro: "Menino Deus",
    }
}

//convertendo json para texto
console.log(JSON.stringify(people))
console.log(typeof(JSON.stringify(people)))

//convertendo de string para JSON
const json ='[{"id":1,"name":"Vitor","lastName":"Mendes","bornDate":"1998-04-28T03:00:00.000Z","address":{"city":" Porto Alegre","bairro":"Menino Deus"}}]'

console.log(JSON.parse(json))
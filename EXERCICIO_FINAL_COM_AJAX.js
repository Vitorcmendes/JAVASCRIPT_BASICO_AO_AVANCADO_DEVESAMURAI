

const loadData = () => {
    const xhr = new XMLHttpRequest() // esta é a classe responsável por fazer chamadas remotas
    xhr.open ("GET", "https://api.github.com/users/Vitorcmendes") // abre a conexão com os dados
    xhr.send(null) // é null porque o método usado foi GET, ou seja, queremos pegar alguma coisa e não enviar
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) { // estado 4 é sucesso
            const response = JSON.parse(xhr.responseText)
            console.log(response)
            const newName = response.name
            const avatarUrl = response.avatar_url
            const followers = response.followers
            const bio = response.bio
            const location = response.location

            const NameElement = document.createElement("h1")
            NameElement.innerText = newName

            const avatarUrlElement = document.createElement("img")
             avatarUrlElement.setAttribute("width", "128")
             avatarUrlElement.setAttribute("src", avatarUrl)
            
            const followersElement = document.createElement("p")
            followersElement.innerText = (`Seguidores: ${followers}`)
            
            const bioElement = document.createElement("p")
            bioElement.innerText = bio

            const locationElement = document.createElement("p")
            locationElement.innerText = location

            // A lógica do fluxo aqui foi primeiro receber os dados da API em variáveis,
            // em seguida criar os elementos na memória do JS atribuindo os conteúdos aos 
            // elementos e só por último adicionar elementos ao body do HTML.
            document.body.appendChild(avatarUrlElement)
            document.body.appendChild(NameElement)
            document.body.appendChild(followersElement)
            document.body.appendChild(bioElement)
            document.body.appendChild(locationElement)
        }
    }
} 

const buttonEl = document.querySelector("button")
buttonEl.addEventListener("click", loadData)






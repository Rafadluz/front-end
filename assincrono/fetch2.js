const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
    .then(resposta => {
        if (!resposta.ok){
            throw new Error("Erro na rede: " = resposta.status);
        }
    })
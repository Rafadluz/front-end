function pagina(){
    const areaTarefas = document.querySelector(".container");
    const titulo = document.createElement("h2");
    titulo.textContent = "Lista de Tarefas";

    const input = document.createElement("input");
    input.type = "text";
    input.id = "tarefaInput";
    input.placeholder = "Digite uma tarefa";

    const botao = document.createElement("button");
    botao.id = "btnAdicionar";
    botao.textContent = "Adicionar";

    const lista = document.createElement("ul");
    lista.id = "ListaTarefas";

    areaTarefas.appendChild(titulo);
    areaTarefas.appendChild(input);
    areaTarefas.appendChild(botao);
    areaTarefas.appendChild(lista);

botao.addEventListener("click", ()=>{
    const novaTarefa = document.createElement("li");
    const texto = input.value.trim();

    if(texto === ""){
        alert("Digite algo!");
        return;
    }

    novaTarefa.textContent = texto;
    novaTarefa.classList.add('destaque');
    novaTarefa.setAttribute("data-tarefa", texto.toLowerCase());
    novaTarefa.style.color = "#333";

    lista.appendChild(novaTarefa);

// Evento para remover item ao clicar
novaTarefa.addEventListener("click", () => {
    const tarefa = novaTarefa.getAttribute("data-tarefa");
    console.log("Removendo:", tarefa);
    novaTarefa.classList.remove("destaque");
    novaTarefa.classList.add("removido");
    novaTarefa.innerHTML += "(remova)";
    setTimeout(()=>{lista.removeChild(novaTarefa);}, 1000); //remove tarefa depois de 1 segundo

    input.value = "";

});
});
}
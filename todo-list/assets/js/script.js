const formTodo = document.getElementById("formTodo")
formTodo.addEventListener("submit", pegarDados)

function pegarDados(event){
    event.preventDefault()
    const inputs = event.target
    const todo = {}

    for(let i = 0; i< inputs.length-1; i++){

        const {name, value} = inputs[i]
        
        todo[name] = value

        inputs[i].value = ""
    }

    todoList.adicionarTodo(todo)
    interface.listarTarefas(todoList.listaTodo, false)

}


const tagLista = document.querySelector(".tagLista")
tagLista.addEventListener("click", remocao)

function remocao(event){
    
    const span = event.target
  
    if(span.tagName === "SPAN"){
        
       if(todoList.finalizarTodo(span.id)){
        span.closest("li").remove()
       }

    }
}




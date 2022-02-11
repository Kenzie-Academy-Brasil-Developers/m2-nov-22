const interface = {
    tagLista: document.querySelector(".tagLista"),

    template({nome, descricao, id}){

        const   li = document.createElement("li")
        
        li.innerHTML = `
            <span id="${id}">
                <i data-feather="x-circle"></i>
            </span>
            <label>
                <h2>${nome}</h2>
                <p>${descricao}</p>
            </label>
        `
        return li
    },

    listarTarefas(lista, status){
        this.tagLista.innerHTML = ""
        lista.forEach(todo => {
            
            if(todo.status === status){
                const templateTodo = this.template(todo)
                this.tagLista.appendChild(templateTodo)
                feather.replace()
            }

        })

    }

}

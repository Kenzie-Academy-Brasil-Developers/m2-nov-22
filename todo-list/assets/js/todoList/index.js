//1 MODELAR A TODO LIST 

//OBJETO TODO-LIST 
//LISTATAREFAS

//AÇÕES 
//ADICIONAR UMA TAREFA 
//FINALIZAR UMA TEREFA 
//FILTRO MOSTRAR TODAS 
//MOSTRAR AS INCOMPLETAS

//TODO => OBJETO
// ID
// NOME 
// DESCRIÇÃO 
// STATUS 

const todoList  = {
    
    listaTodo: [],

    adicionarTodo(todo){
        
        const newId = this.gerarId()
        this.listaTodo.push({...todo, id:newId, status:false})
        
        return true 
    },

    finalizarTodo(id){

        const todoFiltro = this.listaTodo.find((todo)=> todo.id === Number(id))
        if(todoFiltro){

            todoFiltro.status = true
            return true 
        }
        
    },

    gerarId(){

        let maxId  = 0;
       
        this.listaTodo.forEach((todo)=>{
            if(todo.id > maxId){
     
                maxId = todo.id
               
            }
        })

        return maxId + 1

    },

    filtroFinalizadas(){

        const todosFinalizadas = this.listaTodo.filter(function(todo){
            return todo.status === true
        })

        if(todosFinalizadas.length > 0){
            return todosFinalizadas
        }

        return false
    }
    
}



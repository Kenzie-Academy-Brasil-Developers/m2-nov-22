export class Interface {

    static listarClientes(clientes){
        
        clientes.forEach((cliente)=>{
           
            const tagTempalte = this.template(cliente)
            document.querySelector("ul").appendChild(tagTempalte)

        })

    }

    static template({id,nome,cpf,telefone}){

        const li = document.createElement("li")
        li.innerHTML = `
            <h2>Nome: ${nome}</h2>
            <p>CPF: ${cpf}</p>
            <p>Telefone: ${telefone}</p>
        `
        
        return li

    }

}
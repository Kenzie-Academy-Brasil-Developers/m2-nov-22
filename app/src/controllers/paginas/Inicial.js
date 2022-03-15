
import { Api } from "./../../api/Api.js"
export class Inicial {

    static async listarClientes(){

        const clientes = await Api.get("/clientes")

        clientes.forEach((cliente)=>{
           
            const tagTempalte = this.template(cliente)
            document.querySelector("ul").appendChild(tagTempalte)

        })
    }

    static template({nome,cpf,telefone}){

        const li = document.createElement("li")
        li.innerHTML = `
            <h2>Nome: ${nome}</h2>
            <p>CPF: ${cpf}</p>
            <p>Telefone: ${telefone}</p>
        `
        return li
    }

}
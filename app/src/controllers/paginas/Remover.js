
import { Api } from "../../api/Api.js";

export class Remover {

    static async listarClientes(){

        const clientes = await Api.get("/clientes")

        const select = document.querySelector("select")
        select.innerHTML = ""

        clientes.forEach((cliente)=>{

            const tagTempalte = this.template(cliente)
            select.appendChild(tagTempalte)

        })
    }

    static template({id, nome}){

        const option = document.createElement("option")
        option.innerText = nome
        option.value     = id

        return option
    }

    static async removerCliente(event){
       
        event.preventDefault()
       
        const selectCliente = event.target[0].value

        if(selectCliente.trim() !== ""){
            const response  =  await Api.delete("/clientes", selectCliente)
            this.listarClientes()
        }

    }

}

Remover.listarClientes()

const form  = document.querySelector("form")
form.addEventListener("submit", Remover.removerCliente.bind(Remover))
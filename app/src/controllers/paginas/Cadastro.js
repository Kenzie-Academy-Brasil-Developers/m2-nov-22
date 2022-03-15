import {Api} from "../../api/Api.js"

export class Cadastro {

    static cadastrarCliente(event){
        event.preventDefault()
        
        const inputs = event.target
        const novoCliente = {}
        
        for(let i = 0; i< inputs.length; i++){
            
            if(inputs[i].name){
                const name = inputs[i].name
                const value = inputs[i].value
                novoCliente[name] = value
            }

            inputs[i].value = ""
        }

        Api.post("/clientes", novoCliente)

    }

}

const formulario = document.querySelector("form")
formulario.addEventListener("submit", Cadastro.cadastrarCliente.bind(Cadastro))

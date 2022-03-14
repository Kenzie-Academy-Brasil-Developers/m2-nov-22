import {Api} from "./../api/Api.js"

class FormCadastro {

    static formulario = document.querySelector("form")

    static start(){

        this.formulario.addEventListener("submit", this.cadastrarCliente.bind(this))

    }

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

        //API.POST("/CLIENTES", {//NOVO CLIENTE})
        Api.post("/clientes", novoCliente)

    }

}
FormCadastro.start()
export {FormCadastro}
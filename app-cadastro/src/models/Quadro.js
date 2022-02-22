import {ClienteControle} from "./../controllers/Cliente.js"
import {CobrancaControle} from "./../controllers/Cobranca.js"
class Quadro {
   
    static tgSelect = document.getElementById("cliente") 
    static tagLista = document.querySelector(".app__cobrancas")
    static clientes = []
    static cobrancas = []

    static capturarDados(event){
        event.preventDefault()

        const nomeFormulario = event.target.name
        const inputs         = event.target
        const dataForm       = {}
        
        for(let i = 0; i< inputs.length;i++){
            const {name, value} = inputs[i]
            if(name){
                dataForm[name] = value
            }

            inputs[i].value = ""
        }

        if(nomeFormulario == "cliente"){
            
            this.clientes = ClienteControle.cadastrarCliente(dataForm)
            this.atualizarSelect()

        }else{

            this.cobrancas = CobrancaControle.cadastrarCobranca(dataForm)
            this.templateCobrancas()
        }
        
    }

    static atualizarSelect(){

        this.tgSelect.innerHTML = ""
        
        this.clientes.forEach((cliente)=>{
            
            const {nome, id} = cliente

            const option     = document.createElement("option")
            option.value     = id
            option.innerText = nome

            this.tgSelect.appendChild(option)
        })
    }

    static templateCobrancas(){

        this.tagLista.innerHTML = ""
        this.cobrancas.forEach((cobranca)=>{
            const {status, cliente: clienteId, descricao, valor} = cobranca
            const li = document.createElement("li")
            

            //BUSCANDO CLIENTE
            const clienteCobranca = this.clientes.find((cliente)=>cliente.id == clienteId)

            if(status === true){
                li.classList.add("paga")
            }

            li.innerHTML =`
                <div>
                    <i data-feather="check-circle"></i> 
                </div>
                <div>
                    <h2>${clienteCobranca.nome}</h2>
                </div>
                <div>
                    <p>${descricao}</p>
                </div>
                <div>
                    <p>R$ ${valor}</p>
                </div>
                <div>
                    <p>20/02/2022</p>
                </div>
            `
            this.tagLista.appendChild(li)
            feather.replace()
        })


    }
}

export {Quadro}
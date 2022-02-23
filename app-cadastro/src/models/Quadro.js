import {ClienteControle} from "./../controllers/Cliente.js"
import {CobrancaControle} from "./../controllers/Cobranca.js"

//CLASSE QUADRO, RESPONSÁVEL POR MANIPULAR OS ELEMENTOS HTML DA PÁGINA. E REALIZAR A AUTALIZAÇÃO DE FORMA VISUAL.
class Quadro {
    
    //PROPROEDADES QUE RECEBEM OS ELEMENTOS HTML, LISTA DE COBRANÇAS E SELECT DE CLIENTES
    static tgSelect = document.getElementById("cliente") 
    static tagLista = document.querySelector(".app__cobrancas")

    //MÉTODO STATICO RESPONSÁVEL POR CAPTURAR DADOS DOS FORMULÁRIO
    //INVOCADO PELO ADDEVENTLISTENER NO ARQUIVO APP
    static capturarDados(event){
        event.preventDefault()

        //RECEBENDO INFORMAÇÕES DO EVENTO
        const nomeFormulario = event.target.name
        const inputs         = event.target
        
        //CRIANDO OBJETO PARA RECEBER AS INFORMAÇÕES DE FORMA FORMATADA
        const dataForm       = {}

        //PERCORRENDO OS INPUTS DO FORMULÁRIO 
        for(let i = 0; i< inputs.length;i++){

            //EXTRAINDO PROPRIEADE DE CADA INPUT ENCONTRADO
            const {name, value} = inputs[i]
            
            //VERIFICANDO SE EXISTE A PROPRIEDADE NAME
            if(name){
                dataForm[name] = value
            }

            //LIMPANDO INPUTS
            inputs[i].value = ""
        }

        //VERIFICAÇÃO PARA IDENTIFICAR DE QUAL FORMULÁRIO
        if(nomeFormulario == "cliente"){
            
            //PASSANDO OBJETO COM AS INFORMAÇÕES PARA FAZER A MODELAGEM E CADASTRO
            ClienteControle.cadastrarCliente(dataForm)

            //CHAMANDO A FUNÇÃO QUE ATUALIZA O SELECT DE FORMA VISUAL COM O NOVO CLIENTE 
            this.atualizarSelect()

        }else{

            //PASSANDO OBJETO COM AS INFORMAÇÕES PARA FAZER A MODELAGEM E CADASTRO 
            CobrancaControle.cadastrarCobranca(dataForm)
            
             //CHAMANDO A FUNÇÃO TEMPLATE PARA ATUALIZAR DE FORMA VISUAL 
            this.templateCobrancas()
        }
        
    }

    //MÉTODO RESPONSÁVEL POR ATUALZIAR O SELECT DE CLIENTES, DENTRO DO FORMULÁRIO DE COBRANÇAS
    static atualizarSelect(){
      
        this.tgSelect.innerHTML = ""
        
        //RECUPERANDO CLIENTES DO BANCO DE DADOS
        ClienteControle.pegarClientes().forEach((cliente)=>{
            
            //EXTRAINDO INFORMAÇÕES DO CLIENTE
            const {nome, id} = cliente

            //CRIANDO TAG OPTION PARA ALIMENTAR O SELECT
            const option     = document.createElement("option")
            option.value     = id
            option.innerText = nome

            //ALIMENTANDO SELECT DE FORM VISUAL
            this.tgSelect.appendChild(option)
        })
    }

    static templateCobrancas(){

        this.tagLista.innerHTML = ""

        CobrancaControle.pegarCobranca().forEach((cobranca)=>{

            const {status, data, cliente: clienteId, descricao, valor} = cobranca
        
            const li = document.createElement("li")

            //BUSCANDO CLIENTE
            const clienteCobranca = ClienteControle.pegarClientes().find((cliente)=>cliente.id == clienteId)

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
                    <p>${data}</p>
                </div>
            `
            this.tagLista.appendChild(li)
            feather.replace()
        })

    }

    static inicializandoAplicacao(){
        //INICIALIANDO O SELECT COM CLIENTES/COBRANÇAS JÁ PRÉ CADASTRADOS
        this.atualizarSelect()
        this.templateCobrancas()
    }
}

export {Quadro}
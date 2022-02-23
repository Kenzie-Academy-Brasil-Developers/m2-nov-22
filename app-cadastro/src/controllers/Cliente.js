import {Cliente} from "../models/Cliente.js"
import {BancoDados}      from "./../db/db.js"

//CLASSE RESPONSÁVEL POR FAZER A COMUNICAÇÃO ENTRE CLASSE DE MODELAGEM E BANCO DE DADOS
class ClienteControle{
    
    //MÉTODO CADASTRAR CLIENTE
    static cadastrarCliente(cliente){

        //FAZENDO MODELAGEM DO CLIENTE
        const novoCliente = new Cliente(cliente)

        //CADASTRANDO NO BANCO DE DADOS
        BancoDados.post("clientes", novoCliente)
    }

    //MÉTODO RECUPARAR CLIENTE
    static pegarClientes(){
        
        //RETORNA TODOS OS CLIENTES DO BANCO DE DADOS
        return BancoDados.get("clientes")
    }

}
export {ClienteControle}
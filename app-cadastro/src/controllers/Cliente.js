import {Cliente} from "../models/Cliente.js"
import {db}      from "./../db/db.js"

class ClienteControle{
    
    static cadastrarCliente(cliente){

        const novoCliente = new Cliente(cliente)
        db.clientes.push(novoCliente)
        
        return true
    }

}
export {ClienteControle}
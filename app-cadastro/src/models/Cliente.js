
import {db} from "./../db/db.js"

class Cliente {

    constructor({nome, cpf, telefone}) {
        this.id         = Cliente.gerarId(),
        this.nome       = nome,
        this.cpf        = cpf,
        this.telefone   = telefone
    }

    static gerarId(){
        
        let maxId = 0
        db.clientes.forEach((clientes)=>{
            if(clientes.id > maxId){
                maxId = clientes.id
            }
        })

        return maxId + 1
    }

}
export {Cliente}
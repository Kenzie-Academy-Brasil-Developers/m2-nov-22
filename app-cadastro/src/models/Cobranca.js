
import {db} from "./../db/db.js"

class Cobranca {

    constructor({descricao, valor, cliente}) {
        this.id         = Cobranca.gerarId(),
        this.descricao  = descricao,
        this.valor      = valor,
        this.cliente    = cliente,
        this.status     = false
    }

    static gerarId(){
        
        let maxId = 0
        db.cobrancas.forEach((cobranca)=>{
            if(cobranca.id > maxId){
                maxId = cobranca.id
            }
        })

        return maxId + 1
    }

}
export {Cobranca}
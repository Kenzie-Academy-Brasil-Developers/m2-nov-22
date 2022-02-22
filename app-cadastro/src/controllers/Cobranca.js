import {Cobranca} from "../models/Cobranca.js"
import {db}      from "./../db/db.js"

class CobrancaControle{
    
    static cadastrarCobranca(cobranca){

        const novaCobranca = new Cobranca(cobranca)
        db.cobrancas.push(novaCobranca)

        return db.cobrancas
    }

}
export {CobrancaControle}
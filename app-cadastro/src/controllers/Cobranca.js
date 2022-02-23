import {Cobranca} from "../models/Cobranca.js"
import {BancoDados}      from "./../db/db.js"

class CobrancaControle{
    
    static cadastrarCobranca(cobranca){

        const novaCobranca = new Cobranca(cobranca)
        BancoDados.post("cobrancas", novaCobranca)

    }

    static pegarCobranca(){

        return BancoDados.get("cobrancas")

    }

}
export {CobrancaControle}
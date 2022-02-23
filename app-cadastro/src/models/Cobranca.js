
class Cobranca {

    constructor({descricao, valor, cliente}) {
        this.data       = Cobranca.getData(),
        this.descricao  = descricao,
        this.valor      = valor,
        this.cliente    = cliente,
        this.status     = false
    }

    static getData(){

      return new Date().toLocaleDateString("pt-br")
      
    }

}
export {Cobranca}
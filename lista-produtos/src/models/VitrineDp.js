import { Vitrine } from "./Vitrine.js"

class VitrineDp extends Vitrine {
    constructor(nome, idVitrine, produtos, departamento){
        super(nome, idVitrine, produtos)
        this._departamento = departamento
    }

    listarProdutos(){

        this._produtos.forEach((produto) => {
            
            if(this._departamento == produto.secao){

                const template = this.templateProduto(produto)
                this._idVitrine.appendChild(template)
            }
        })

    }
}

export{VitrineDp}
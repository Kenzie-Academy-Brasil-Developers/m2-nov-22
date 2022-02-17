import { Funcionario } from "./Funcionario.js";

const Facilitador = class Facilitador extends Funcionario {
   
    constructor(nome, sobrenome, email, datanascimento, cpf, cargo){
        super(nome, sobrenome, email, datanascimento, cpf)
        this._cargo = cargo
    }

    set cargo(novoCargo){
        this._cargo = novoCargo
    }

    get cargo(){
        return this._cargo
    }

    //@OVERRIDING
    getStatus(){
        if(this._status === true){
            console.log(`${this.nome} - Facilitador ativo`)
        }else{
            console.log(`${this.nome} - Facilitador Inativo`)
        }
    }

    nomeCompletoFacilitador(){

        const nomecompleto = super.nomeCompleto()
        
        console.log(nomecompleto + "- Facilitador")
    }

}

export {Facilitador}

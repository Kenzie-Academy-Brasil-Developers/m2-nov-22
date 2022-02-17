import { Funcionario } from "./Funcionario.js";

const Instrutor = class Instrutor extends Funcionario {
   
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
            console.log(`${this.nome} - Instrutor ativo`)
        }else{
            console.log(`${this.nome} - Instrutor Inativo`)
        }
    }

    nomeCompletoInstrutor(){

        const nomecompleto = super.nomeCompleto()
        
        console.log(nomecompleto + "- Instrutor")
    }

}

export {Instrutor}
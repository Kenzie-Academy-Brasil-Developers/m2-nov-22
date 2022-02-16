import { Funcionario } from "./Funcionario.js";

const Instrutor = class Instrutor extends Funcionario {
   
    constructor(nome, sobrenome, email, datanascimento, cpf, modulos){
        super(nome, sobrenome, email, datanascimento, cpf)
        this._modulos = modulos
    }

    set modulos(novoModulo){
        this._modulos = novoModulo
    }

    get modulos(){
        return this._modulos
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

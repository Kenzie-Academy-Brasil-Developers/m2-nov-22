import { Aluno } from "./Aluno.js"

const Coache = class Coache  extends Aluno{

    constructor(nome, sobrenome, email, datanascimento, cpf, modulo, frequencia, nota, cnpj, turno){
        super(nome, sobrenome, email, datanascimento, cpf, modulo, frequencia, nota)
        this._cnpj = cnpj,
        this._turno = turno
    }
    
}

export {Coache}
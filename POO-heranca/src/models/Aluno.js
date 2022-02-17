const Aluno = class Aluno {

    constructor(nome, sobrenome, email, datanascimento, cpf){
        this._nome           = nome,
        this._sobrenome      = sobrenome,
        this._email          = email,
        this._datanascimento = datanascimento,
        this._cpf            = cpf
        this._status         = true,
        this._modulo         = ["M1"],
        this._frequencia     = 40,
        this._nota           = 0
    }
    
    //PEGAR UM VALOR DE UMA PROPRIEDADE
    get nome(){
        
        return this._nome

    }

    //ATRIBUIR UM NOVO VALOR PRA UMA PROPRIEDADE
    set nome(novoNome){
        
        this._nome = novoNome

    }

    //PEGAR UM VALOR DE UMA PROPRIEDADE
    get sobrenome(){
        
        return this._sobrenome

    }

    //ATRIBUIR UM NOVO VALOR PRA UMA PROPRIEDADE
    set sobrenome(novoSobrenome){
        
        this._sobrenome = novoSobrenome

    }

     //PEGAR UM VALOR DE UMA PROPRIEDADE
     get email(){
        
        return this._email

    }

    //ATRIBUIR UM NOVO VALOR PRA UMA PROPRIEDADE
    set email(novoEmail){
        
        this._email = novoEmail

    }

    //PEGAR UM VALOR DE UMA PROPRIEDADE
    get datanascimento(){
        
        return this._datanascimento

    }

    //ATRIBUIR UM NOVO VALOR PRA UMA PROPRIEDADE
    set datanascimento(novaDatanascimento){
        
        this._datanascimento = novaDatanascimento

    }

    //PEGAR UM VALOR DE UMA PROPRIEDADE
    get cpf(){
        
        return this._cpf

    }

    //ATRIBUIR UM NOVO VALOR PRA UMA PROPRIEDADE
    set cpf(novoCpf){
        
        this._cpf = novoCpf

    }

    //PEGAR UM VALOR DE UMA PROPRIEDADE
    get status(){
        
        return this._status

    }

    //ATRIBUIR UM NOVO VALOR PRA UMA PROPRIEDADE
    set status(novoStatus){
        
        this._status= novoStatus

    }

    getStatus(){
        if(this._status === true){
            console.log(`${this.nome} - Funcionário ativo`)
        }else{
            console.log(`${this.nome} - Funcionário Inativo`)
        }
    }

    nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    }

}

export {Aluno}
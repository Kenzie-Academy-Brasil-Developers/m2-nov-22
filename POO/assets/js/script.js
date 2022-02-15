//PESSOAL//

//NOME
//SOBRENOME
//EMAIL
//DATANASCIMETO
//TELEFONE
//CPF

//CLASSE VAI MODELAR NOSSO OBJETOS => UMA PESSOA
class Pessoa {

    constructor(nome, sobrenome, email, datanascimento, idade, cpf, telefone){
        this._nome           = nome,
        this._sobrenome      = sobrenome,
        this._email          = email,
        this._datanascimento = datanascimento,
        this._idade          = idade,
        this._cpf            = cpf,
        this._telefone       = telefone

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
    get telefone(){
        const telefoneTratado = this._telefone.replace("","-")
        return telefoneTratado

    }

    //ATRIBUIR UM NOVO VALOR PRA UMA PROPRIEDADE
    set telefone(novoTelefone){
        
        if(novoTelefone === "valido"){
            const telefoneTratado = novoTelefone.replace("-","")
            this._novoTelefone = telefoneTratado
        } 
      
    }


}

//CRIANDO UM NOVO OBJETO DO TIPO PESSOA

const hudson = new Pessoa("Hudson", "Carolino", "hudson@gmail.com", "31/10/1996", "(41) 9711-7123")

//ATRIBUINDO
hudson.telefone  = "4197118123"

//ACESSANDO
console.log(hudson.telefone)









//OBJETO
const hudson = {
    nome:"Hudson",
    sobrenome:"Carolino"
}

//CRIANDO UM NOVO OBJETO => PESSOA 
const pessoa = {...hudson, idade: 25}

//EDITANDO UMA PROPRIEDADE
const {nome:nomePessoa ,sobrenome,idade} = pessoa

///
const infoEmpresa = {
    nome:"Kenzie Academy",
    cnpj:"129.231.23.45",
    funcao:"Instrutor"
}

//
const PessoaInstrutor = {
    empresa: {...infoEmpresa},
    nome:"Hudson",
    sobrenome:"Carolino",
    idade:25
}

//
const {
        nome,
        sobrenome:sobrenomeInstrutor, 
        empresa:{nomeEmpresa, cnpj, funcao }

    } = PessoaInstrutor

//****************** *//
        //ARRAY
//****************** *//

let nomes = ["Hudson", "Maria", "Pedro", "Daniel"]

//PEGANDO TODOS
let [nome1,nome2 , nome3, nome4] = nomes

//PULANDO VALORES
//let [, , nome3, nome4] = nomes

//
const coordenadas = ["-55", "20", 200]

const [lat = 0, long = 0, distancia = 0] = coordenadas

//FAZNEDO PUSH 
const arrayNUmeros      = [675,1,2,3,4,545,65,1000,435,65]

const novoArrayNumeros  = [...arrayNUmeros]

//console.log(arrayNUmeros)
//console.log(novoArrayNumeros.sort((a,b)=> a-b))

//FUNCIONARIO PARA CADASTRAR
const jose = {
    nome:"José",
    sobrenome:"Silva",
    cargo:"facilitador"
}

const hudsonInstrutor = {
    nome:"Hudson",
    sobrenome:"Carolino",
    cargo:"instrutor"
}

const maria = {
    nome:"Maria",
    sobrenome:"Porcina",
    cargo:"coach"
}


//APLICAÇÃO DE CADASTRO
const cadastroFuncionario = {
    fucnionarios: [],
    salarios:{facilitador:2000, coach:2500, instrutor:3000},

    cadastrarFuncionario(funcionario){
        const {cargo} = funcionario
        

        this.fucnionarios = [{
            ...funcionario, 

            salario:this.salarios[cargo]
        }, ...this.fucnionarios]


    }

}
cadastroFuncionario.cadastrarFuncionario(jose)
cadastroFuncionario.cadastrarFuncionario(hudsonInstrutor)
cadastroFuncionario.cadastrarFuncionario(maria)
console.log(cadastroFuncionario.fucnionarios)








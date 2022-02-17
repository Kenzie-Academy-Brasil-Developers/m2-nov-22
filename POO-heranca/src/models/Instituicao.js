//NOME - string
//CNPJ - numero int
//ALUNOS - array 
//FUNCIONARIOS [{instrutor [], facilitador:[], }]
//  -INSTRUTOR 
//  - FACILITADOR 
//  - COACHE 
//MODULOS
//  - M1
//  - M2
//  - M3

const Instituicao = class Instituicao {

    constructor(nome, cnpj){
        this._nome          = nome,
        this._cnpj          = cnpj,
        this._alunos        = [],
        this._funcionarios  = {
            instrutor:[],
            facilitador:[],
            coaches:[]
        },
        this._modulos       = [
            {
                nome:"m1",
                facilitador:"Hudson"
            },
        ]

    }

    get nome(){
        return this._nome
    }

    set nome(novoNome){
       this._nome = novoNome
    }

    get funcionarios(){
        this._funcionarios
    }

    set funcionarios(Novofuncionarios){
       this._funcionarios =  Novofuncionarios
    }

    cadastrarFuncionario(funcionario){
        const {cargo} = funcionario

        
       
        this._funcionarios[cargo].push(funcionario)
    }   

    
}

export {Instituicao}
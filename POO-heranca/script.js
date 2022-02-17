import {Funcionario} from './src/models/Funcionario.js'
import { Instrutor } from './src/models/Instrutor.js'
import { Aluno } from './src/models/Aluno.js'
import { Coache } from './src/models/Coache.js'
import { Instituicao } from './src/models/Instituicao.js'
import { Facilitador } from './src/models/Facilitador.js'


//FUNCIONARIO
//const hudson = new Funcionario("Hudson", "Carolino", "hudson@gmail.com", "31/10/1996", "108.266.049-23")

//INSTRUTOR
const isa    = new Instrutor("Isa", "Silva", "isa@gmail.com", "31/10/1996", "108.266.049-12","instrutor")
const tiago    = new Instrutor("Tiago", "Ramos", "tiago@gmail.com", "31/10/1996", "108.266.049-34","instrutor")
const maria    = new Facilitador("Maria", "Silva", "maria@gmail.com", "31/10/1996", "108.266.049-34","facilitador")

//ALUNO
//const pedro  = new Aluno("Pedro", "Silva", "pedro@gmail.com", "31/10/1995", "108.266.049-34")

//COACHES
//const jonatas  = new Coache("Jonatas", "Silva", "jonatas@gmail.com", "31/10/1995", "108.266.049-34")


//ESCOLA 
const Kenzie  = new Instituicao("Kenzie","123.423.5645.76")

console.log(Kenzie)

Kenzie.cadastrarFuncionario(isa)
Kenzie.cadastrarFuncionario(tiago)
Kenzie.cadastrarFuncionario(maria)

console.log(Kenzie._funcionarios)




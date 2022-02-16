import {Funcionario} from './src/models/Funcionario.js'
import { Instrutor } from './src/models/Instrutor.js'


const hudson = new Funcionario("Hudson", "Carolino", "hudson@gmail.com", "31/10/1996", "(41) 9711-7123")


const isa = new Instrutor("Isa", "Silva", "isa@gmail.com", "31/10/1996", "(41) 9711-7124","M1")

console.log(hudson.nomeCompleto())

console.log("--------------------------")


console.log(isa.nomeCompleto())
console.log(isa.nomeCompletoInstrutor())











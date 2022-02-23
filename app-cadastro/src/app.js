
import {Quadro} from "./models/Quadro.js"
import {BancoDados} from "./db/db.js"


//1 - INICIALIZANDO BANCO DE DADOS
BancoDados.inicializandoBancoDados()


//2 - INICIALIANDO O SELECT COM CLIENTES/COBRANÇAS JÁ PRÉ CADASTRADOS
Quadro.inicializandoAplicacao()


//INTERCEPTANDO EVENTOS DO FORMILÁRIO - SUBMIR 
const btnCadastrarCliente = document.querySelector("body")
btnCadastrarCliente.addEventListener("submit", Quadro.capturarDados.bind(Quadro))





import {Inicial} from "./controllers/paginas/Inicial.js"
import {Api} from "./api/Api.js"

Api.atualizar("/clientes", 1, {nome: "Hudson Carolino", cpf:"10826604943", telefone:"41997117235"})

Inicial.listarClientes()


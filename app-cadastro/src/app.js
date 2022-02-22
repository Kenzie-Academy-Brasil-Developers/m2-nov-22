
import {Quadro} from "./models/Quadro.js"

const btnCadastrarCliente = document.querySelector("body")
btnCadastrarCliente.addEventListener("submit", Quadro.capturarDados.bind(Quadro))




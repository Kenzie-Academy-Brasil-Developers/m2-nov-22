
import {Quadro} from "./models/Quadro.js"

const btnCadastrarCliente = document.querySelector("body")
btnCadastrarCliente.addEventListener("submit", Quadro.capturarDados)



class classeEstatica {

    static contator = 0



    constructor(nome){
        this.nome = nome
    }
   
    
    static metodoEstatico(){

        console.log("Meu método metodoEstatico")

        this.contator = this.contator + 1
    }

    metodoObj(){
        
    }

}

classeEstatica.metodoEstatico()
console.log(classeEstatica.contator)
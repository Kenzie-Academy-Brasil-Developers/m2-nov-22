class Quadro {

    static capturarDados(event){
        event.preventDefault()
        
        //console.log(ClienteControle.cadastrarCliente({nome: "Hudson", cpf:"108.266.95-34" , telefone: "99711649"}))
 
        const nomeFormulario = event.target.name
       
        if(nomeFormulario == "cliente"){
            console.log("add cliente")
        }else{
            console.log("add cobrança")
        }
        
    }
}

export {Quadro}
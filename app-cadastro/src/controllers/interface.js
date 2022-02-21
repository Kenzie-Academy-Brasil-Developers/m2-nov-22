const popUp__cobranca = document.querySelector(".app__popUp__cobranca")
const popUp__cliente   = document.querySelector(".app__popUp__cliente")
const menuCobrancas = document.querySelector(".app__navegacao")
const body = document.querySelector("body")

body.addEventListener("click", popUpControllers)

function popUpControllers(e){

    const cliqueElemento = e.target.innerText.toLowerCase()

    if(cliqueElemento === "cobranças"){

        popUp__cobranca.classList.add("show")
        body.classList.add("scrollStop")
    
    }else if(cliqueElemento === "clientes"){
    
        popUp__cliente.classList.add("show")
        body.classList.add("scrollStop")
    
    }else if(cliqueElemento == "x"){
        e.target.closest("div").classList.remove("show")
        body.classList.remove("scrollStop")
    }
    
}
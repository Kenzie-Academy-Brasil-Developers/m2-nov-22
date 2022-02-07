const vitrinePrincipal = document.querySelector(".vitrineProdutos__vitrine.vitrinePrincipal")
const vitrineCarrinho = document.querySelector(".vitrineProdutos__vitrine.vitrineCarrinho")


vitrine.listar(dataProdutos,vitrinePrincipal)


//ADICIONANDO ESCUTADOR DE EVENTOS
vitrinePrincipal.addEventListener("click", interceptarEvento)

//CHAMANDO MINHA CALLBACK PARA ADICIONAR PRODUTO NO CARRINHO
function interceptarEvento(event){
 
    //BOTÃO QUE FOI CLICADO
    const btnComprar  = event.target
    
    //IDENTIFICO O NOME DO BOTÃO
    if(btnComprar.tagName == "BUTTON"){

        //INDENTIFICANDO ID PRODUTO
        const idProduto  = btnComprar.id

        //ADICIONANDO PRODUTO NO CARRINHO / PEGANDO O RETORNO TRUE OU FALSE
        const status  = carrinho.adicionarProduto(idProduto)

        if(status === true){
            
            vitrine.listar(carrinho.produtos,vitrineCarrinho)

            notificacaoAddProduto(status, "Produto adicionando com sucesso!")
        }else{
            
            notificacaoAddProduto(status, "Produto baixo estoque!")
        }
        
    }

}

//ADICIONANDO ESCUTADOR DE EVENTOS NO CARRINHO
vitrineCarrinho.addEventListener("click", interceptarEventoCarrinho)
function interceptarEventoCarrinho(event){
    //BOTÃO QUE FOI CLICADO
    const btnComprar  = event.target
    
    //IDENTIFICO O NOME DO BOTÃO
    if(btnComprar.tagName == "BUTTON"){

        //INDENTIFICANDO ID PRODUTO
        const idProduto  = btnComprar.id

        //ADICIONANDO PRODUTO NO CARRINHO / PEGANDO O RETORNO TRUE OU FALSE
        
        const status  = carrinho.removerProduto(idProduto)

        if(status === true){
            
            vitrine.listar(carrinho.produtos,vitrineCarrinho)
            notificacaoAddProduto(status , "Produto removido do carrinho!")
        }
        
    }
}





//********************* */
    //NOTIFICAÇÃO//
//********************* */
function notificacaoAddProduto(status, mensagem){

    const tagNotificacao = document.querySelector(".notificacao")
    const textoNotificacao = document.querySelector(".notificacao span")

    if(status === true){

        tagNotificacao.classList.add("sucees")
        textoNotificacao.innerText = mensagem
        
    }else{

        tagNotificacao.classList.add("error")
        textoNotificacao.innerText = mensagem

    }

    setTimeout(()=>{
        tagNotificacao.classList.remove("sucees","error")
    },1800)
 
}

//********************* */
    //CARROSSEL DE IMAGENS//
//********************* */
const arrayImagens = [
    "./assets/img/1.png",
    "./assets/img/2.png",
    "./assets/img/3.png",
    "./assets/img/4.png",
    "./assets/img/5.png",
    "./assets/img/6.png",
    "./assets/img/7.png",
    "./assets/img/8.png",
    "./assets/img/9.png",
]
const img  = document.querySelector(".carrosselDestaque img")

function carrosselDestaque(imagens,img, valorTempo){
    
    let cont = 0
    const tempo  = setInterval(function(){
        
        if(cont < arrayImagens.length){
            img.src = imagens[cont]
            cont++
        }else{
            cont = 0
        }
       
    }, valorTempo) 

}
carrosselDestaque(arrayImagens,img, 2000)



document.querySelector("#filtroPreco").addEventListener("click", function(event){
    event.preventDefault()

    vitrine.filtroPreco()

})












// const buttonsProdutos = document.querySelectorAll(".vitrineProdutos__vitrine.vitrinePrincipal button")

// buttonsProdutos.forEach((btnComprar)=> btnComprar.addEventListener("click", adicionarProdutoCarrinho))
// //  PRIMEIRA FORMA
// for(let i = 0; i< buttonsProdutos.length; i++){


//     buttonsProdutos[i].addEventListener("click", adicionarProdutoCarrinho)

// }

// //  SEGUNDA FORMA
// buttonsProdutos.forEach(function(btnComprar){
    
//     btnComprar.addEventListener("click", adicionarProdutoCarrinho)
// })


//  TERCEIRA FORMA
//SELECIONANDO VITRINE DE PRODUTOS
const vitrinePrincipal = document.querySelector(".vitrineProdutos__vitrine.vitrinePrincipal")
const vitrineCarrinho = document.querySelector(".vitrineProdutos__vitrine.vitrineCarrinho")


//ADICIONANDO ESCUTADOR DE EVENTOS
vitrinePrincipal.addEventListener("click", adicionarProdutoCarrinho)

//CHAMANDO MINHA CALLBACK PARA ADICIONAR PRODUTO NO CARRINHO
function adicionarProdutoCarrinho(event){
 
    //BOTÃO QUE FOI CLICADO
    const btnComprar  = event.target
    
    //IDENTIFICO O NOME DO BOTÃO
    if(btnComprar.tagName == "BUTTON"){


        //PEGAR O PAI DO BUTTON
        //btnComprar.parentElement
        //PRODUTO 
        const cardProduto = btnComprar.closest("li")

        //CLONANDO PRODUTO DA VITRINE
        const cardProdutoClone = cardProduto.cloneNode(true)

        //ADICIONANDO PRODUTO NO CARRINHO
        vitrineCarrinho.appendChild(cardProdutoClone)
    }

}





const vitrinePrincipal = document.querySelector(".vitrineProdutos__vitrine.vitrinePrincipal")
const vitrineCarrinho = document.querySelector(".vitrineProdutos__vitrine.vitrineCarrinho")

//CRIAR O CARD DE PRODUTO
    //A) Produto 
    //B) Informações
    //C) Montar o card de produto 
    //D) Retornar esse card para mostrar na tela

//FUNÇÃO MONTAR O CARD DE PRODUTO
const cardProduto = ({id,produtoNome,imageUrl,preco,precoPromocional,oferta,estoque}) => {
    
    //CRIANDO ELEMENTOS DO CARD
    const li            = document.createElement("li")
    const img           = document.createElement("img")
    const h2            = document.createElement("h2")
    const tagPreco      = document.createElement("p")
    const tagPrecoPromo = document.createElement("p")
    const button        = document.createElement("button")

    //ALIMENTANDO ELEMENTOS COM INFORMAÇÕES DO PRODUTO
    h2.innerText            = produtoNome
    img.alt                 = produtoNome
    img.src                 = imageUrl
    tagPreco.innerText      = `R$ ${preco.replace(".",",")}`
    tagPrecoPromo.innerText = `R$ ${precoPromocional.replace(".",",")}`
    button.id               = id
    button.innerText        = "Comprar"

    //ADICIONANDO OS ELEMENTOS DENTRO DO LI(CARD)
    li.classList.add("vitrineProdutos__vitrine__produto")
    li.appendChild(img)
    li.appendChild(h2)
    li.appendChild(tagPreco)

    if(oferta === true){
        li.appendChild(tagPrecoPromo)
        li.classList.add("promocao")
    }

    li.appendChild(button)

    return li
} 



//MOSTRAR NA VITRINE
//A) BASE COM TODOS OS PRODUTOS
//B) Fazer um loop percorrer os produtos
//C) Card de produto 
//D) Vitrine para mostrar o produto

//FUNÇÃO QUE LISTA OS PRODUTOS
const listarProdutos = (arrayProdutos, callbackCardProduto, vitrine) => {
    
    //PERCORRENDO DATA BASE DE PRODUTOS
        // arrayProdutos.forEach((produto)=>{
            
        //     //MONTANDO CARD PARA CADA PRODUTO
        //     const card = callbackCardProduto(produto)

        //     //COLOCANDO PRODUTO DA VITRINE
        //     vitrine.appendChild(card)

        // })

    //PERCORRENDO DATA BASE DE PRODUTOS
    for(let i = 0; i < arrayProdutos.length; i++){
        //MONTANDO CARD PARA CADA PRODUTO
        const card = callbackCardProduto(arrayProdutos[i])

        //COLOCANDO PRODUTO DA VITRINE
        vitrine.appendChild(card)
    }
}
//CHAMANDO FUNÇÃO, PASSANDO OS ARGUMENTOS NECESSÁRIO PARA LISTAR OS PRODUTOS NA TELA
listarProdutos(dataProdutos, cardProduto, vitrinePrincipal)




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





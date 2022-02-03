const vitrinePrincipal = document.querySelector(".vitrineProdutos__vitrine.vitrinePrincipal")
const vitrineCarrinho = document.querySelector(".vitrineProdutos__vitrine.vitrineCarrinho")

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

//FUNÇÃO QUE LISTA OS PRODUTOS
const listarProdutos = (arrayProdutos, callbackCardProduto, vitrine) => {
   
    //LIMPAR A INTERFACE 
    vitrine.innerHTML = ""

    //PERCORRENDO DATA BASE DE PRODUTOS
    arrayProdutos.forEach((produto)=>{
        
        //MONTANDO CARD PARA CADA PRODUTO
        const card = callbackCardProduto(produto)

        //COLOCANDO PRODUTO DA VITRINE
        vitrine.appendChild(card)

    })

}
//CHAMANDO FUNÇÃO, PASSANDO OS ARGUMENTOS NECESSÁRIO PARA LISTAR OS PRODUTOS NA TELA
listarProdutos(dataProdutos, cardProduto, vitrinePrincipal)


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
            
            listarProdutos(carrinho.produtos, cardProduto, vitrineCarrinho)

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
            
            listarProdutos(carrinho.produtos, cardProduto, vitrineCarrinho)

        }
        
    }
}

//CARRINHO
const carrinho = {
    produtos: [],
    precoTotal:0,
    qtdProdutos:0,

    adicionarProduto(idProduto){
        
        //2) REALIZAR PESQUISA NA BASE
        //3) VERIFICAR SE ESSE PRODUTO TRUE 
       const produto =  dataProdutos.find((produto) => produto.id == idProduto)

       //ACESSANDO PROPRIEDADE PRODUTOS/ADICIONANDO PRODUTO
       if(produto.estoque > 0){
        this.produtos.push(produto)
        this.qtdProdutos = this.produtos.length
        
        return true
        
       }

    },
    removerProduto(idProduto){

        //2) REALIZAR PESQUISA NA BASE
        //3) VERIFICAR SE ESSE PRODUTO TRUE 
        const produto =  this.produtos.find((produto) => produto.id == idProduto)
        
        if(produto){
            // IDENTIFICAR O PRODUTO DENTRO DO ARRAY 
            const index   =  this.produtos.indexOf(produto)
            //FAÇO A REMOÇÃO DE FATO
            this.produtos.splice(index, 1)

            return true
        }
        
    },
    removerTodosProduto(){
       
    }
}












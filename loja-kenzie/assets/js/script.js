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
            
            listarProdutos(carrinho.produtos, cardProduto, vitrineCarrinho)
            notificacaoAddProduto(status , "Produto removido do carrinho!")
        }
        
    }
}

//CARRINHO
const carrinho = {
    produtos: [],
    precoTotal:0,
    qtdProdutos:0,
    tagQtdProdutos: document.getElementById("qtdProdutos"),
    tagPrecoTotal:  document.getElementById("precoTotal"),

    adicionarProduto(idProduto){
        
        //2) REALIZAR PESQUISA NA BASE
        //3) VERIFICAR SE ESSE PRODUTO TRUE 
       const produto =  dataProdutos.find((produto) => produto.id == idProduto)

       //ACESSANDO PROPRIEDADE PRODUTOS/ADICIONANDO PRODUTO
       if(produto.estoque > 0){
        this.produtos.push(produto)
        
        this.totalPreco()
        return true
        
       }

    },

    removerProduto(idProduto){

        const produto =  this.produtos.find((produto) => produto.id == idProduto)
        
        if(produto){
            // IDENTIFICAR O PRODUTO DENTRO DO ARRAY 
            const index   =  this.produtos.indexOf(produto)
            //FAÇO A REMOÇÃO DE FATO
            this.produtos.splice(index, 1)

            this.totalPreco()
            return true
        }
        
    },

    removerTodosProduto(){
       this.produtos = []
       totalPreco()
    },

    totalPreco(){

        //PERCORRENDO PRODUTOS
        const total = this.produtos.reduce(function(soma, produto){

            //VERIFICANDO SE ESTÁ EM OFERTA
                if(produto.oferta === true){

                    //SOMANDO VALORES PROMOCIONAIS
                    return soma + Number(produto.precoPromocional)

                }else{
                    
                    //SOMANDO VALORES PADRÃO/NORMAL
                    return soma + Number(produto.preco)

                }

        }, 0)

        //ATUALIZANDO PRORPIEDADE DO CARRINHO/ATUALIZANDO TAG NO FRONT
        this.precoTotal                 = total
        this.tagPrecoTotal.innerText    = `Total preço: R$ ${total},00`

        //ATUALIZANDO PRORPIEDADE DO CARRINHO/ATUALIZANDO TAG NO FRONT
        this.qtdProdutos                = this.produtos.length
        this.tagQtdProdutos.innerText   = `QTD Produtos: ${this.produtos.length}`

    },
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













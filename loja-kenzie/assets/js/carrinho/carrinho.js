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

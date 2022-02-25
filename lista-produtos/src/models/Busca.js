class Busca{
    constructor(nome, produtos){
        this._nome      = nome,
        this._produtos  = produtos
    }

    static historicoPesquisa(){


    }

    pesquisarProdutos(pesquisa){

        const produtosFiltrados =  this._produtos.filter(function(produto){

            const {nome, secao} = produto
            const pesquisaFormatada         = pesquisa.toLowerCase().trim()
            const nomeProdutoFormatado      = nome.toLowerCase()
            const secaoProdutoFormatado     = secao.toLowerCase()

            if(nomeProdutoFormatado.includes(pesquisaFormatada) || secaoProdutoFormatado.includes(pesquisaFormatada)){
                return produto
            }

        })
        
        return produtosFiltrados

    }
}

export{Busca}
const vitrine = {
    statusFiltro: false,

    listar(arrayProdutos, vitrine){
        //LIMPAR A INTERFACE 
        vitrine.innerHTML = ""

        //PERCORRENDO DATA BASE DE PRODUTOS
        arrayProdutos.forEach((produto)=>{

            //MONTANDO CARD PARA CADA PRODUTO
            const card = this.cardProduto(produto)

            //COLOCANDO PRODUTO DA VITRINE
            vitrine.appendChild(card)

        })
    },

    cardProduto({id,produtoNome,imageUrl,preco,precoPromocional,oferta,estoque}){

        //CRIANDO ELEMENTOS DO CARD
        const li    = document.createElement("li")
        li.classList.add("vitrineProdutos__vitrine__produto")
      
        let tagPromocional  = ""

        if(oferta){
            tagPromocional  = `R$ ${precoPromocional.replace(".",",")}`
            li.classList.add("promocao")
        }

        li.innerHTML = `
            <img alt="${produtoNome}" src="${imageUrl}">
            <h2>${produtoNome}</h2>
            <p>R$ ${preco.replace(".",",")}</p>
            <p>${tagPromocional}</p>
            <button id="${id}">Comprar</button>
        `
        return li
    },

    filtroPreco(){

        let produtosFiltrados = [...dataProdutos]

        if(this.statusFiltro === false){
            
            produtosFiltrados.sort((a,b) => Number(b.preco) - Number(a.preco))
            this.statusFiltro = true        
        
       
        }else{

            produtosFiltrados.sort((a,b) => Number(a.preco) - Number(b.preco))
            this.statusFiltro = false 
        
        }
        
        this.listar(produtosFiltrados, vitrinePrincipal)
        
    }

}

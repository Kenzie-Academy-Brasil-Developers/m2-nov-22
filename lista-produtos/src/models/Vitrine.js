class Vitrine {
    constructor(nome, idVitrine, produtos){
        this._nome      = nome,
        this._idVitrine = document.getElementById(idVitrine),
        this._produtos  = produtos
    }

    get nome(){
        return this._nome
    }

    set nome(novoNome){
        this._nome = novoNome
    }

    listarProdutos(parametro = this._produtos){
        this._idVitrine.innerHTML = ""
        parametro.forEach((produto)=>{

            const template = this.templateProduto(produto)
            this._idVitrine.appendChild(template)

        })
    }

    templateProduto({nome,preco,img,categoria,secao}){

        const li = document.createElement("li")
        li.innerHTML = ` 
            <img src="${img}" alt="${nome}">
            <h3>${nome}</h3>
            <p>R$ ${preco}</p>
            <span>${secao} - ${categoria}</span>
        `
        return li

    }
}

export {Vitrine}
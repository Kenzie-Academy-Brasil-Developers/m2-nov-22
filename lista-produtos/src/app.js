import { Vitrine } from "./models/Vitrine.js"
import { VitrineDp } from "./models/VitrineDp.js"
import {produtos} from "./db/dataProdutos.js"
import {Busca} from "./models/Busca.js"

const VitrinePrincipal = new Vitrine("Todos os produtos","vitrinePrincipal", produtos)
VitrinePrincipal.listarProdutos()

const vitrineFrutas = new VitrineDp("Frutas", "hortifruti",produtos,"Hortifruti")
vitrineFrutas.listarProdutos()

const vitrinePanificadora = new VitrineDp("Panificadora", "panificadora",produtos,"Panificadora")
vitrinePanificadora.listarProdutos()


const vitrineLaticinio = new VitrineDp("Laticinio", "laticinio", produtos, "Laticinio")
vitrineLaticinio.listarProdutos()

//BUSCA 

const buscaProdutos  =  new Busca("Busca por nome", produtos)


const campoBuscaPorNome = document.querySelector(".campoBuscaPorNome")
campoBuscaPorNome.addEventListener("keyup", function(){
    
    const value = campoBuscaPorNome.value
    const resultadoPesquisa = buscaProdutos.pesquisarProdutos(value)

    VitrinePrincipal.listarProdutos(resultadoPesquisa)
    
})
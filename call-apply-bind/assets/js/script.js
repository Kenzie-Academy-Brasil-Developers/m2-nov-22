//THIS





// function minhafuncao(){

//     console.log(this.nome)
// }
//minhafuncao()

//minhafuncao()

// const minhaSegundafuncao = ()=>{

//     console.log(this)
// }
// minhaSegundafuncao()



// const pessoa = {
//     nome:"Anderson",
//     metodo:()=>{
//         console.log(this.nome)
//     },
// }

// pessoa.metodo()
 //console.log(pessoa)



//**************/
//CALL
// INVOCA UMA FUNÇÃO, SETANDO UM NOVO CONTEXTO
//CONSIGO PASSAR PARAMETROS PARA FUNÇÃO
//***************/
const pessoa = {
        nome:"Anderson",
        metodo: minhafuncao
}

function minhafuncao(modulo1,modulo2,modulo3){
        
    console.log(`Meu nome é ${this.nome}`)
    console.log(modulo1)
    console.log(modulo2)
    console.log(modulo3)
}

//pessoa.metodo()

//minhafuncao.call(pessoa, "M1","M2","M3")

//**************/
//APPLY
// INVOCA UMA FUNÇÃO, SETANDO UM NOVO CONTEXTO
//CONSIGO PASSAR PARAMETROS PARA FUNÇÃO
//***************/

//minhafuncao.apply(pessoa, ["M1","M2","M3"])


//**************/
//BIND
// RETORNA UMA NOVA FUNÇÃO, SETANDO UM NOVO CONTEXTO
//CONSIGO PASSAR PARAMETROS PARA FUNÇÃO
//***************/

const nomeFuncBind = minhafuncao.bind({nome:"Pedro"}, "M1","M2","M3")

//nomeFuncBind()


const pessoa2 = {
    nome:"Pedro Costa",
    btn: document.getElementById("falarNome"),
   
    falaNome(m1,m2){
        console.log(`Meu nome é ${this.nome}`)
        console.log(m1)
        console.log(m2)
    }
}


const btn = document.getElementById("falarNome")

btn.addEventListener("click", pessoa2.falaNome.bind(pessoa2, "M1", "M2"))
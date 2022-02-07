//NOME
//IDADE
//ALTURA

//AÇÕES 
//ANDAR 
//FALAR 

const pessoa = {
    nome: "Hudson",
    idade:25,
    altura:1.80,
}


const aluno = {
    nome: "João",
    idade:25,
    altura:1.80,
    curso: "Front-end",
    modulos: ["M1","M2","M3"]
}

const jogador = {
    nome: "Hudson",
    posicao: {x:0, y:0}
}

const div = document.createElement("div")
console.dir(div)

div.innerText = "Texto"

div.classList.add()







const hudson = {
    nome: "Hudson",
    sobrenome:"Carolino",
    idade:25,
    altura:1.80,
    conatos: [
        {email:"hudson@gmail.com"},
        {telefone:"419999999"},
    ],

    apresentar(){

        //console.log(`Meu nome é ${this.nome}`)

    },
    nomeCompleto(){
       // console.log(`Meu nome é ${this.nome} ${this.sobrenome}`)
        console.log(this)
    }

    
}

// hudson.apresentar()
 //hudson.nomeCompleto()


//OBJETO STRING
const string = {
    valor: "Hudson",

    toLocaleLowerCase(){

        //LÓGICA
        
        return this
    },

    toUpperCase(){
        //LÓGICA

        return this
    },

    split(){
         //LÓGICA

         return this
    }
}




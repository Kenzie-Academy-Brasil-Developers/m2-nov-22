

//CLASSE RESPONSÁVEL POR MODELAR O BANCO DE DADOS
class BancoDados {

    //PROPRIEDADES PARA ARMAZENAR DE FORMA LOCAL/TEMPORÁRIA
    static db = {
        clientes:[],
        cobrancas:[]
    }

    //MÉTODO PARA CADASTRAR => RODA (CLIENTE OU COBRANÇA)
    static post(rota, object){
        
        //RECEBE UM NOVO CLIENTE/ ATRIBUI UM ID A ESSE CLIENTE
        object.id = this.gerarId(rota)

        //ARMAZENA NA PROPRIEDADE TEMPORÁRIA
        this.db[rota].push(object)

        //ENVIA PARA O LOCALSTORAGE PARA SER ARMAZENADO DE FORMA PERMANENTE DENTRO DO NAVEGADOR
        this.setLocalStorage()
        
    }

    //MÉTODO PARA RETORNAR TODOS OS DADOS
    static get(rota){
        return this.db[rota]
    }

    //MÉTODO PARA SALVAR NO LOCALSTORAGE
    static setLocalStorage(){

        //TRANSFORMANDO OBJETOS EM JSON => NO CASO AS PROPRIEDADES DA CLASSE
        const dbFormatado  =  JSON.stringify(this.db)

        //1 - CHAMA A CLASSE NATIVA LOCALSTORAGE
        //2 - ATRIBUI UM NOME (KEY)
        //3 - PARA OS DADOS TRATADOS PARA SEREM ARMAZENADOS
        localStorage.setItem('db_app_cadastro', dbFormatado)

    }

    //MÉTODO PARA RECUPERAR DADOS DO LOCAL LOCALSTORAGE
    static getLocalStorage(){

        //RECUPERAR OS DADOS ARMAZENADO, UTILIZANDO O NOME DA KEY
        const dbJson = localStorage.getItem('db_app_cadastro')
        
        //VERIFICA SE A MEMÓRIA NÃO ESTÁ VAZIO OU NULL
        if(typeof dbJson === "string"){
            
            //TRANSFORMA EM OBJETO JAVASCRIPT
            const dbFormatado   =  JSON.parse(dbJson)

            //ATUALIZA A PROPRIEDADE LOCAL DA CLASSE
            this.db = dbFormatado 

            //RETORNA A PROPRIEDADE LOCAL DA CLASSE DE FORMA ATUALIZADA
            return this.db

        }else{

            //CASO O LOCALSTORAGE ESTEJA VAZIO RETORNA UM ARRAY VAZIO
            return []
        
        }
       
    }

    //MÉTODO RESPONSÁVEL POR GERAR ID PARA OS DADOS
    static gerarId(rota){
        
        let maxId = 0
        this.get(rota).forEach((dado)=>{
            if(dado.id > maxId){
                maxId = dado.id
            }
        })

        return maxId + 1
    }

    //INICIALIZANDO BANCO DE DADOS
    static inicializandoBancoDados(){
        this.getLocalStorage()
    }
}

export {BancoDados}
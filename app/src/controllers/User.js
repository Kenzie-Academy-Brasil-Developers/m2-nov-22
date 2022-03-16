

class User {

    static API_URL = "https://api-blog-m2.herokuapp.com/user"

    static infoUsuario = {
        autenticacao:{},
        informacoes:{}
    }

    static async registrar(path, data){

        fetch(`${this.API_URL}${path}`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body":JSON.stringify(data)
        })
        .then((response) => response)

    }

    static async login(path, data){

        const response = await fetch(`${this.API_URL}${path}`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body":JSON.stringify(data)
        })

        const responseData = await response.json()
        this.infoUsuario.autenticacao = {...responseData}

        
        this.pegarInfoUsuario()

    }

    static async pegarInfoUsuario(){

       
        const {autenticacao:{userId, token}} = this.infoUsuario
      
        const response = await fetch(`${this.API_URL}/${userId}`, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json",
                "Authorization":`Bearer ${token}` 
            }
        })

        const responseData = await response.json()
        return responseData
    }
    
}

export {User}
export class Api {

    //CONFIG ROTA
    static ROTA = "http://localhost:3000"

    //MÉTODO GET/CLIENTES
    static async get(path){

        //https://app-cobrancas.herokuapp.com/clientes
        let response = await fetch(`${this.ROTA}${path}`)
        let data     = await response.json()
        
        return data

    }

     //MÉTODO POST/CLIENTES/{}
    static async post(path, data){
        
        //https://app-cobrancas.herokuapp.com/clientes
        let response = await fetch(`${this.ROTA}${path}`, {

            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data)

        })
       
        return response

    }

    static async delete(path, id){
       
        let response = await fetch(`${this.ROTA}${path}/${id}`, {
            method:"delete",
        })

        return response
       
    }

    //MÉTODO POST/CLIENTES/{}
    static async atualizar(path, id, data){
        
        let response = await fetch(`${this.ROTA}${path}/${id}`, {

            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data)

        })
     
        return response

    }

} 




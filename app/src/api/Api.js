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
        console.log(response.status)
        return response

    }

} 
import { Api } from "./../src/api/Api.js";
import { Interface } from "./models/Interface.js";




//CLASS API 
//API.GET("/CLIENTES") => [{}]
const clientes = await Api.get("/clientes")
console.log(clientes)

Interface.listarClientes(clientes)



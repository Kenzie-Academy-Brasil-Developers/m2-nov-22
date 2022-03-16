import { User } from "./controllers/User.js";
import { Post } from "./controllers/Post.js";

// const responseRegistro = await User.registrar("/register", {
//     "username": "hudsonHC",
//     "email": "hudson@gmail.com",
//     "avatarUrl": "https://github.com/phmc99.png",
//     "password": "1234"
// })


const responseRegistro = await User.login("/login", {
    "email": "hudson@gmail.com",
    "password": "1234"
})

// const tokenUser = User.infoUsuario.autenticacao.token
// Post.registrar({
//     "content": "Esse é um exemplo de publicação para o blog do M4 Teste."
// },tokenUser)



 
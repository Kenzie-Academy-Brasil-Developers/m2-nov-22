
// class Produtos {

//     static 
//     static async

// }
// const statusServer = true
// function  getProdutos(){

//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(statusServer){
//                 resolve([{produto:"camiseta"},{produto:"camiseta"},{produto:"camiseta"},{produto:"camiseta"},{produto:"camiseta"}])
//             }else{

//                 reject("Error 404")                
//             }
//         }, 500)
//     })

// }


// async function listarProdutos(){

//     const produtos = await getProdutos()
//     console.log(produtos)
// }

// console.log(listarProdutos())



//GET 
let posts = []
async function getPosts(){

    const response = await fetch("https://kenzie.com.br/blog/wp-json/wp/v2/posts/")
    const data     = await response.json()
    
    
    data.forEach(post => {
        const titulo = post.title.rendered
        const link = post.guid.rendered
        template(titulo,link)
       
    });

    return data

}

 getPosts()


 function template(titulo,link){

    const li = document.createElement("li")
    li.innerHTML = `
    <a href="${link}" target="_blank">    
        <h2>${titulo}</h2>
    </a>  

    `
    document.querySelector("body").appendChild(li)
 }



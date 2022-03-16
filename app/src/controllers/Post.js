class Post {

    static API_URL = "https://api-blog-m2.herokuapp.com/post"

    static async registrar(data, token){

        fetch(`${this.API_URL}`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` 
            },
            "body":JSON.stringify(data)
        })
        .then((response) => console.log(response))

    }

}

export {Post} 
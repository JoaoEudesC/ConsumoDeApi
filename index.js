
//selecionando elementos

let botao = document.getElementById("botao")

const url = `https://reqres.in/api/users?page=2`


const options ={
    method:"get",
    mode:"cors",
    cache:"default"
    
}



// pegando divs de cada usuario


let user1 = document.getElementById("user1")
let user2 = document.getElementById("user2")
let user3 = document.getElementById("user3")
let user4 = document.getElementById("user4")
let user5 = document.getElementById("user5")
let user6 = document.getElementById("user6")


//pegando imagens de cada usuario


let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")
let img4 = document.getElementById("img4")
let img5 = document.getElementById("img5")
let img6 = document.getElementById("img6")



//pegando nome subtitulo das divs


let subtitulo1  = document.getElementById("subtitulo1")
let subtitulo2  = document.getElementById("subtitulo2")
let subtitulo3  = document.getElementById("subtitulo3")
let subtitulo4  = document.getElementById("subtitulo4")
let subtitulo5  = document.getElementById("subtitulo5")
let subtitulo6  = document.getElementById("subtitulo6")








// realizano funçao para pegar api



botao.addEventListener("click" , showUsers)

function showUsers(){
    

    
    subtitulo1.classList.add("sumir")
    subtitulo2.classList.add("sumir")
    subtitulo3.classList.add("sumir")
    subtitulo4.classList.add("sumir")
    subtitulo5.classList.add("sumir")
    subtitulo6.classList.add("sumir")
    


    fetch(url , options)

    .then(response=>{
        response.json()

        .then(data=>{
            console.log(data)
            img1.src = data['data']['0']['avatar']
            

            img2.src = data['data']['1']['avatar']


            img3.src = data['data']['2']['avatar']
            
            
            img4.src = data['data']['3']['avatar']
            

            img5.src = data['data']['4']['avatar']
            

            img6.src = data['data']['5']['avatar']
            
        })
    })

    .catch(e=>{
        console.log("grave erro " + e)
    })
}
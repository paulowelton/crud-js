let main = document.querySelector(".create")

let create = document.getElementById("create").addEventListener("click",()=>{
    main.style.marginLeft = "0%"
})
let read = document.getElementById("read").addEventListener("click",()=>{
    main.style.marginLeft = "-25%"
})
let update = document.getElementById("update").addEventListener("click",()=>{
    main.style.marginLeft = "-50%"
})
let delet = document.getElementById("delete").addEventListener("click",()=>{
    main.style.marginLeft = "-75%"
})

let numAluno = 0

let container_r = document.querySelector(".container-r")
let container_d = document.querySelector(".container-d")
let nome

let idade
let escolaridade
let curso
const enviar = document.querySelector(".enviar").addEventListener("click",()=>{
    if(numAluno >= 5){
        alert("limite de registros atingidos :(")
        return
    }
    numAluno++
    //create
    nome = document.getElementById("nome").value
    idade = document.getElementById("idade").value
    escolaridade = document.getElementById("escolaridade").value
    curso = document.getElementById("curso").value
    //read
    let p = document.createElement("p")
    let div = document.createElement("div")
    div.setAttribute("class","div-value-container-r")
    p.innerHTML = `Aluno: ${numAluno} Nome: ${nome} Idade: ${idade} Escolaridade: ${escolaridade} Curso: ${curso}`
    div.appendChild(p)
    container_r.appendChild(div)

    document.getElementById("nome").value = ""
    document.getElementById("idade").value = ""
    document.getElementById("escolaridade").value = ""
    document.getElementById("curso").value = ""

    //delete
    let clear = document.createElement("div")
    clear.setAttribute("class","clear")
    clear.innerHTML = "X"
    let teste = document.createElement("div")
    teste.appendChild(div.cloneNode(true))
    container_d.appendChild(teste)
    container_d.appendChild(clear)
    clear.addEventListener("click",()=>{
        numAluno--
        container_r.removeChild(div)
        container_d.removeChild(teste)
        container_d.removeChild(clear)
    })

    //update!
    
    
})
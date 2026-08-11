const h1 = document.querySelector("h1")
const botao = document.querySelector("button")
const fundo = document.querySelector("body")

botao.addEventListener("click", mudarCor)

function mudarCor() {
    fundo.classList.add("mudar-fundo")
    h1.classList.add("mudar-h1")
}
const botao = document.querySelector("button")
const fundo = document.querySelector("body")

botao.addEventListener("click", mudarCor)

function mudarCor() {
    fundo.classList.toggle("mudar-fundo")
}
const avaliacao = document.querySelector('.avaliar')
const agradecimento = document.querySelector('.agradecimento')
const btnSubmit = document.getElementById('btn-submit')
const nota = document.getElementById('nota')
const btn = document.querySelectorAll('.btn')

btnSubmit.addEventListener('click', () => {
    agradecimento.classList.remove('hidden')
    avaliacao.classList.add('hidden')
})

btn.forEach(n => {
    n.addEventListener('click', () => {
        console.log(n.innerHTML)
        nota.innerHTML = n.innerHTML
    })
})
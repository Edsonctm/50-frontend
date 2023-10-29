const paineis = document.querySelectorAll('.painel')
paineis.forEach(painel => {
    painel.addEventListener('click', () => {
        if (painel.classList.contains('ativo')) abrirLink(painel)
        removeActiveClasses()
        painel.classList.add('ativo')
    })
})

function removeActiveClasses(){
    paineis.forEach(painel => {
        painel.classList.remove('ativo')
    })
}

function abrirLink(painel) {
    const url = 'https://google.com/search?q='
    let alvo = painel.querySelector('h3').textContent
    alvo = alvo.substring(0, alvo.indexOf('/'))
    window.open(url+alvo)
}
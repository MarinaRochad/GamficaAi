let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")


function abreFechaMenu() {

    //Menu Fechado - tem a classe menu fechado
    //Menu aberto - nao tem a classe menu fechado 

    //se o menu contem a classe menu-fechado
    if (menu.classList.contains("menu-fechado")) {
        //abrir o menu- tirar a classe menu-fechado
        menu.classList.remove("menu-fechado")

        //esconder icone barras
        iconeBarras.style.display = "none"

        // mostrar o icone do x
        iconeX.style.display = "inline"

    } else {
        //fechar o menu- adicionar a classe menu-fechado
        menu.classList.add("menu-fechado")

        // esconder icone x
        iconeX.style.display = "none"

        //mostrar o icone barras 
        iconeBarras.style.display = "inline"

    }

}

onresize = () => {
    //abrir o menu- tirar a classe menu-fechado
    menu.classList.remove("menu-fechado")

    //esconder icone barras
    iconeBarras.style.display = "none"

    // mostrar o icone do x
    iconeX.style.display = "inline"

}


//carrossel
let banner = document.querySelector(".banner")


//let slides = [0, 1, 2]
let slides = [
    "primeiro-banner",
    "segundo-banner",
    "terceiro-banner"
]

//0=primeiro banner
let slideAtual = 0

banner.classList.add(slides[slideAtual])

function mostrarProximoSlide() {
    // remover o slide anterior
    banner.classList.remove(slides[slideAtual])

    //somar 1 na variavel slideAtual
    slideAtual++

    //mostrar slide de acordo com o slideAtual
    banner.classList.add(slides[slideAtual])
}

function mostrarSlideAnterior() {
    // Remover o slide anterior
    banner.classList.remove(slides[slideAtual])

    if (slideAtual > 0) {
        // Subtrair 1 na variavel slideAtual
        slideAtual--
    } else {
        // Voltar para o ultimo slide
        slideAtual = 2
    }

    // Mostrar slide de acordo com o slide atual
    banner.classList.add(slides[slideAtual])
}

function selecionarSlide(indiceSlide) {
    // Remove o slide atual
    banner.classList.remove(slides[slideAtual])

    // Atualiza a variavel com o indice de slide selecionado
    slideAtual = indiceSlide

    // Mostra o slide selecionado e salvo na variavel slideAtual
    banner.classList.add(slides[slideAtual])
}


// Carregamento dinamico dos cases
let listaCases = [
    

]

function renderizarCases() {
    //Encontrar o elemento para inserir os cards
    let containerCards = document.querySelector(".container-cards")

    //variavel para guardar o html dos cases montados 
    let template = ""
    //Para cada case da listaCases
    listaCases.forEach(cardCase => {
        //Montar o html do card, passando os atributos do case 
        template += `<div class="card">
        <img src=${ cardCase.imagem } alt="">
        <p> ${ cardCase.descricao }</p>
        <button>Ver mais</button>
      </div>`


    })




    //Inserir html dos cases montados no elemento container-cards
    containerCards.innerHTML = template 
}
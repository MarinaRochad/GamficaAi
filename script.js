let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")


function abreFechaMenu() {
    
    //Menu Fechado - tem a classe menu fechado
    //Menu aberto - nao tem a classe menu fechado 

    //se o menu contem a classe menu-fechado
    if (menu.classList.contains("menu-fechado")){
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

function mostrarProximoSlide(){
    // remover o slide anterior
    banner.classList.remove(slides[slideAtual])

    //somar 1 na variavel slideAtual
    slideAtual++

    //mostrar slide de acordo com o slideAtual
    banner.classList.add(slides[slideAtual])
}
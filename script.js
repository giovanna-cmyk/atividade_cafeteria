const lista = document.queryseSelector(".caixa-cards")

const cafe = [

    {
        nome: "Expresso",
        descricao: "Café concentrado e aromático",
        preco: "$3.50",
        img: "assets/img/photo-1645445644664-8f44112f334c.jpg"
    },


    {
        nome: "Capuccino",
        descricao: "Expresso con leche vaporizada y espuma",
        preco: "$4.50",
        img: "assets/produtos/produto02.png"
    },

    {
        nome: "Café helado",
        descricao: "Rfrescante cfé frio con hielo",
        preco: "$5.00",
        img: "assets/produtos/produto03.png"
    }

]

const bolos = [
    {
        nome: "Pastel de chocolate",
        descricao: "Biscoito suave com cobertura de chocolate",
        preco: "$4.00",
        img: "assets/produtos/bolo1.png"
    },

    {
        nome: "Pastel de fresa",
        descricao: "Pastel com crema dulce y fresas frescas",
        preco: "$4.50",
        img: "assets/produtos/bolo2.pnj"
    },

    {
        nome: "Pastel de vanilla",
        descricao: "Classico pastel esponjoo de vanilla",
        preco: "$3.80",
        img: "assets/produtos/bolo3.pnj"
    },
]


function mostrarProdutos(produtos) {

    lista.innerHTML = ""

    produtos.forEach(produtos => {
        lista.innerHTML += `
        
<div class="card">

<div class="caixa-img-cards"><img class="img-cards"
src="${produtos.img}" alt="">
</div>
 <div class="caixa-texto-card">

 <p class="titulo-card">${produtos.nome}</p>

 <p class="subtitulo-card">${produtos.descricao}</p>

 <div class="preco-btn-card">

<p class="preco-card">${produtos.preco}</p>

 <button class="btn-card"> <i class="bi bi-cart2 card-btn"></i> Adicionar </button>

 </div>

 </div>
        `
    })
   
}

document.querySelector(".btn01-produtos").addEventListener("click", () => {
mostrarProdutos(cafe)
})

document.querySelector(".btn02-produtos").addEventListener("click", () => {
mostrarProdutos(bolos)
})

document.querySelector(".btn03-produtos").addEventListener("click", () => {

mostrarProdutos(comidas)
})

/* produtos iniciais */
mostrarProdutos(cafe)
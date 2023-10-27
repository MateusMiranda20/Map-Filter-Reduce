const list = document.querySelector('ul')
const todosLi = document.querySelector('.mostraTodos')
const preço = document.querySelector('.newPreço') // Map
const somaTotal = document.querySelector('.soma') // Reduce 
const filtrar = document.querySelector('.filtro')
let myList = ''

function all(productsArray) {
    myList = ''
    productsArray.forEach((products) => {
        myList += `
             <li>
                 <img src=${products.src}>
                 <p>${products.name}</p>
                 <p>${products.price}</p>
             </li>
        `
    });

    list.innerHTML = myList
}


function desconto() {
    const novoPreço = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))

    all(novoPreço)
}

function somar() {
    const totalSoma = menuOptions.reduce((acc, valorIncial) => acc + valorIncial.price, 0)

    list.innerHTML =
        `
       <li>
           <p>O valor totais dos itens é R$ ${totalSoma}</p>
       </li>

   `;
}

function filtroVegetariano() {
    const filtros = menuOptions.filter((comida) => comida.vegan)

    all(filtros)
}


todosLi.addEventListener('click', () => all(menuOptions))
preço.addEventListener('click', desconto)
somaTotal.addEventListener('click', somar)
filtrar.addEventListener('click', filtroVegetariano)



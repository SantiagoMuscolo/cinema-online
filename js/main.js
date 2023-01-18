let movies = []


fetch('../json/movies.json')
    .then((response) => response.json())
    .then((data) => moviesCard(data))

function moviesCard(data) {
    movies = data;
    const contenedor = document.getElementById(`container`)
    data.forEach((movies, index) => {
        let card = document.createElement(`div`)
        card.classList.add(`card`)
        card.innerHTML =
            `<div class="card" style="width: 18rem;">
                    <img src="${movies.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${movies.nombre}</h5>
                            <p class="card-text">${movies.descripcion}</p>
                            <a href="#" class="btn btn-primary" id= "botoncito" onclick = "addToCart(${index})">get your ticket</a>
                        </div>
                </div>`
        contenedor.appendChild(card);
    })
}

let cart = [];
let cartContainer = document.getElementById('cart');
const drawCart = () => {
    cartContainer.innerHTML = " ";

    if (cart.length > 0) {
        cart.forEach((movies, index) => {
            const modalCart = document.createElement('div');
            modalCart.innerHTML =
                `<div class= "contenedorCart">
                <img src="${movies.img}" class="img-cart" alt="...">
            <h5 class="nombre-cart">${movies.nombre}</h5>
            <div>Cantidad ${movies.quantity}</div>
            <button onclick= "removeMovie(${index})"><i class="fa-solid fa-trash"></i></button>
            </div>`
            cartContainer.appendChild(modalCart)
        })
        const finalizarLaCompra = document.createElement('div')
            finalizarLaCompra.innerHTML =
            '<button onclick="finalizarCompra()" class="finalizar">Finalizar compra</button>'
            cartContainer.appendChild(finalizarLaCompra)
    }
}


function addToCart(index) {
    const indexCart = cart.findIndex(e => {
        return e.id === movies[index].id
    })
    if (indexCart === -1) {
        let addProduct = movies[index];
        addProduct.quantity = 1;
        cart.push(addProduct);
        drawCart();
    } else {
        cart[indexCart].quantity += 1;
        drawCart() 
        console.log(cart);
    }
}

const guardarStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart))
}

const removeMovie = (index) => {
    cart.splice((index, -1));
    drawCart();
    guardarStorage(cart);
}

const finalizarCompra = () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Gracias por su compra',
        showConfirmButton: false,
        timer: 3000
    })
}

console.log(cart);
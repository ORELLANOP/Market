// Array de productos
const productos = [
    {
        id: 1,
        imgUrl: './img/cereza.jpg',
        nombre: 'Cereza',
        precio: 60
    },
    {
        id: 2,
        imgUrl: './img/limon.jpg',
        nombre: 'Limón',
        precio: 50
    },
    {
        id: 3,
        imgUrl: './img/ajo.jpg',
        nombre: 'Ajo',
        precio: 250
    },
    {
        id: 4,
        imgUrl: './img/cebollas.jpg',
        nombre: 'Cebolla',
        precio: 90
    },
    {
        id: 5,
        imgUrl: './img/cafe.jpg',
        nombre: 'Café',
        precio: 120
    },
    {
        id: 6,
        imgUrl: './img/huevos.jpg',
        nombre: 'Huevos',
        precio: 70
    },
    {
        id: 7,
        imgUrl: './img/banana.jpg',
        nombre: 'Bananas',
        precio: 200
    },
    {
        id: 8,
        imgUrl: './img/remolacha.jpg',
        nombre: 'Remolacha',
        precio: 300
    }
]

let carritoDeCompras = [];
const listaProductos = document.querySelector('.listaProductos');
let pablo = 0;


function crearLista(producto) {


    const card = document.createElement('section');
    card.className = 'card';


    const image = document.createElement('img');
    image.src = producto.imgUrl;
    image.alt = 'foto de ' + producto.nombre;


    const infoProducto = document.createElement('div');
    infoProducto.className = 'infoProducto';
    
    const titulo = document.createElement('h2');
    const titulotTexto = document.createTextNode(producto.nombre);
    titulo.appendChild(titulotTexto);


    const precio = document.createElement('p');
    const precioTexto = document.createTextNode('$ ' + producto.precio);
    precio.appendChild(precioTexto);


    infoProducto.append(titulo, precio);
    


    const botonAgregar = document.createElement('div');
    const agregar = document.createElement('button');
    const agregarTexto = document.createTextNode('Agregar al Carrito');
    agregar.appendChild(agregarTexto);
    botonAgregar.appendChild(agregar);

    
    botonAgregar.className = 'agregarAlCarrito';

    botonAgregar.addEventListener('click', () => {

        carritoDeCompras.pop(
            {
                'id': producto.id,
                'imgUrl': producto.imgUrl,
                'nombre': producto.nombre,
                'precio': producto.precio
            });

        carritoDeCompras.push(
            {
                'id': producto.id,
                'imgUrl': producto.imgUrl,
                'nombre': producto.nombre,
                'precio': producto.precio
            });
        carritoDeCompras.forEach((item) => {
           crearCarrito(item);
            pablo += item.precio;
        });
        console.log(carritoDeCompras);
    });

    card.append(image, infoProducto, botonAgregar);
    listaProductos.appendChild(card);
}


productos.forEach((producto) => {
    crearLista(producto);
})

// function eliminarCard(card) {
//     card.id = 'seleccionado';
//     let seleccionado = document.getElementById('seleccionado');
//     seleccionado.remove(seleccionado);
// }

let total = 0;
function crearCarrito(e) {
    const containerProductos = document.querySelector('.containerProductos');
    const productoCarrito = document.createElement('div');
    productoCarrito.className = 'productoCarrito';

    const img = document.createElement('img');
    img.src = e.imgUrl;

    const titulo = document.createElement('h3');
    const tituloTexto = document.createTextNode(e.nombre);
    titulo.appendChild(tituloTexto);

    const precio = document.createElement('p');
    const precioTexto = document.createTextNode('$ ' + e.precio)
    precio.appendChild(precioTexto);
    // total += e.precio;

    const remove = document.createElement('div');
    remove.className = 'remove';
    const icon = document.createElement('i');
    icon.className = 'far fa-times-circle';
    remove.appendChild(icon);

    remove.addEventListener('click', removeDelCarrito);

    productoCarrito.append(img, titulo, precio, remove);
    containerProductos.append(productoCarrito);

}

function realizarCompra() {
    carritoDeCompras.forEach(item => {
        total += item.precio;
    });
    let precio = document.querySelector('.precioTotal');
    precio.innerHTML = pablo;

}

function removeDelCarrito() {
    carritoDeCompras.forEach()
}
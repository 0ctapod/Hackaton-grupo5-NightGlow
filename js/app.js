"use strict";

// ============================================================
// NIGHTGLOW - APP JS
// ------------------------------------------------------------
// Este archivo controla toda la parte dinámica de la landing:
// 1. Renderiza el catálogo desde JavaScript.
// 2. Permite filtrar productos por categoría.
// 3. Maneja el carrito de compras.
// 4. Guarda y recupera el carrito usando localStorage.
// ============================================================

// ------------------------------
// 1) REFERENCIAS DEL DOM
// ------------------------------
// Guardamos los elementos del HTML que vamos a actualizar desde JS.
const contenedorProductos = document.getElementById("contenedor-productos");
const listaCarrito = document.getElementById("listCarrito");
const resumenCarrito = document.getElementById("resumenCarrito");
const botonesFiltro = document.querySelectorAll(".btn-filtro");

// ------------------------------
// 2) CONFIGURACION GENERAL
// ------------------------------
// Esta constante define el nombre de la clave con la que vamos a guardar
// la información del carrito en localStorage.
const CLAVE_CARRITO = "nightglow_carrito";

// ------------------------------
// 3) DATOS DEL CATÁLOGO
// ------------------------------
// El requisito del taller pide que el catálogo se renderice desde un
// array de objetos JavaScript. Por eso aquí concentramos toda la data.
const productos = [
    {
        id: 1,
        nombre: "Margarita Glow",
        categoria: "cocktail",
        precio: 20000,
        imagen: "img/margarita.jpg",
        descripcion: "Tequila, limón y licor de naranja."
    },
    {
        id: 2,
        nombre: "Mojito Night",
        categoria: "cocktail",
        precio: 18000,
        imagen: "img/mojito.jpg",
        descripcion: "Ron blanco, hierbabuena y soda."
    },
    {
        id: 3,
        nombre: "Cosmopolitan Neon",
        categoria: "cocktail",
        precio: 22000,
        imagen: "img/cosmopolitan.jpg",
        descripcion: "Vodka, cranberry y limón."
    },
    {
        id: 4,
        nombre: "Piña Colada Moon",
        categoria: "cocktail",
        precio: 25000,
        imagen: "img/pinacolada.jpg",
        descripcion: "Ron, piña y crema de coco."
    },
    {
        id: 5,
        nombre: "Tequila Sunrise",
        categoria: "cocktail",
        precio: 24000,
        imagen: "img/sunrise.jpg",
        descripcion: "Tequila, naranja y granadina."
    },
    {
        id: 6,
        nombre: "Blue Lagoon",
        categoria: "cocktail",
        precio: 23000,
        imagen: "img/bluelagoon.jpg",
        descripcion: "Vodka, curaçao azul y limón."
    },
    {
        id: 7,
        nombre: "Sunset Tropical",
        categoria: "mocktail",
        precio: 18000,
        imagen: "img/sunset.jpg",
        descripcion: "Mango, naranja y granadina."
    },
    {
        id: 8,
        nombre: "Green Fresh",
        categoria: "mocktail",
        precio: 14000,
        imagen: "img/greenfresh.jpg",
        descripcion: "Limón, pepino y soda."
    },
    {
        id: 9,
        nombre: "Berry Glow",
        categoria: "mocktail",
        precio: 15000,
        imagen: "img/berry.jpg",
        descripcion: "Fresa, mora y limón."
    },
    {
        id: 10,
        nombre: "Citrus Splash",
        categoria: "mocktail",
        precio: 15000,
        imagen: "img/citrus.jpg",
        descripcion: "Naranja, limón y soda."
    },
    {
        id: 11,
        nombre: "Passion Fruit Dream",
        categoria: "mocktail",
        precio: 14000,
        imagen: "img/passion.jpg",
        descripcion: "Maracuyá y hielo triturado."
    },
    {
        id: 12,
        nombre: "Pink Lemonade",
        categoria: "mocktail",
        precio: 13000,
        imagen: "img/pinklemonade.jpg",
        descripcion: "Limón rosado y soda."
    },
    {
        id: 13,
        nombre: "Nachos NightGlow",
        categoria: "snack",
        precio: 16000,
        imagen: "img/nachos.jpg",
        descripcion: "Nachos con queso y guacamole."
    },
    {
        id: 14,
        nombre: "Mini Burgers",
        categoria: "snack",
        precio: 21000,
        imagen: "img/miniburgers.jpg",
        descripcion: "3 pequeñas hamburguesas con queso."
    },
    {
        id: 15,
        nombre: "Papas Bravas",
        categoria: "snack",
        precio: 18000,
        imagen: "img/papas.jpg",
        descripcion: "Papas fritas con salsa especial."
    },
    {
        id: 16,
        nombre: "Alitas BBQ",
        categoria: "snack",
        precio: 28000,
        imagen: "img/alitas.jpg",
        descripcion: "6 alitas con salsa barbacoa."
    },
    {
        id: 17,
        nombre: "Dedos de Queso",
        categoria: "snack",
        precio: 20000,
        imagen: "img/queso.jpg",
        descripcion: "Mozzarella sticks crujientes."
    },
    {
        id: 18,
        nombre: "Tacos Mini",
        categoria: "snack",
        precio: 25000,
        imagen: "img/tacos.jpg",
        descripcion: "3 tacos pequeños de pollo o carne."
    }
];

// ------------------------------
// 4) ESTADO DE LA APLICACION
// ------------------------------
// "carrito" va guardando los productos seleccionados.
// En esta versión el carrito maneja cantidad por producto.
let carrito = [];

// "categoriaActiva" nos ayuda a saber qué filtro está seleccionado.
let categoriaActiva = "all";

// ------------------------------
// 5) FUNCIONES DE UTILIDAD
// ------------------------------

/**
 * Convierte un número en formato de moneda colombiana.
 * Ejemplo: 20000 -> $20.000
 */
function formatearPrecio(valor) {
    return `$${valor.toLocaleString("es-CO")}`;
}

/**
 * Busca un producto del catálogo por su id.
 */
function buscarProductoPorId(idProducto) {
    return productos.find((producto) => producto.id === idProducto);
}

/**
 * Guarda el carrito actual en localStorage.
 * localStorage solo almacena texto, por eso usamos JSON.stringify.
 */
function guardarCarrito() {
    localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
}

/**
 * Recupera el carrito guardado del navegador.
 * Si no existe información previa, devuelve un arreglo vacío.
 */
function cargarCarrito() {
    const carritoGuardado = localStorage.getItem(CLAVE_CARRITO);

    if (!carritoGuardado) {
        return [];
    }

    try {
        return JSON.parse(carritoGuardado);
    } catch (error) {
        console.error("No se pudo leer el carrito guardado:", error);
        return [];
    }
}

// ------------------------------
// 6) RENDER DEL CATALOGO
// ------------------------------

/**
 * Crea el HTML de una tarjeta de producto.
 * Esta función solo devuelve el contenido; no lo pinta todavía.
 */
function crearTarjetaProducto(producto) {
    return `
        <article class="tarjeta-producto">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <span class="precio-producto">${formatearPrecio(producto.precio)}</span>
            <button class="btn-agregar" data-id="${producto.id}">Agregar</button>
        </article>
    `;
}

/**
 * Renderiza los productos según la categoría activa.
 * Si la categoría es "all", muestra todo el catálogo.
 */
function renderProductos() {
    const productosFiltrados = categoriaActiva === "all"
        ? productos
        : productos.filter((producto) => producto.categoria === categoriaActiva);

    if (productosFiltrados.length === 0) {
        contenedorProductos.innerHTML = `
            <p class="mensaje-vacio">No hay productos disponibles para esta categoría.</p>
        `;
        return;
    }

    contenedorProductos.innerHTML = productosFiltrados
        .map((producto) => crearTarjetaProducto(producto))
        .join("");
}

// ------------------------------
// 7) LOGICA DEL CARRITO
// ------------------------------

/**
 * Agrega un producto al carrito.
 * Si el producto ya existe, aumenta su cantidad en lugar de duplicarlo.
 */
function agregarAlCarrito(idProducto) {
    const productoEncontrado = buscarProductoPorId(idProducto);

    if (!productoEncontrado) {
        return;
    }

    const itemExistente = carrito.find((item) => item.id === idProducto);

    if (itemExistente) {
        itemExistente.cantidad += 1;
    } else {
        carrito.push({
            id: productoEncontrado.id,
            nombre: productoEncontrado.nombre,
            precio: productoEncontrado.precio,
            imagen: productoEncontrado.imagen,
            cantidad: 1
        });
    }

    guardarCarrito();
    renderCarrito();
}

/**
 * Disminuye la cantidad de un producto en el carrito.
 * Si la cantidad llega a 0, elimina el producto completamente.
 */
function eliminarDelCarrito(idProducto) {
    const itemExistente = carrito.find((item) => item.id === idProducto);

    if (!itemExistente) {
        return;
    }

    itemExistente.cantidad -= 1;

    carrito = carrito.filter((item) => item.cantidad > 0);

    guardarCarrito();
    renderCarrito();
}

/**
 * Vacía todo el carrito de una sola vez.
 */
function vaciarCarrito() {
    carrito = [];
    guardarCarrito();
    renderCarrito();
}

// ------------------------------
// 8) CALCULOS DEL CARRITO
// ------------------------------

/**
 * Suma el valor total del carrito.
 * Multiplica precio por cantidad en cada producto agregado.
 */
function calcularTotal() {
    return carrito.reduce((acumulado, item) => acumulado + (item.precio * item.cantidad), 0);
}

/**
 * Calcula el total de unidades agregadas al carrito.
 */
function calcularCantidadItems() {
    return carrito.reduce((acumulado, item) => acumulado + item.cantidad, 0);
}

// ------------------------------
// 9) RENDER DEL CARRITO
// ------------------------------

/**
 * Crea el HTML de cada fila del carrito.
 */
function crearItemCarrito(item) {
    return `
        <article class="item-carrito">
            <img src="${item.imagen}" alt="${item.nombre}" class="item-carrito-imagen">

            <div class="item-carrito-info">
                <h3>${item.nombre}</h3>
                <p class="mb-1">Precio unitario: ${formatearPrecio(item.precio)}</p>
                <p class="mb-0">Cantidad: <strong>${item.cantidad}</strong></p>
            </div>

            <div class="item-carrito-acciones">
                <p class="item-carrito-subtotal mb-2">${formatearPrecio(item.precio * item.cantidad)}</p>
                <button class="btn-eliminar" data-id="${item.id}">Eliminar 1</button>
            </div>
        </article>
    `;
}

/**
 * Dibuja el carrito y su resumen en pantalla.
 */
function renderCarrito() {
    if (carrito.length === 0) {
        listaCarrito.innerHTML = `
            <div class="estado-vacio">
                <p class="mb-0">Tu carrito está vacío. Agrega productos desde el catálogo.</p>
            </div>
        `;

        resumenCarrito.innerHTML = `
            <div class="card-resumen">
                <h3>Resumen</h3>
                <p class="mb-2">Productos: 0</p>
                <p class="mb-0">Total: ${formatearPrecio(0)}</p>
            </div>
        `;
        return;
    }

    listaCarrito.innerHTML = carrito.map((item) => crearItemCarrito(item)).join("");

    resumenCarrito.innerHTML = `
        <div class="card-resumen">
            <h3>Resumen del pedido</h3>
            <p><strong>Productos:</strong> ${calcularCantidadItems()}</p>
            <p><strong>Total:</strong> ${formatearPrecio(calcularTotal())}</p>
            <button id="btnVaciarCarrito" class="btn-vaciar">Vaciar carrito</button>
        </div>
    `;

    const botonVaciarCarrito = document.getElementById("btnVaciarCarrito");
    botonVaciarCarrito.addEventListener("click", vaciarCarrito);
}

// ------------------------------
// 10) EVENTOS
// ------------------------------

/**
 * Maneja los clics sobre el catálogo usando delegación de eventos.
 * Esto evita asignar un listener a cada tarjeta por separado.
 */
contenedorProductos.addEventListener("click", (evento) => {
    const botonAgregar = evento.target.closest(".btn-agregar");

    if (!botonAgregar) {
        return;
    }

    const idProducto = Number(botonAgregar.dataset.id);
    agregarAlCarrito(idProducto);
});

/**
 * Maneja los clics sobre los botones de eliminar del carrito.
 */
listaCarrito.addEventListener("click", (evento) => {
    const botonEliminar = evento.target.closest(".btn-eliminar");

    if (!botonEliminar) {
        return;
    }

    const idProducto = Number(botonEliminar.dataset.id);
    eliminarDelCarrito(idProducto);
});

/**
 * Activa el filtro correspondiente y vuelve a dibujar el catálogo.
 */
botonesFiltro.forEach((boton) => {
    boton.addEventListener("click", () => {
        categoriaActiva = boton.dataset.category;

        botonesFiltro.forEach((item) => item.classList.remove("activo"));
        boton.classList.add("activo");

        renderProductos();
    });
});

// ------------------------------
// 11) INICIALIZACION DE LA APP
// ------------------------------

/**
 * Inicializa la aplicación:
 * - recupera el carrito guardado,
 * - dibuja el catálogo,
 * - dibuja el carrito.
 */
function inicializarApp() {
    carrito = cargarCarrito();
    renderProductos();
    renderCarrito();
}

// Arranque principal de la aplicación.
inicializarApp();

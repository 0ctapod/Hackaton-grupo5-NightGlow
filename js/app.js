
// ==============================
// 1) REFERENCIAS DEL DOM
// ==============================
// Aquí guardan los elementos del HTML que van a usar desde JS.
// Ejemplo: contenedor de productos, contenedor del carrito, total, etc.


// ==============================
// 2) DATOS DEL CATÁLOGO
// ==============================
// Array de objetos con los productos de NightGlow.
// Cada producto debería tener:
// id, nombre, precio, categoria, imagen, descripcion
class Producto {
    constructor(id, nombre, categoria, precio, imagen, descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }
}

const productos = [
    new Producto(1, "Margarita Glow", "Cocktail", 28000, "img/margarita.jpg", "Tequila, limón y licor de naranja con escarcha de sal."),
    new Producto(2, "Mojito Night", "Cocktail", 26000, "img/mojito.jpg", "Ron blanco, hierbabuena, limón y soda."),
    new Producto(3, "Cosmopolitan Neon", "Cocktail", 30000, "img/cosmopolitan.jpg", "Vodka, cranberry y limón."),
    new Producto(4, "Piña Colada Moon", "Cocktail", 29000, "img/pina.jpg", "Ron, piña y crema de coco."),
    new Producto(5, "Tequila Sunrise", "Cocktail", 27000, "img/tequila.jpg", "Tequila, jugo de naranja y granadina."),
    new Producto(6, "Blue Lagoon", "Cocktail", 29000, "img/blue.jpg", "Vodka, curaçao azul y limón."),
    new Producto(7, "Sunset Tropical", "Mocktails", 18000, "img/sunset.jpg", "Mango, naranja y granadina."),
    new Producto(8, "Green Fresh", "Mocktails", 17000, "img/green.jpg", "Limón, pepino y soda."),
    new Producto(9, "Berry Glow", "Mocktails", 19000, "img/berry.jpg", "Fresa, mora y limón."),
    new Producto(10, "Citrus Splash", "Mocktails", 17000, "img/citrus.jpg", "Naranja, limón y soda."),
    new Producto(11, "Passion Fruit Dream", "Mocktails", 18000, "img/passion.jpg", "Maracuyá y hielo triturado."),
    new Producto(12, "Pink Lemonade", "Mocktails", 16000, "img/pink.jpg", "Limón rosado y soda."),
    new Producto(13, "Nachos NightGlow", "Snack", 22000, "img/nachos.jpg", "Nachos con queso cheddar y guacamole."),
    new Producto(14, "Mini Burgers", "Snack", 24000, "img/mini.jpg", "Pequeñas hamburguesas con queso."),
    new Producto(15, "Papas Bravas", "Snack", 18000, "img/papas.jpg", "Papas fritas con salsa especial."),
    new Producto(16, "Alitas BBQ", "Snack", 26000, "img/alitas.jpg", "Alitas con salsa barbacoa."),
    new Producto(17, "Dedos de Queso", "Snack", 20000, "img/dedos.jpg", "Mozzarella sticks crujientes."),
    new Producto(18, "Tacos Mini", "Snack", 23000, "img/tacos.jpg", "Tacos pequeños de pollo o carne.")
];

// ==============================
// 3) ESTADO DE LA APLICACIÓN
// ==============================
// Variable carrito:
// - puede iniciar vacía
// - o cargarse desde localStorage al iniciar la app


// ==============================
// 4) FUNCIONES DE UTILIDAD
// ==============================

// Función para guardar carrito en localStorage
function guardarCarrito() {
  // convertir carrito a texto JSON
  // guardar con una clave
}

// Función para cargar carrito desde localStorage
function cargarCarrito() {
  // leer la clave guardada
  // si existe información válida, convertirla otra vez a array
  // si no existe, devolver carrito vacío
}


// ==============================
// 5) RENDER DEL CATÁLOGO
// ==============================

function renderProductos() {
  // limpiar contenedor de productos
  // recorrer array de productos
  // crear estructura visual de cada tarjeta
  // insertar en el HTML
  // conectar botones de agregar
}


// ==============================
// 6) LÓGICA DEL CARRITO
// ==============================

function agregarAlCarrito(idProducto) {
  // buscar producto por id
  // agregarlo al carrito
  // guardar carrito
  // volver a renderizar carrito
}

function eliminarDelCarrito(idProducto) {
  // encontrar el producto dentro del carrito
  // eliminarlo
  // guardar carrito
  // volver a renderizar carrito
}


// ==============================
// 7) RENDER DEL CARRITO
// ==============================

function renderCarrito() {
  // limpiar contenedor del carrito
  // validar si está vacío
  // si tiene productos:
  //   mostrar cada item
  //   agregar botón eliminar
  //   mostrar total o cantidad
}


// ==============================
// 8) CÁLCULOS OPCIONALES
// ==============================

function calcularTotal() {
  // recorrer carrito
  // sumar precios
  // devolver total
}

function calcularCantidadItems() {
  // devolver cantidad de productos agregados
}


// ==============================
// 9) INICIALIZACIÓN
// ==============================

function inicializarApp() {
  // cargar carrito guardado
  // renderizar productos
  // renderizar carrito
}


// ==============================
// 10) ARRANQUE DE LA APP
// ==============================

inicializarApp();
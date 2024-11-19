/* 1 Escribir una función que reciba un array de strings y devuelva un string concatenando todos sus valores

Ejemplo

Dado['hola', 'chau']

Retornar: 'holachau' */

const strings= ["hola", "vuela", "taza"];

function concatenarStrings(array) {
  return array.join("");
};

let resuntado = console.log(concatenarStrings(strings));

/* 2, Dados 2 array, devolver un array con todos los elementos que coinciden entre ellos

Ejemplo:

Array1: ['rojo', 'azul', 'amarillo']

Array2: ['blanco', 'negro', 'rojo']

Resultado: ['rojo'] */

const array1 = ["manzana", "naranja",  "banana"];
const array2 = ["durazno", "kiwi", "manzana", "naranja"];

function frutasRepetidas(array1, array2) {
  return array1.filter(elemento => array2.includes(elemento));
};

const resultado = console.log(frutasRepetidas(array1, array2));


/* 3 Dado el siguiente objeto
let carrito = {

    total: 10,
    productos: [
        {
            nombre: 'leche',
            precio: 2,
            unidades: 5
        }
    ]

}

completar la siguiente función para que agregue un nuevo producto al carrito y actualice su total
function agregarProducto(nombre, precio, unidades) {

Completar aca...

} */

    let carrito = {
      total: 10,
      productos: [
          {
              nombre: 'leche',
              precio: 2,
              unidades: 5
          }
      ]
  }


function agregarProducto(nombre, precio, unidades) {

  const nuevoProducto = { nombre, precio, unidades };
  carrito.productos.push(nuevoProducto);
  carrito.total += precio * unidades;
}

agregarProducto('cafe', 1.2, 4);
console.log(carrito);

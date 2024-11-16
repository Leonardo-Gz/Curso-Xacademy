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

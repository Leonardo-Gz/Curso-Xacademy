// Arrow Functions
// cunado es una linea la flecha => reemplaza la palabra clave Function y return.
let sumar = (num1, num2) => num1 + num2;

console.log(sumar(13, 12));

//Callback Functions
/* Es una funcion que se pasa como argumento a otra funcion y se ejecuta cuando la principal termine. Son comunes en eventos y llamadas asincronas como las solicitudes de Ajax y las operaciones de escritura y lectura de archivos.
Las funciones de retrollamada pueden ser declaradas como funciones separadas o pueden ser
definidas en línea como funciones anónimas. También pueden tomar argumentos adicionales
que se pasan como parámetros en la función principal.
*/

function sayHello(name, callback) {
  console.log("Hello, " + name + "!");
  callback();
}

function goodbye() {
  console.log("Goodbye!");
}

sayHello("John", goodbye);

//Ejemplo, cargar unaimagen desde un servidor y mostrarla despues de que se haya cargado.
/* function loadImage(url, callback) {
    const image = new image();
    image.src = url;

  image.onload = function() {
    callback(image);
  };
};

loadImage("image.jpg", function(image) {
  document.body.appendChild(image);
});
*/
// Ejemplo

const numbers = [1, 2, 3, 4, 5];
const parNumber = numbers.filter((number) => number % 2 === 0);

console.log(parNumber);

const suma = numbers.reduce(
  (accumulador, currentValue) => accumulador + currentValue
);

console.log(suma);

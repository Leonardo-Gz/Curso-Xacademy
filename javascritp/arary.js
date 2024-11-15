//ARRAY: es un objeto que almacena una lista de de valores.

const myArray = ["Jairo", "Leonardo", "Tomas"];

myArray.push("Walter");
myArray.unshift("Alan");

console.log(myArray);

console.log(myArray.length);

// pop: quita el ultimo elemento. shift: quita el primero. guardan el elemento borrado.
myArray.pop();
console.log(myArray);

//slice
const subArray = myArray.slice(0, 4);
console.log(subArray);

//Splice: elimina o agrega elementos, comenzando desde el indice undicado y opcionalmente indica el numero de elementos eliminados y los elementos a añadir.
const numeros = [0, 1, 2, 3, 4];
numeros.splice(2, 1);
console.log(numeros);
numeros.splice(1, 0, "hola", "mundo");
console.log(numeros);

//MAP: devuelve una array con el resulta de aplicar una funcion a cada elemento del array original.
const myDobleNumber = numeros.map(number => number * 2);
console.log(myDobleNumber);



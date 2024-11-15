// OBJECTS: Son una estructura de datos que se utiliza para almacenar y organizar informacion en forma de pores clave-valor(propirdad de un objeto: Nombre de Propiedad, Valor de Propiedad)

//hay 3 formas de clear objeptos: Objeto literal, Funcion Constructora, Clases.
/*
const propiedadDinamica = "dinamica";
const persona = {
    nombre: "Leonardo",
    edad: 25,
    ciudad: "Cordoba",
    direccion: {
        calle: "fructuoso rivera",
        numero: 105,
    },
    saludar() {
        console.log(`Hola mi nombres es ${this.nombre} y tengo ${this.edad} años.`)
    }
    "full-nombre": "Leonardo Gonzalez",
    [propiedadDinamica]: "dinamica",
};

persona.saludar();
console.log(persona.["full-nombre"]);
console.log(persona.[propiedadDinamica]);
*/

//FUNCION CONSTRUCTORA(this, new)
function persona(nombre, edad, ciudad) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;

    this.presentar (); {
        console.log(`Hola mi nombres es ${this.nombre} y tengo ${this.edad} años.`);
    };
}

const persona1 = new persona("Leonardo", 25, "Cordoba");
persona1.presentar();

//CLASS

class Persona {
    educacion = ["priamria", "secuandaria", "terciaria"];

    constructor(nombre, edad, ciudad) {
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    }

    saludar () {
        console.log(`Hola mi nombres es ${this.nombre} y tengo ${this.edad} años.`)
    };

    mostrarEducacion() {
        console.log(this.educacion);
    };
};

const persona2 = new Persona("Jairo", 26);
persona2.saludar();
persona2.mostrarEducacion();

class Estudiante extends Persona {
    constructor(nombre, edad, carrera) {
        super(nombre, edad);
        this.carrera = carrera;
    }

    estudiar() {
        console.log(`Estoy estudian ${this.carrera}.`)
    }
}

let estudiante1 = new Estudiante("Leonardo", 25, "Programacion");
estudiante1.saludar();
estudiante1.estudiar();



//Property Value Shorthand

let x = 10;
let y = 20;

const objet = {
    x,
    y,
    sumar () {console.log(x + y)},
};

console.log(objet);
objet.sumar();


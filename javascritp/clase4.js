//PROMESAS

const platos = ["milanesas con pure", "pizza", "azado"];

const mozo = {
    platoDelDia: "milanesas con pure",
    pedirPlato: function (plato) {
        //console.log("Se lepide un " + plato +" al mozo.")
        return new Promise((resolve, reject) => {
            if(plato === this.platoDelDia || platos.includes(plato)) {
                //console.log("La cocina esta preparando el plato...")
                setTimeout(() => {
                    resolve(plato);
                }, 3000);
            } else {
                //console.log("Pidiendo el palto a la cocian...")
                setTimeout(() => {
                    reject("Lo siento, no tenemos " + plato);
                }, 2000);
            };
        });
    },
};

const promesaComida = mozo.pedirPlato("milanesas con pure");

promesaComida
    .then((plato) => {
        console.log("Comiendo" + plato);
    })
    .catch((error) => {
        console.log(error);
    });
    .finally(() => {
        console.log("El cliente se va del restaurante");
    });

/* console.log("pido un plato de comida: " + "milanesas con pure");
promesaComida.then((plato) => {
    console.log("Comiendo" + plato);
}); */


//Crear una promesa

/* function callback(resolve, reject) {
};
const promise = new Promise(callback);
consolog.log(promise); */

function hacerCalculo(n) {
    return new Promise((resolve, reject) => {
        if(typeof n !== "numero") {
            reject("No me pasaste un numero");
        } else {
            resolve(`El numero ${n} aparece 100 veces.`)
        }
    });
}


//Funcion para login user
function login(usename, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usename === "lenardo77" && password === "34445658") {
                return resolve ({
                    id: 1,
                    username: "leomardo77",
                    name: "Leonardo",
                    lastname: "Gonzalez",
                });
            } else { 
                reject("User o Password invalido")
            }
        }, 1000);
    }) 
};

login("leonardo77", "3445568")
    .then(usuario => {
        console.log("El usuario se logio correcetamente ", usuario);
    })
    .catch(err => {
        alert(err);
    });
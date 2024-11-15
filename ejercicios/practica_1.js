// 1 Escribir un programa que, dada una edad, imprima en consola si la persona es mayor de 18 años y puede conducir.

/* let edad = prompt();

if (edad >= 18) {
  console.log("Esta persona es mayor de edad y puede conducir");
} else {
  console.log("Es menor de edad");
}; */

/* 2 Escribir un programa que, dada una nota (número), imprima en consola la calificación según la nota:

  0-3: Muy deficiente

  3-5: Insuficiente

  5-6: Suficiente

  6-7: Bien

  7-9: Notable

  9-10: Sobresaliente */

/*   const nota = parseFloat(prompt("Introduce una nota (0-10): "));

  if (nota < 0 || nota > 10) {
      console.log("Ingrese un número entre 0 y 10.");
  } else if (nota < 3) {
      console.log("Muy deficiente");
  } else if (nota < 5) {
      console.log("Insuficiente");
  } else if (nota < 6) {
      console.log("Suficiente");
  } else if (nota < 7) {
      console.log("Bien");
  } else if (nota < 9) {
      console.log("Notable");
  } else {
      console.log("Sobresaliente");
  } */

/* 3 Realizar un script que escriba una pirámide del 1 al 6 de la siguiente forma:

  1

  22

  333

  4444

  55555

  666666 */

for(let i = 1; i <= 6; i++){
  let fila = ("");
  for(let j = 1; j <= i; j++){
    fila+= i;
  };
  console.log(fila);
};


/* 4 Realizar un script que escriba una pirámide del 1 al 6 de la siguiente forma:
1

12

123

1234

12345

123456 */

for(let i = 1; i <= 6; i++){
  let fila = ("");
  for(let j = 1; j <= i; j++){
    fila+= j;
  };
  console.log(fila);
};

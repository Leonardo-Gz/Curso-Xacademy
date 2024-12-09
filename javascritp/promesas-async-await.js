/* Promesas
Las promesas son una forma de manejar tareas asíncronas en JavaScript. Una promesa es un
objeto que representa el resultado de una tarea que puede tardar algún tiempo en completarse.
Tienen tres estados posibles:
● Pendiente: La tarea aún no se ha completado.
● Cumplida: La tarea se ha completado satisfactoriamente.
● Rechazada: La tarea ha fallado y no se ha completado satisfactoriamente.
Se utilizan para realizar tareas asíncronas y devolver un resultado cuando se completa la tarea. En lugar de bloquear el hilo de ejecución mientras espera a que se complete
la tarea, la promesa se devolverá inmediatamente y se ejecutará una vez que se complete la
tarea */
const promesa = new Promise((resolve, reject) => {
  // Hacer alguna tarea asíncrona, como una petición HTTP
  // Cuando se complete la tarea, llamar a resolve() si es
  exitoso o a reject() si falla.
  });
  // Luego se puede utilizar el método then() para manejar la
  promesa cumplida
  promesa.then((resultado) => {
  // Hacer algo con el resultado
  }).catch((error) => {
  // Manejar el error
  });

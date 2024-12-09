//MANEJO DE ERRORES
function dividir(n1, n2) {
  if (n2 === 0) {
    throw new Error("No se puede dividir por cero");
  }
  return n1 / n2;
}

try {
  console.log("El resuntado es", dividir(6, 0));
} catch (error) {
  alert(error.message);
} finally {
  console.log("console en finally");
}

console.log("console");

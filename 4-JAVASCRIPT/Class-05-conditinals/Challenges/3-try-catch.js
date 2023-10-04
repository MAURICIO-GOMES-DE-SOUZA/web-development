function runApplication() {
  return "runniing...";
}

try {
  //tentar
  document.write(runApplication());
} catch (error) {
  //menssage de erro.   hoisting
  // console.log(error);
  console.error(error);
} finally {
  //executar de qualqur forma.
  console.log("Sempre será executado!!!");
}

document.write("Application is live...");

function divideNumbers(num1, num2) {
    if (num2 == 0) {
        throw new Error("Não é possível dividir por zero!")
    }
  return num1 / num2;
}

console.log(divideNumbers(6, 0));

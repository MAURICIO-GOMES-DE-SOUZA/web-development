// ⚠Desafio 12

// Crie um programa que converta a temperatura Celsius ou Fahrenheit
// A temperatura de entrada e de saída deve conter a letra de referência ('C' ou 'F')
// O algoritmo deve ser capaz de interpretar o valor passado e converter para o outro (Ex: 10C = 50F)
// Deve funcionar com espaços, letras minúsculas e tratar dados inválidos (Throw, Try e Catch).

// C = (F - 32) * 5/9
// F = C * 9/5 + 32

function degreeCovert(degree) {
  const degreeAux = degree.split("").join("");
  const arrayDegree = Array.from(degreeAux);
  const scaleDegree = arrayDegree.pop().toUpperCase();
  const newDegree = Number(arrayDegree.join(""));
if (isNaN(newDegree)) {
    throw new Error("Valor inválido")
}
function convertToFahrenheit(){
    return (newDegree * 9) / 5+32;
}    

function converFahrenheitToCelcius(){
    return ((newDegree - 32) * 5) / 9;
}    
switch (scaleDegree) {
    case "C":
        return convertToFahrenheit() + "F";
        case "F":
        return converFahrenheitToCelcius() + "C"
        
    default:
        throw new Error("Escla nao identficada!")
        break;
}

  console.log(degree);

  console.log(degreeAux);
  console.log(arrayDegree);
  console.log(scaleDegree);
  console.log(newDegree);
  return "test";
}
try {
  const temerature = "50f";
  const temperatureConverted = degreeCovert(temerature);
  console.log(`${temerature} = ${degreeCovert(temerature)}`);
} catch (error) {
  console.error(error);
}

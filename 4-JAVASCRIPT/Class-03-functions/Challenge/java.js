//Crie uma função para converter velocidade de m/s para km/h
// Solicite a velocidade ao usuário via prompt
// Escreva (write) na tela o resultado

function converterMsToKmh(speed){
 return (speed * 3.6) + "Km/h"
}
/*const userSpeed = prompt("Digite a velocidade");
document.write(converterMsToKmh(userSpeed));*/


console.log(converterMsToKmh(15));

const userSpeed = prompt("Digite a velocidade");
const convertedSpeed = converterMsToKmh(userSpeed);
document.write(convertedSpeed + "Km/h");
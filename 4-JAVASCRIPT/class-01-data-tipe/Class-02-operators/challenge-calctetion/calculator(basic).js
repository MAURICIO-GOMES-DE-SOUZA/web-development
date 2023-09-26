//Solicite 2 números e apresente:



const num1 = Number(prompt("Digite o primeiro nùmero"));
const num2 = Number(prompt("Digite o segundo nùmero"));


const add = num1 + num2
const sub = num1 - num2
const mul = num1 / num2
const rem = num1 % num2
const exp = num1 ** num2
const sqr = num1 ** (1 / num1);

document.write(`A soma de ${num} e ${nim2} = ${add} <br>`);

document.write(`subtração de ${num} e ${nim2} = ${sub} <br>`);

document.write(`A multiplicação de ${num} e ${nim2} = ${mul} <br>`);

document.write(`A divisão de ${num} e ${nim2} = ${div.toFixed(2)} <br>`);

document.write(`A potência de ${num} e ${num2} = ${rem} <br>`);

document.write(`A raiz ${num} e ${nim2} = ${sqr.toFixed(2)}v<br>`);
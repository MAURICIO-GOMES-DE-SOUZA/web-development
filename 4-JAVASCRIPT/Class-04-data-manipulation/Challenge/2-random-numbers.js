// Crie uma função capaz de retornar um número aleatório dentro de um intervalo determinado por parâmetros min(mínimo) e max(máximo).

function randomNumber(min, max) {
    // return (Math.random() * 5)
    return (Math.floor(Math.random() *5) + 1) // 1-5

return Math.floor(Math.random() * (max - min + 1)) + min;// arredonda para o valormenor, e soma com o valor min.
}

/*console.log(randomNumber(1, 5));
console.log(randomNumber(1, 5));
console.log(randomNumber(1, 5));
console.log(randomNumber(1, 5));*/


console.log(randomNumber(5, 7));
console.log(randomNumber(5, 7));
console.log(randomNumber(5, 7));
console.log(randomNumber(5, 7));
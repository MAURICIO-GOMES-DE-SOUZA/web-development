// ⚠Desafio 13

// Crie uma função para calcular o fatorial de um número
// Passe o número via argumento e use um FOR para operação


function calculateFactor(number) {
    let aux =1;
    for (let i = number; i > 0; i--) {
    aux *= i;
    }
    return aux;
}

const number = 5;
console.log(calculateFactor(number));
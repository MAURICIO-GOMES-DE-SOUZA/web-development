const randomNumber = Math.ceil(Math.random() * 10);
console.log(randomNumber);
let countTry = 1;
while (true) {
  const guessNumberUser = prompt("Advinhe um número de 1 a 10");
  console.log(guessNumberUser);
  if (guessNumberUser === null) {
    alert("Programa encerrado!");
    break;
  }

  if (guessNumberUser === "" || isNaN(guessNumberUser)) {
    alert("insira um número de 1 a 10!");
    continue;
  }

  if (guessNumberUser < 1 || guessNumberUser > 10) {
    alert("Atenção, números de 1 a 10!");
  }

  const gameOver = Number(guessNumberUser) === randomNumber;
  if (gameOver) {
    alert(
      `parabéns você acertou o número ${randomNumber} em ${countTry} tentativa(s)`
    );
    break;
  }
  countTry++;
}

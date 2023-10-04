// const dateWasBorn = prompt("Digite a datade nascimento(yyy-mm-dd:)")

const dateWasBorn = new Date(prompt("Digite a datade nascimento(yyy-mm-dd:)"))

const dateNow = new Date();
const userAge = Math.floor((dateNow - dateWasBorn) / 1000 / 60 / 60 / 24 / 365.25); // como converter sua idade de segundos para anos.
console.log(userAge);
// const weekDay = new Date().getDate(); // 0-6
// const weekDay = new Date().getDate() + 1;// 1-7
const weekDay = 13;

console.log(weekDay);

switch (weekDay) {
  case 0:
    console.log("Domingo-Feira");
    break;
  case 1:
    console.log("Segunda-Feira");
    break;
  case 2:
    console.log("Terça-Feira");
    break;
  case 3:
    console.log("Quarta-Feira");
    break;
  case 4:
    console.log("Quinta-Feira");
    break;
  case 5:
    console.log("Sexta-Feira");
    break;
  case 6:
    console.log("Sábado");
    break;
  default:
    console.log("Dia não encontrado!");
}

const option = prompt(`
 Digite a opção desejada:

 1- Consulta
 2- Atendimento
 3- Encerrar
`);

switch (option) {
  case "1":
    alert("Vamos agendar sua cundulta");
    break;
  case "2":
    alert("Vamos transferir para um de nossos tendentes");
    break;
  case "3":
    alert("Obrigado, volte sempre!");
    break;
  default:
    alert("Opção inválida!!!");
    break;
}

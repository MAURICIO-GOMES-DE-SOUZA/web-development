// Crie uma função para converter média para o sistema de caracteres ABC
// Depois diga se o aluno foi aprovado (A, B e C) ou reprovado (D e F):
// As funções devem funcionar com strings e notas inválidas devem retornar mensagem de erro.

// A: 90 - 100
// B: 80 - 89
// C: 70 - 79
// D: 60 - 69
// F:  < - 60

function convertAveragetoABC(average) {
  if (typeof average === "string") {
    average = Number(average.replace(",", "."));
  }
  if (average >= 90 && average <= 100) {
    return "A";
  } else if (average >= 80 && average < 89) {
    return "B";
  } else if (average >= 70 && average < 79) {
    return "C";
  } else if (average >= 60 && average < 69) {
    return "D";
  } else if (average >= 0 && average < 60) {
    return "F";
  } else {
    return `´Média inválida`;
  }
}

const averageStudent = "95,5";
const averageStudentABC = convertAveragetoABC(averageStudent);

switch (averageStudentABC) {
    case "A":
        console.log("exelente, aprovado com A");
        break;
    case "B":
        console.log("Muito bem, aprovado com B");
        break;
    case "C":
        console.log("Aprovado com C");
        break;
    case "D":
        console.log("foi quase, reprovado com D");
        break;
    case "F":
        console.log("foi quase, reprovado com F ");
        break;

    default:
        console.log("Nota ABC inválida");
        break;
}

// console.log(convertoABC(averageStudent));

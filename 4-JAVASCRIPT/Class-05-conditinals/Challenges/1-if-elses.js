/*Crie uma função para calcular média do aluno

A média da escola é 7 e ela realiza duas provas

Apresente a média e a situação se aprovado ou reprovado*/

function studentAverage(grade1, grade2) {
  // grade1 + grade2 / 2  Teria um problema porque ele realizaria primeiro a divisão.
  return (grade1 + grade2) / 2;
}

const average = studentAverage(5, 1);
console.log(average);

// if (average >= 7) {
//     console.log("Aprovado");
// }
// else {
//     console.log("Reprovado");
// }

if (average >= 7) {
  console.log("Aprovado");
} else if (average >= 4) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

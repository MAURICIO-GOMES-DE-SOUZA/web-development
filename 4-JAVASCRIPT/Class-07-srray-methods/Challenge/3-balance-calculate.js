// Crie uma lógica para calcular o somatório das Receitas e das Despesas abaixo
// Imprima os somatórios e o saldo formatado no padão brasileiro,
// Informe se a situação está positiva ou negativa e se existe dívidas.

const incomes = [
  "salary",
  "R$ 2000,00",
  "commission",
  "R$ 825,45",
  "bônus",
  "R$ 320,00",
];

const expenses = [
  "rent",
  "R$ 500,00",
  "energy",
  "R$ 325,55",
  "water",
  "R$ 120,34",
  "food",
  "R$ 1300,62",
  "R$ 898,94",
  
];

const incomeValues = incomes.filter((value) => value.includes("R$ "));

const incomeValuesNumber = incomeValues.map((value) => {
  return Number(value.replace("R$ ", "").replace(",", "."))}
);
const sumIcomes = incomeValuesNumber.reduce((a, b) => a + b);

console.log(sumIcomes.toLocaleString("pt-BR", {
    style: "currency", 
    currency: "blr"
}));

const expensesValues = expenses.filter((value) => value.includes("R$ "));

const expenseValuesNumber = expensesValues.map((value) =>{
  return Number(value.replace("R$ ", "").replace(",", "."))}
);
const sumexpenses = expenseValuesNumber.reduce((a, b) => a + b);


console.log(sumexpenses.toLocaleString("pt-BR", {
    style: "currency", 
    currency: "blr"
}));

let situation;

if (sumIcomes > sumexpenses) {
    situation = "Saldo Positivo!"
} else if (sumIcomes < sumexpenses) {
    situation = "Saldo Negativo!"
} else if (sumIcomes === sumexpenses) {
    situation = "Sem saldo mas sem dívidas!"
};

console.log(situation);
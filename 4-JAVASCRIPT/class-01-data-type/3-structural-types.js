//object

let nameStudent = "Naurício";
let age = 22; //idade
let profission = "Web Development";

let student1 = { name: "Murício" }; //um objeto javascript é uma declaração de chave valor
console.log(student1.name);

console.log(nameStudent);
let student2 = {
  name: "Mauricio",
  age: 22,
  profission: "Web Developmet",
  action: () => "estudou", //função, outro objeto estruturado.
};

console.log(student2);
console.log(typeof student2);
console.log(student2.name);
console.log(student2.age);
console.log(student2["profission"]); //tbm utilizado em pyton
console.log(student2.action);

//Array (Vector)
//let pokedex = ["Charmander", 6,"Bulbasour", 5, "Squirtle", 4]; //voce pode usar outros tipos de dados. nm etc

//let pokedex = [
//  ["Charmander", 6],
// ["Bulbasour", 5],
// [ "Squirtle", 4],
//]; //voce pode usar outros tipos de dados. nm etc

let pokedex = [
  { name: "Charmander", level: 6 },
  { name: "Bulbsour", level: 5 },
  { name: "Squirtle", level: 4 },
];

console.log(pokedex);
console.log(typeof pokedex);
console.log(pokedex[0]);
console.log(pokedex[2]);
console.log(pokedex[1][0]);
console.log(pokedex[0].name);
console.log(pokedex[0].level);

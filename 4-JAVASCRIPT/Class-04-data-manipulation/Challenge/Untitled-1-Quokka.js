const myArray = Array("A", 1, () => "a");
console.log(myArray);

console.log(myArray);
console.log(myArray[0]);
console.log(myArray[2]());
console.log(myArray.join("_"));

const myName = "Maurício";

console.log(myName.split("").reverse().join("")); //reverte e junta o nome.

const arrayTechs = ["HTML", "CSS", "GIT"];

arrayTechs.push("JavaScript"); //acrescenta um método no Array
arrayTechs.push("veja o exemplo");

arrayTechs.pop(); //remove o último valor atribuido no Array.
// arrayTechs.pop();

const removeItem = arrayTechs.pop(); //FIFO /LIFO
console.log(removeItem + "foi removido com sucesso!");
//declara o ítem removido.

const removeItemSTART = arrayTechs.shift();
console.log(removeItemSTART + "foi removido com suceso!");

arrayTechs.unshift("react");
arrayTechs.unshift("SQL");

console.log(arrayTechs.includes("SQL")); //Me responde se é verdadeiro ou falso
console.log(arrayTechs.includes("sql")); // Cuidado com as letras maiúsculs e minúsculas.

arrayTechs.indexOf("SWL");
console.log(arrayTechs.indexOf("SQL"));
console.log(arrayTechs.indexOf("CSS"));
console.log(arrayTechs.indexOf("CSs")); //Se o valor for -1, significa que ele não enconttrou o valor do Array

console.log(arrayTechs.slice(1));
console.log(arrayTechs.slice(1, 4));
console.log(arrayTechs.slice(-2));
console.log(arrayTechs.slice(-3, -1));

console.log(arrayTechs.splice(-1));
console.log(arrayTechs.splice(-2));

console.log(arrayTechs);
console.log(myArray.concat(arrayTechs)); //junta os dois arrays.

console.log(arrayTechs);

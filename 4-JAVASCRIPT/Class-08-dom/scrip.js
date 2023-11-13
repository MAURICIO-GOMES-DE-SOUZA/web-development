const myTitle = document.querySelector("h1"); //Manipulando o Elemento
const myContainer = document.querySelector(".container");

console.log(myTitle);
console.log(myTitle.textContent);
console.log(myTitle.innerHTML);

console.log(myContainer);
console.log(myContainer.textContent);
console.log(myContainer.innerHTML);

myTitle.innerText = "Document Object Model"; //coneúdo do H1...
myTitle.innerText = "<i>MAURÍCIO</i>";
myTitle.innerHTML = "<i>MAURÍCIO</i>"; //em itálico

myTitle.style.color = "#f00";
myTitle.style.backgroundColor = "lightgray";
myTitle.style.color = "red"; //pode ser colocada tambèm o nm da cor

// const boxesNodeList = document.getElementsByClassName(".box"); //HTMLColection

const boxesNodeList = document.querySelectorAll(".box") //NodeList

// forheact => uma função que contém outra função dentro
console.log(
  boxesNodeList.forEach((node) => {
    node.style.color = "blue";
  })
);

const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const sumButton = document.querySelector(".sumButton");
const result = document.querySelector(".result");

function sumNumbe() {
  result.innerHTML = Number(num1.value) + Number(num2.value);
}

sumButton.addEventListener("click", sumNumbe);
num1.addEventListener("keyup", () => {
  console.log(num1.value);
});

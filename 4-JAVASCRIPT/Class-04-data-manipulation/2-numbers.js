let num1 = -2.5069386376979879;
let num2 =2637654361886298723

console.log(num1);
console.log(parseInt(num1));
console.log(parseInt(num2));
console.log(parseFloat(num2));

console.log(String(num2).length);//a string foi adicionada porque estamos trabalhando neste caso com números
console.log(String(num1.toFixed(2)).replace(".", ","));
console.log(2.5069386376979879.toFixed(2).replace(".", ","));

//2.4356456.toFixed(2) ele vai imprimir apena 2 casas decimais após a vírgula.

console.log(num1.toLocaleString("pt-br", {
style: "currency",
currency:"usd"
//currency:"brl"
}));


console.log(num1);
console.log(Math.abs(num1));

const numbers = [2, 3, 4, 7, 98, 3, 2, 54, 76, 3]

console.log(Math.max(1, 3));
console.log(Math.max(...numbers));
console.log(Math.max(2, 3, 4, 7, 98, 3, 2, 54, 76, 3));

console.log(Math.min(2, 3));


console.log(Math.round(2.5));
console.log(Math.round(2.4));
console.log(Math.floor(2.4));
console.log(Math.ceil(2.4));
console.log(Math.round(Math.random));
console.log(Math.round(0.99) * 10);
console.log(Math.round(Math.random()) * 10); //0-10
console.log(Math.floor(Math.random()) * 10);//0-9
console.log(Math.floor(Math.random()) * 11);//1-10

/*while (Math.ceil(Math.random() * ) === 0){
    console.log("rodando....");
}*/



//console.log(Math.random());






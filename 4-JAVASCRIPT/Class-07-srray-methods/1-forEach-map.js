


const array = ["Matrix", "IT", "ET", "JUmanji", "Barbie"];
// console.log(array);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
    // }

// array.forEach((value, index) => [
// console.log({value, index})
// ]); IMMUTABLE

// const arrayMap = array.map((value, index, array) => { //*importante
// return {value, index, array};
// console.log(arrayMap);
// })

const dollar = [10, 20, 300, 40, 50]

const realConverted = dollar.map((value) => {
return value * 5.05
})

console.log(dollar);
console.log(realConverted);


// let count = 0;
// while (count < 10) {
//   console.log(count);
//   count++; //fator de incremeto
// }

// for (let index = 0; index < array.length; index++) {
//   if (count > 2 && count < 8) {
//     //continue;
//     break;
//   }
//   console.log(count);
// }

const myArray = ["A", "B", "C", "D"];
const ArrayBiD = [["A", "B", "C"], [1, 2, 3], [[7, 8, 9]]];
// console.log(ArrayBiD[0][1]);

// for(let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

for (let i = 0; i < ArrayBiD.length; i++) {
  for (let j = 0; j < ArrayBiD.length; j++) {
      console.log(arrayBid[i][j]);
   }

  }


for (const i of myArray) {
    console.log((i));
}

for (const i of arrayBid) {
    for (const j of i) {
        console.log(j);
    }
}



for (const i in Object) {
    console.log(i);
    console.log(myArray[i]);
}
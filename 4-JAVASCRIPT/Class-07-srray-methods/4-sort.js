const arrayNumbers = [2, 4, 5, 7, 8, 9, "7", 40];

// const value = arrayNumbers.sort((a, b) => {
//     if (a > b) return 1;
//     if (a < b) return-1;
//     return 0;
// console.log(value.join("-"));
// });

const arreySorted = arrayNumbers.sort((a, b) => a -b)
console.log(arreySorted);
console.log(arrayNumbers.join("-"));

const arrayNames = ["Pedinho", "Eduardo", "Luiza", "Érick"];

arrayNames.sort((a, b) => a -b);
arrayNames.sort((a, b) => {
   a = a.toUpperCase();
   b = b.toUpperCase();
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});

arrayNames.sort((a, b) => a.localeCompare(b));
arrayNumbers.sort((a, b) => String(a).localeCompare(b));


console.log(arrayNumbers);
console.log(arrayNames);

const arrayAnimes = [
    { name: "Cavaleiros do Zodíaco", year: 1986 },
    { name: "Dragon Ball", year: 1984 },
    { name: "Digimonn", year: 1997 },
    { name: "Naruto", year: 1997 },
    { name: "Jaspion", year: 1985 },
];
console.log(arrayAnimes.sort((a, b) => a.year - b.year));

const sorteddArrayAnimes = arrayAnimes.sort((a, b) => {
    if (a.year > b.year) return 1;
    if (a.year < b.year) return -1;
return 0;
});
const sorteddArrayAnimesByName = arrayAnimes.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
return 0;
});

console.table(arrayAnimes);




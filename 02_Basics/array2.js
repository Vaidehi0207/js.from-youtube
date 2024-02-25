const marvelHeros = ["thor","Ironman","spiderman"];
const dc = ["superman","flash","batman"];

//marvelHeros.push(dc);

//console.log(marvelHeros);
//console.log(marvelHeros[3][1]);

const allHeros = marvelHeros.concat(dc);
console.log(allHeros);

const allNew = [...marvelHeros, ...dc];
console.log(allNew);

const anotherArray = [1,2,3,4,[5,6],[6,7,[8,9]]];
const realArray = anotherArray.flat(5)
console.log(realArray);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
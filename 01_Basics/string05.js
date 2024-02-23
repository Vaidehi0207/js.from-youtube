const name = "Vaidehi"
const age = 20
//console.log(name + " " + age + " " + "Value");

//console.log(`Hello my name is ${name} and my age is ${age}`);

const gameName = new String('Priya-02-002')
//console.log([gameName[0],gameName[1]])
//console.log(gameName.__prototype__);
//console.log(gameName.length);
//now to change upper case and lowercase
//console.log(gameName.toUpperCase())
console.log(gameName.charAt(5))
console.log(gameName.indexOf('t'))

const newString1 = "   Vaidehi00   "
console.log(newString1);
console.log(newString1.trim());


const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-7,4);
console.log(anotherString);

const url = 'https://vaidehi%20.priya@gmail.com';
console.log(url.replace('%20','-'));
console.log(url.includes('hitesh'));

console.log(gameName.split('-'));


//primitive
//7 types
//string, number, boolean, null, symbol, undefined, BigInt

const score = 100;
const isLoggedIn = false;
const scoreValue = 100.2
//intially temperature ki value kuch ni h 
const outsideTemperature = null;
//value undefinded h bas variable define h 
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

//check both are not equal
console.log(id === anotherId);


const bigNumber = 23687420146430;

//Non-primitive dataypes
//array, objects, functions

//array
const Heros = ["shaktiman", "naagraj", "doga"];

//objects
let myObj = {
    name: "vaidehi",
    age: 21
}

//console.log([Heros],[myObj]);

//function declaration
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof scoreValue);

//+++++++++++++++++++++++++++++++++++++++++++++++++++

//Heap and Stack in javascript
let myName = "Priya";

let anotherName = myName;
myName = "Vaidehi";

console.log(myName);
console.log(anotherName);

let userOne = {
    email : "one@gmail.com",
    upi : "user1@ybl"
}
let userTwo = userOne;

userTwo.email = "vaidehi@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

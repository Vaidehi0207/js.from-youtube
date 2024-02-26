// console.log("V");
// console.log("A");
// console.log("I");
// console.log("D");
// console.log("E");
// console.log("H");

function myName(){
// console.log("V");
// console.log("A");
// console.log("I");
// console.log("D");
// console.log("E");
// console.log("H");
}

//myName

function addTwoNumbers(number1, number2){
    // let result =  number1 + number2;
    // return result;
    return number1+number2
}
const result = addTwoNumbers(3,5);

//console.log("Result: ", result);

//create one more function
function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("Please enter a username");
        return ;
    }
    return `${username} just Logged in`;
}
// console.log(loginUserMessage("Vaidehi"));

// console.log(loginUserMessage("Priya"));


//shopping cart

function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,400,600,1000,2000));

const user = {
    username: "Priya",
    price: 199
}

function handle(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handle(user)

const myNewArray = [100,200,300,400];

function returnSecondArray(getArray){
    return getArray[1]
}

console.log(returnSecondArray(myNewArray));
console.log(returnSecondArray([100,200,300,400]));
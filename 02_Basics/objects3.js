//singleton

const mySym = Symbol("key1")
//object literals
//object declaration
const User = {
    name: "Priya",
    "full name" : "Priya02",
    [mySym] : "Key1",
    age: 21,
    email: "priya@gmail.com",
    isLogIn : false,
    lastLoginDays : ['sat','sun','mon']
}

//accessing objects
// console.log(User.email);
// console.log(User["email"]);
// //cant access full name by using .
// //console.log(User."full name");
// console.log(User["full name"]);
// console.log(User[mySym])
// //console.log(typeof User.mySym)

//value ko change krne ke liye 
User.email = "vaidehi02@gmail.com"
console.log(User["email"]);

//if we want ki values change hi na ho toh use freeze
//Object.freeze(User)
//if we change email value then it will not change 
User.email = "vaidehi@gmail.com"
console.log(User);

//suppose User ke saath greeting add krni h 
User.greeting = function(){
    console.log("hello js user");
}
console.log(User.greeting());

User.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(User.greetingTwo());

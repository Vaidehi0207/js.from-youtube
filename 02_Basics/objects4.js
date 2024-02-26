//object
//const tinderUser = new Object()

const tinderUser = {}
tinderUser.name = "Anurag"
tinderUser.id = "123abc"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userFullname : {
            firstname : "priya",
            lastname : "Kumari"
        }
    }
}
//console.log(regularUser.fullname.userFullname.firstname)

const obj1 = {1 : 'a', 2 : 'b'}
const obj2 = {3 : 'c', 4 : 'd'}
const obj4 = {5 : 'e', 4 : 'f'}

//const obj3 = Object.assign({},obj1, obj2, obj4)

//array wali problem aayegi object ke andar object
//console.log(obj3)

//console.log(obj3);

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id : 1,
        email : "priya@gmail.com"
    },
    {
    },
    {
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename : "Hi world",
    price : "999",
    courseInstructor : "Priya"
}

const{courseInstructor} = course
console.log()
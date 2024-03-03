const useremail = "priya02@gmail.com"
if(useremail){
    console.log("Got user email");
}else{
    console.log("don't have user email");
}

//false values
//false, 0, -0, "", null, undefined, Bigin On, NaN ont a number

//truthy values
//"0" string ke andar zero is a truthy value
//'false', " ", [], {}, function(){},

// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }


//nullish coalescing operator(??): null underdefined
let val1
val1 = 5 ?? 10

val1 = null ?? 10

val1 = undefined ?? 15

val1 = null ?? 10 ?? 15
console.log(val1);

//ternary operator 
//condition ? true : false

const icetea = 100;
icetea >= 80 ? console.log("less than 80 ") : console.log("more than 80");;
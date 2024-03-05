//for loop 

// for (let i = 0; i <=10; i++) {
//     const element = i;
//     if(element == 5)
//     console.log("5 is cuteee");

//     console.log(element);
// }

// 


let myArray = ["flash","batman","superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    //array ki length print karane ke liye
    //console.log(myArray.length);
    const element = myArray[index];
    console.log(element);
}

//break and continue
for (let i = 1; i <= 20; i++) {
    if(i == 5){
        //5 print hoga hi ni continue ho jayega
        console.log(`Value is 5 detected`);
        continue;
    }
    console.log(`Value of i is ${i}`);
    
}

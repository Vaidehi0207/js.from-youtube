const coding = ["java","pyhton","cpp","ruby","Html"]

// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach((item) => {
//     console.log(item);
// })

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)
const myObj = {
    js : "Javascript",
    cpp : "C++",
    rb : "Ruby",
    swift : "swift by apple"
}

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ["java","cpp","ruby",'html']
for (const key in programming) {
        console.log(programming[key]);
}
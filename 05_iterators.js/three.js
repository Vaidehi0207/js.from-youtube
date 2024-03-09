//for of 

// ["","",""]
// [{},{}],{}]

// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }

const greetings = "Hello World"
for (const i of greetings) {
    //console.log(`Each char of is ${i}`);
}

//maps
const map = new Map()
map.set('IN',"India")
map.set('USA',"United State of America")
map.set('FR',"France")
map.set('IN',"India")

for (const [key,value] of map) {
    //console.log(key, ":-",value);
}
//console.log(map);

const myObject = {
    'game1' : 'NFS',
    'game2' : 'SpiderMan'
}
for (const [key,value] of myObject) {
//    console.log(key, ":-",value);
}
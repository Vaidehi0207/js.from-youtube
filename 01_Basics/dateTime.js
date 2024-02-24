let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let mycreateDate = new Date(2023, 0, 23);
console.log(mycreateDate.toDateString());

//let myCreate = new Date(2023, 0, 23, 5, 3);
//console.log(myCreate.toLocaleString());

let myCreate = new Date("2023-01-12");
console.log(myCreate.toLocaleString());

let myCreate1 = new Date("12-01-2024");
console.log(myCreate.toLocaleString());

let myDateStamp = Date.now();
//console.log(myDateStamp);
//console.log(myCreate1.getTime());

console.log(Date.now()/1000);

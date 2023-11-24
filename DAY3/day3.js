const now = new Date()
console.log(now) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)
const now2 = new Date()
console.log(now.getFullYear()) // 2020

const now3 = new Date()
console.log(now.getDate()) // 4, because the day of the month is 4th,  day(1-31)
const now4 = new Date()
console.log(now.getDay()) // 6, because the day is Saturday which is the 7th day
//  Sunday is 0, Monday is 1 and Saturday is 6
// Getting the weekday as a number (0-6)

let age = 20;
console.log(typeof age);

console.log( 10 == "10");
console.log(parseInt("9.8") === 10);
console.log("python".length !== "jargon".length);
console.log(!(4 < 3));
console.log(!(false));

const yanzu = new Date()
let year = yanzu.getFullYear()
console.log(year);
console.log(yanzu.getMonth() + 1);
console.log(yanzu.getDay());
console.log(yanzu.getHours());

let go = prompt("enter your ${numer}")
let b = prompt("entr b")
alert( go * b)

let myag = 3

 myag > 7 ? alert("good") : alert("normal");

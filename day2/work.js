let userOne = {
    ola : 1,
    book: "two"
}

const PI = Math.PI

console.log(PI);

const number = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log(number)

let firstName = "OLAYINKA"
let lastName = "ABULFATAH"

console.log(firstName.toLocaleLowerCase());
console.log(firstName.split( ));

let fullName = firstName + " " + lastName

console.log(fullName);


const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')


let a = 2
let b = 3
console.log(`${a} is greater than ${b}: ${a > b}`)

//
//
//
//
let challenge = "30 Days of javascrpit"

console.log(challenge);
// console.log(challenge.length());
console.log(challenge.toLocaleUpperCase());
console.log(challenge);

console.log(challenge.substring(3,));
console.log(challenge.split());;
console.log(challenge.includes("Script"));
console.log(challenge.split(" " ));
let media = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

console.log(media.split(","));

console.log(challenge.replace('JavaScript', 'Python'));
console.log(typeof "10" === 10);
console.log(Math.random() * 101);
let numbe = prompt('Enter number', 'number goes here')
console.log(numbe)

const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // result will be true or false based on what you click on the dialog box

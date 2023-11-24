// // let age = prompt("enter your age")
// // if(age > 30){
// //     console.log( "your age is high");
// // } else{
// //     console.log( "your age is low");

// const { number } = require("joi")

    
// // }


// // let sum = 0

// // for (let i = 0; i<=100; i++){
// //     console.log( sum + i);
    
// // }


// // // const fullStack = [
// // //     ['HTML', 'CSS', 'JS', 'React'],
// // //     ['Node', 'Express', 'MongoDB']
// // //   ]



// // //   for (const m in  fullStack){

// // //   console.log(m)

// // //   }

// //   const changeToUpperCase = arr => {
// //     const newArr = []
// //     for (const ele in arr){
// //         newArr.push(ele.toUpperCase())
// //     }
// //     return newArr
// //   }

  


// //   const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
// //   console.log(changeToUpperCase(countries)
// //   );





//   const numbers = [1, 2, 3, 4]
// const sumArray = arr => {
//   let sum = 0
//   arr.forEach(function(element) {
//     sum += element
//   })
//   return sum

// }
// console.log(sumArray(numbers))



// //
// console.log(numbers.sort()) 
// numbers.sort(function (a, b) {
//   return a - b
// })

// console.log(numbers) // [3.14, 9.81, 37, 100]

// numbers.sort( (a, b) =>{
//   return b - a
// })
// console.log(numbers) //[100, 37, 9.81, 3.14]


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

console.log(countries.filter(country => country.length ===  6 ));

countries.forEach((country) => (console.log(country)))

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names.map(n => n.toLocaleUpperCase())
);

console.log(names.map(n => n.length === "countries".length )
);


  const numbers = [1, 2, 3, 4]

  console.log(numbers.map(n => n * n )
);

const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

console.log(products.map(a => a.product )
);

  



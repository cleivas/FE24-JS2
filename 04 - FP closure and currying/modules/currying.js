// function multiply(a) {
//     return function (b) {
//         return a * b;
//     };
// }


const multiply = a => b => a * b;

const double = multiply(2);
console.log(double(5));
console.log(multiply(2)(5))

const triple = multiply(3);
console.log(triple(5));
console.log( multiply(3)(10) )

// export function filterPopulation(amount){

//     return function(arr){
//         return arr.filter( country => country.population > amount)
//     }
// }

export const filterPopulation = amount => arr => arr.filter( country => country.population > amount);
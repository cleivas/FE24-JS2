let num = 50;
num = 'Clara';

console.log(num) //Loggar ändå Clara

let age:number;
// age = '12';
age = 12;
console.log(age)

let numbers:number[] = [3, 32, 24, 3, 1];
numbers = ['3'];

let arr: [string, number, boolean];
arr = ['test', 66, true];
arr.push('mer test');


function multiply(x:number, y:number):number{
    return x*y;
}

console.log( multiply(4, 5))
console.log( multiply(4, 5, 8))

function getName(firstName:string, lastName:string = 'Leivas'):string{
    return firstName+' '+lastName;
}

console.log(getName('Brad'))
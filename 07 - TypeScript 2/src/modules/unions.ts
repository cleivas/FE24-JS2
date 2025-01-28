let mynt: 'krona' | 'klave';

// mynt = 66;
mynt = 'klave';


function add(a: string|number, b:string|number):string|number{

    // Narrowing, dvs VScode och TS vet vilken datatyp varje parameter kan ha i varje if-statment
    if(typeof a == 'string' && typeof b == 'string'){
        return a + ' ' + b;
    }
    else if(typeof a === 'number' && typeof b === 'number'){
        return a+b;
    }
    return 'Wrong datatype'
}

console.log(add(1, 7))
console.log(add('string', 7))
console.log(add('string', 'another string'))

let userAccess: 'normal' | 'admin' | 'superAdmin';
userAccess = 'superAdmin';
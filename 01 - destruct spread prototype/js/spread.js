// Spread
const numbers = [43, 43, 3, 26, 95, 4];

console.log(numbers)
console.log(43, 43, 3, 26, 95, 4)
console.log(...numbers)

console.log( Math.max(numbers))
console.log( Math.max(...numbers))


const country = {
    name: 'Uruguay',
    currency: 'Pesos'
}

const exhangeRate = {
    rate: 3.6
};

console.log(country, exhangeRate)

const countryRate = {...country, ...exhangeRate};
console.log(countryRate)
console.log(countryRate.name, countryRate.rate);

// const c2 = country;
const c2 = {...country};
c2.name = 'Sweden';
console.log(country.name, c2.name)

// Fungerar endast som shallow clone 
const deepObj = {
    a: 1,
    b: {
        deepProp: 99
    }
};

const deepObjClone = {...deepObj};
console.log(deepObjClone)

deepObj.b.deepProp = 0;
console.log(deepObjClone)

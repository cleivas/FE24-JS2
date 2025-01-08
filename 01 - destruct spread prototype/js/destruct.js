const user = {
    name: 'Superwoman',
    age: 1000,
    isStrong: true
}

console.log(user.name);

const {name, ages} = user;
// ages är undefined eftersom user-objektet inte innehåller en egenskap som heter ages
console.log(name, ages)

const arr = [1, 2, 4, 5, 6, 7];
const [a, b, c, whatever] = arr;
console.log(a, b, c, whatever);

const numberOfLegs = 8;
const type = 'spider';

const animal = {numberOfLegs, type};
console.log(animal);


async function getCountryFlag(name){
    const url = `https://restcountries.com/v3.1/name/${name}`;
    
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
    const [country] = data;
    console.log(country);

    const {flag} = country;
    return flag;
}

getCountryFlag('sweden').then( 
    flag =>{ console.log(flag)});




const movie = {
    title: 'Titanic',
    year: 1996
};


function logTitle( {title} ){
    console.log(title)
}

logTitle(movie)
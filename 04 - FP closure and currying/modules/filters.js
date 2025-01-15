
// function filterMillionPopulation(arr){
//     return arr.filter( function(country){
//         return country.population>1000000;
//     })
// }
export const filterMillionPopulation = arr => arr.filter(country => country.population > 1000000)

export const filterMultipleLanguages = arr => arr.filter( country => Object.keys(country.languages).length>1)

export const filterEuropeanCountries = arr => arr.filter(country => country.region === 'Europe');

// Det är inte alla länder som gränsar till något land så vi måste först kolla om egenskapen borders existerar på objektet.
export const filterBorderingBrazil = arr => arr.filter( country => country.borders ? country.borders.includes('BRA'): false);


// Har en population på mer än en miljon
// Har fler än ett officiellt språk
// Ligger i europa 
// Gränsar till ryssland

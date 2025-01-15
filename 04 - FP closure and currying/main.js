import { addOddNumbers, toTitleCase, mergeUnique, countWords } from "./modules/helpers.js";
import { getCountries } from "./modules/restcountriesapi.js";
import { filterMillionPopulation, filterMultipleLanguages, filterEuropeanCountries, filterBorderingBrazil } from "./modules/filters.js";
import { resize } from "./modules/closure.js";
import { filterPopulation } from "./modules/currying.js";

const numberArr = [6, 3, 2, 4, 1, 3, 6, 2, 5, 3];
console.log( addOddNumbers(numberArr) );

const words = ['hello', 'WORLD' , 'grit', 'mAlMö'];
console.log(toTitleCase(words))


console.log( mergeUnique([1, 2, 3], [3, 4, 5], [5, 6]) ); // [1, 2, 3, 4, 5, 6]


console.log( countWords(['hund', 'katt', 'gorilla', 'katt', 'katt', 'gorilla']) );


async function tryFilters(){

    const countries = await getCountries('Spanish');
    console.log(countries)

    const millionPop = filterMillionPopulation(countries);
    console.log(millionPop)

    const multipleLanguages = filterMultipleLanguages(countries)
    console.log(multipleLanguages)

    const europeanCountries = filterEuropeanCountries(countries);
    console.log(europeanCountries)

    const borderingBrazil = filterBorderingBrazil(countries);
    console.log(borderingBrazil)

    // Using Currying
    const twentyMillionPop = filterPopulation(20000000)(countries);
    console.log(twentyMillionPop)

    const filter40Million = filterPopulation(40000000);
    const fortyMillionPop = filter40Million(countries);
    console.log(fortyMillionPop)

}
tryFilters();

// Using closure
const btnBig = document.querySelector('#big')
const btnSmall = document.querySelector('#small')

btnBig.addEventListener('click', resize('big') )
btnSmall.addEventListener('click', resize('small') )
type Country = {
    name: string,
    flagURL: string,
    population: number
}


async function getCountries(language:string):Promise<Country[]>{

    const url = `https://restcountries.com/v3.1/lang/${language}`;

    const res = await fetch(url);
    const data = await res.json();

    // Mappar om arrayen till en array som innehåller object som följer Country-typen
    const countries:Country[] = data.map( country => {
        return {
            name: country.name.common,
            flagURL: country.flags.png,
            population: country.population
        }
    })

    return countries;
}

getCountries('spanish')
    .then( countries => console.log(countries))
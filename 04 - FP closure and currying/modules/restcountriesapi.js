export async function getCountries(language){
    const url = `https://restcountries.com/v3.1/lang/${language}`;

    const res = await fetch(url);
    const countries = await res.json();
    return countries;
}
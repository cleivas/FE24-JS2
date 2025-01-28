type Coin = 'heads'|'tail';

function flipCoin():Coin{
    const rand = Math.random();
    if(rand > 0.5) return 'heads'
    else return 'tail'
}

console.log(flipCoin())

type WeatherData = {
    temp: number,
    humidity: number,
    description: string,
}

const weatherData: WeatherData[] = [
    {
        temp: 30,
        humidity: 80,
        description: 'its hot and humid',
        // date: 'vlald'
    }
]



type Num = number;

// Interfaces kan endast beskriva objekt
interface Product<type>{
    name: string,
    id: type
}

const product:Product<string> = {
    name: 'glass',
    id: 'sdkfjaoisdufoi'
}

const product2:Product<number> = {
    name: 'cup',
    id: 3249274987
}

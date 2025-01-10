export function City(name, population){
    this.name = name;
    this.population = population;
}



City.prototype.evacuate = function(){
    console.log( `${this.population} people are being evacuated`);
}


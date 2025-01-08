function Superhero(n, superpower){
    this.name = n;
    this.superpower = superpower;
    this.age = 100;
}

Superhero.prototype.usePower = ()=>{
    console.log( `I will kill you with my ${this.superpower}`)
}

const hero1 = new Superhero('Captain America', 'throw shield');
const hero2 = new Superhero('Spiderman', 'spider sense');

console.log(hero1)
console.log(hero2)

hero2.age++;
console.log(hero1, hero2)

hero1.usePower()
hero2.usePower()

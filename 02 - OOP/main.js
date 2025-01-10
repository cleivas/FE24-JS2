import { City } from "./modules/City.js";
import { Animal } from "./modules/Animal.js";
import { DogAPICard } from "./modules/DogAPICard.js";

const amsterdam = new City('Amsterdam', 900000);
console.log(amsterdam)

amsterdam.evacuate();


const berlin = new City('Berlin', 3500000);
berlin.evacuate();

console.log(Object.getPrototypeOf(berlin))

const panda = new Animal('panda', 'Give me bamboo');
const elephant = new Animal('elephant', 'I have a long trunk');

console.log(panda);

// panda.sound = 'piip' //Detta är tillåtet eftersom egenskaperna är public och går att ändra på, ungefär som en let variabel
panda.makeSound();
elephant.makeSound();


const breeds = ['poodle', 'pomeranian', 'labrador', 'terrier', 'husky'];



for(const breed of breeds){
    const breedObj = new DogAPICard(breed);

    console.log(breedObj)

    breedObj.createCard(document.body);
    // breedObj.breed = 'poodle'; 
    // console.log(breedObj.breed)
    // console.log(breedObj.#breed)
    // console.log(breedObj.getDogImage());
    console.log(breedObj.getBreed());

}


// För att förklara this
// const obj1 = {
//     prop: 100,
//     method1(){
//         console.log(this.prop);
//     },
//     method2(){
//         this.method1();
//     }
// }

// const obj2 = {
//     prop: 444,
//     method1(){
//         console.log(this.prop);
//     },
//     method2(){
//         this.method1();
//     }
// }

// obj1.method2();
// obj2.method2();
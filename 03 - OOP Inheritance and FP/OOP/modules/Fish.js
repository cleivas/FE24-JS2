import { Animal } from "./Animal.js";

export class Fish extends Animal{
    #amountOfFins;

    constructor(type, sound, amountOfFins){
        // anropa constructorn av parent class
        super(type, sound);
        this.#amountOfFins = amountOfFins;
    }

    swim(){
        console.log(`The ${this.getType()} is swimming with ${this.#amountOfFins} fins `)
    }
}
export class Animal {
    #type; 
    #sound; 
    constructor(type, sound) {
        this.#type = type; 
        this.#sound = sound; 
    }
    makeSound() {
        const str = `The ${this.#type} says '${this.#sound}, ${this.#sound}'`; 
        console.log(str);
    }
    getType(){
        return this.#type;
    }
}


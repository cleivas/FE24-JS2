export class Animal{

    constructor(type, sound){
        this.type = type;
        this.sound = sound;
    }

    makeSound(){
        console.log(`${this.type} says ${this.sound}, ${this.sound}`)
    }
}
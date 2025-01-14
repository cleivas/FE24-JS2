export class Car{
    #model;
    #year;
    #currentSpeed;
    #maxSpeed;

    constructor(model, year, maxSpeed){
        this.#model = model;
        this.#year = year;
        this.#maxSpeed = maxSpeed;

        this.#currentSpeed = 0;
    }

    accelerate(newSpeed){
        while(newSpeed > this.#currentSpeed && this.#currentSpeed < this.#maxSpeed){
            this.#currentSpeed+=10;
            console.log(this.#currentSpeed);
        }
    }

    brake(newSpeed){
        while(this.#currentSpeed > newSpeed && this.#currentSpeed > 0){
            this.#currentSpeed-=10;
            console.log(this.#currentSpeed)
        }
    }

    getCurrentSpeed(){
        return this.#currentSpeed;
    }
}   